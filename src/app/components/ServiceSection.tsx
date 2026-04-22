import { useEffect, useState } from 'react';
import { ServiceCard } from './ServiceCard';

type Service = {
  id: string | number;
  title: string;
  description: string;
  image: string;
  link?: string;
};

export function ServiceSection() {
  const [services, setServices] = useState<Service[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    let cancelled = false;
    fetch('/api/services')
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || `Request failed: ${res.status}`);
        return data;
      })
      .then((data) => {
        if (cancelled) return;
        setServices(Array.isArray(data.services) ? data.services : []);
        setStatus('ready');
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Failed to load services from Notion:', err);
        setErrorMsg(err?.message || 'Unknown error');
        setStatus('error');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="service"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '60px 40px'
      }}
    >
      <h2 style={{ fontSize: '32px', color: '#000000', textAlign: 'center', marginBottom: '40px', fontFamily: 'Arial, sans-serif' }}>
        我的服務
      </h2>

      {status === 'loading' && (
        <p style={{ textAlign: 'center', color: '#666666', fontFamily: 'Arial, sans-serif' }}>載入中…</p>
      )}

      {status === 'error' && (
        <p style={{ textAlign: 'center', color: '#B00020', fontFamily: 'Arial, sans-serif' }}>
          無法從 Notion 載入服務內容：{errorMsg}
        </p>
      )}

      {status === 'ready' && services.length === 0 && (
        <p style={{ textAlign: 'center', color: '#666666', fontFamily: 'Arial, sans-serif' }}>
          目前沒有服務項目。請在 Notion 資料庫中新增。
        </p>
      )}

      {status === 'ready' && services.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: '30px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
            />
          ))}
        </div>
      )}
    </section>
  );
}
