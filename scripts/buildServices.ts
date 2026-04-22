import { writeFileSync, mkdirSync } from 'fs';
import { dirname, resolve } from 'path';
import { fetchServices } from '../server/notionServices';

const OUT = resolve(process.cwd(), 'src/data/services.json');

async function main() {
  console.log('[buildServices] Fetching latest services from Notion…');
  let services: any[] = [];
  try {
    services = await fetchServices();
    console.log(`[buildServices] Fetched ${services.length} services.`);
  } catch (err: any) {
    console.error('[buildServices] Failed to fetch from Notion:', err?.message || err);
    if (process.env.CI) {
      throw err;
    }
    console.warn('[buildServices] Continuing with empty list (dev fallback).');
  }
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify({ services, generatedAt: new Date().toISOString() }, null, 2));
  console.log(`[buildServices] Wrote ${OUT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
