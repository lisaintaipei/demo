import { ServiceCard } from './ServiceCard';

export function ServiceSection() {
  const services = [
    {
      id: 1,
      title: '專業諮詢服務',
      description: '提供一對一的專業諮詢，幫助您解決各種商業挑戰，制定有效的策略方案。',
      image: 'https://images.unsplash.com/photo-1774921676536-12e96b39238c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNlcnZpY2UlMjBkZXNrfGVufDF8fHx8MTc3Njg2Nzc2NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      title: '企業培訓課程',
      description: '量身定制的企業培訓計劃，提升團隊技能與工作效率，促進組織成長。',
      image: 'https://images.unsplash.com/photo-1771979788419-84487b12e3a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHNlcnZpY2UlMjBkZXNrfGVufDF8fHx8MTc3Njg2Nzc2NXww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

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
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
}
