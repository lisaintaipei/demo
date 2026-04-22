import { ImageWithFallback } from './figma/ImageWithFallback';

export function InfoSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="info"
      style={{
        backgroundColor: '#FFFFFF',
        display: 'flex',
        padding: '60px 40px',
        gap: '40px'
      }}
    >
      <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3Njg2Nzc2NXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Lisa Lin"
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
      </div>
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
        <h1 style={{ fontSize: '32px', color: '#000000', margin: 0, fontFamily: 'Arial, sans-serif' }}>Lisa Lin</h1>
        <p style={{ fontSize: '16px', color: '#666666', margin: 0, fontFamily: 'Arial, sans-serif' }}>這是副標題，哈哈哈</p>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <a href="#" style={{ fontSize: '24px', textDecoration: 'none' }}>📘</a>
          <a href="#" style={{ fontSize: '24px', textDecoration: 'none' }}>📷</a>
          <a href="#" style={{ fontSize: '24px', textDecoration: 'none' }}>▶️</a>
        </div>
        <p style={{ fontSize: '16px', color: '#000000', margin: 0, fontFamily: 'Arial, sans-serif' }}>lisa.lin@contact.com</p>
        <button
          onClick={scrollToContact}
          style={{
            backgroundColor: '#C5E4E7',
            color: '#000000',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            width: 'fit-content',
            fontFamily: 'Arial, sans-serif'
          }}
        >
          contact me
        </button>
      </div>
    </section>
  );
}
