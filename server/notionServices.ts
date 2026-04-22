import { Client } from '@notionhq/client';

function extractDatabaseId(input: string): string {
  const trimmed = input.trim();
  // If it looks like a URL, prefer the ID in the path (before the query string).
  // The ?v=... part is a *view* ID, not the database ID.
  try {
    const url = new URL(trimmed);
    const pathMatch = url.pathname.match(/[0-9a-f]{32}/i);
    if (pathMatch) return pathMatch[0];
  } catch {
    // not a URL, fall through
  }
  const beforeQuery = trimmed.split('?')[0];
  const match = beforeQuery.match(/[0-9a-f]{32}/i);
  if (match) return match[0];
  const anyMatch = trimmed.match(/[0-9a-f]{32}/i);
  if (anyMatch) return anyMatch[0];
  return trimmed.replace(/-/g, '');
}

function getPlainText(rich: any[]): string {
  if (!Array.isArray(rich)) return '';
  return rich.map((r) => r?.plain_text ?? '').join('');
}

function findProp(props: Record<string, any>, candidates: string[], type?: string) {
  const lowerMap: Record<string, string> = {};
  for (const k of Object.keys(props)) lowerMap[k.toLowerCase()] = k;
  for (const c of candidates) {
    const key = lowerMap[c.toLowerCase()];
    if (key && (!type || props[key]?.type === type)) return props[key];
  }
  if (type) {
    for (const k of Object.keys(props)) {
      if (props[k]?.type === type) return props[k];
    }
  }
  return null;
}

function extractImage(props: Record<string, any>, page: any): string {
  const fileProp = findProp(props, ['image', 'cover', 'photo', 'picture', '圖片', '圖像'], 'files');
  if (fileProp?.files?.length) {
    const f = fileProp.files[0];
    return f?.file?.url || f?.external?.url || '';
  }
  const urlProp = findProp(props, ['image', 'imageurl', 'image url', 'photo', '圖片網址'], 'url');
  if (urlProp?.url) return urlProp.url;
  if (page?.cover) {
    return page.cover.file?.url || page.cover.external?.url || '';
  }
  return '';
}

export async function fetchServices() {
  const token = process.env.NOTION_API_KEY;
  const dbRaw = process.env.NOTION_SERVICES_DATABASE_ID;
  if (!token) throw new Error('NOTION_API_KEY is not set');
  if (!dbRaw) throw new Error('NOTION_SERVICES_DATABASE_ID is not set');
  const databaseId = extractDatabaseId(dbRaw);

  const notion = new Client({ auth: token });

  let response: any;
  try {
    const db: any = await notion.databases.retrieve({ database_id: databaseId });
    const dataSourceId = db?.data_sources?.[0]?.id;
    if (!dataSourceId) throw new Error('No data source found on this Notion database.');
    response = await (notion as any).dataSources.query({ data_source_id: dataSourceId, page_size: 50 });
  } catch (e: any) {
    // Fall back to legacy databases.query for older Notion API versions
    if ((notion as any).databases?.query) {
      response = await (notion as any).databases.query({ database_id: databaseId, page_size: 50 });
    } else {
      throw e;
    }
  }

  const services = response.results.map((page: any) => {
    const props = page.properties || {};

    const titleProp = findProp(props, ['title', 'name', '名稱', '標題', '服務'], 'title');
    const title = titleProp ? getPlainText(titleProp.title) : '';

    const descProp =
      findProp(props, ['description', 'desc', '描述', '說明', '簡介'], 'rich_text') ||
      findProp(props, ['description', 'desc'], 'rich_text');
    const description = descProp ? getPlainText(descProp.rich_text) : '';

    const linkProp = findProp(props, ['link', 'url', '連結', '網址'], 'url');
    const link = linkProp?.url || page.url || '';

    const image = extractImage(props, page);

    return { id: page.id, title, description, image, link };
  });

  return services.filter((s) => s.title);
}
