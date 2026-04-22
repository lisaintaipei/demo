export function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        backgroundColor: '#C5E4E7',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        fontSize: '24px'
      }}
    >
      <div
        onClick={scrollToTop}
        style={{ cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}
      >
        Lisa Lin
      </div>
      <nav style={{ display: 'flex', gap: '30px' }}>
        <div
          onClick={() => scrollToSection('service')}
          style={{ cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}
        >
          我的服務
        </div>
        <div
          onClick={() => scrollToSection('contact')}
          style={{ cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}
        >
          與我聯繫
        </div>
      </nav>
    </header>
  );
}
