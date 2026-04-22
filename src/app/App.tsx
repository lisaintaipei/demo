import { Facebook, Instagram, Youtube } from 'lucide-react';
import { ServiceSection } from './components/ServiceSection';

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', color: '#000000', backgroundColor: '#FFFFFF' }}>
      {/* Header */}
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
          zIndex: 1000
        }}
      >
        <div 
          style={{ fontSize: '24px', cursor: 'pointer' }}
          onClick={scrollToTop}
        >
          Lisa Lin
        </div>
        <nav style={{ display: 'flex', gap: '30px' }}>
          <button 
            onClick={() => scrollToSection('service')}
            style={{ 
              fontSize: '24px', 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              color: '#000000'
            }}
          >
            我的服務
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            style={{ 
              fontSize: '24px', 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              color: '#000000'
            }}
          >
            與我聯繫
          </button>
        </nav>
      </header>

      {/* Info Section */}
      <section id="info" style={{ backgroundColor: '#FFFFFF', padding: '60px 40px' }}>
        <div style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Left Column - Photo */}
          <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src="https://images.unsplash.com/photo-1581065178026-390bc4e78dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwYXNpYW58ZW58MXx8fHwxNzc2ODY5MzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Lisa Lin"
              style={{ 
                width: '200px', 
                height: '200px', 
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
          </div>
          
          {/* Right Column - Info */}
          <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h1 style={{ fontSize: '32px', color: '#000000', margin: 0 }}>Lisa Lin</h1>
            <p style={{ fontSize: '16px', color: '#666666', margin: 0 }}>這是副標題，哈哈哈</p>
            
            {/* Social Media Icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="#" style={{ color: '#000000' }}>
                <Facebook size={24} />
              </a>
              <a href="#" style={{ color: '#000000' }}>
                <Instagram size={24} />
              </a>
              <a href="#" style={{ color: '#000000' }}>
                <Youtube size={24} />
              </a>
            </div>
            
            <p style={{ margin: 0 }}>lisa.lin@contact.com</p>
            
            <button
              onClick={() => scrollToSection('contact')}
              style={{
                backgroundColor: '#C5E4E7',
                color: '#000000',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                width: 'fit-content'
              }}
            >
              contact me
            </button>
          </div>
        </div>
      </section>

      {/* Service Section (loaded live from Notion) */}
      <ServiceSection />

      {/* Contact Section */}
      <section id="contact" style={{ backgroundColor: '#FFFFFF', padding: '60px 40px' }}>
        <h2 style={{ fontSize: '20px', textAlign: 'center', color: '#000000', marginBottom: '40px' }}>與我聯繫</h2>
        
        <div style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto', gap: '40px' }}>
          {/* Left Column - Form */}
          <div style={{ width: '50%' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', color: '#000000', marginBottom: '5px', fontFamily: 'Arial, sans-serif' }}>
                  姓名
                </label>
                <input 
                  type="text"
                  placeholder="姓名"
                  style={{ 
                    width: '100%', 
                    height: '30px', 
                    border: '1px solid #CCCCCC',
                    padding: '5px',
                    fontSize: '14px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '14px', color: '#000000', marginBottom: '5px', fontFamily: 'Arial, sans-serif' }}>
                  信箱
                </label>
                <input 
                  type="email"
                  placeholder="信箱"
                  style={{ 
                    width: '100%', 
                    height: '30px', 
                    border: '1px solid #CCCCCC',
                    padding: '5px',
                    fontSize: '14px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '14px', color: '#000000', marginBottom: '5px', fontFamily: 'Arial, sans-serif' }}>
                  你的需求
                </label>
                <textarea 
                  placeholder="請描述你的需求"
                  style={{ 
                    width: '100%', 
                    height: '100px', 
                    border: '1px solid #CCCCCC',
                    padding: '5px',
                    fontSize: '14px',
                    fontFamily: 'Arial, sans-serif',
                    boxSizing: 'border-box',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              <button 
                type="submit"
                style={{
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  padding: '10px 20px',
                  border: 'none',
                  cursor: 'pointer',
                  width: 'fit-content'
                }}
              >
                Submit
              </button>
            </form>
          </div>
          
          {/* Right Column - Image */}
          <div style={{ width: '50%' }}>
            <img 
              src="https://images.unsplash.com/photo-1703669020950-280d316e72aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwY29tbXVuaWNhdGlvbiUyMHBob25lfGVufDF8fHx8MTc3Njg2OTMxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="聯繫我們"
              style={{ 
                width: '100%', 
                height: '100%',
                objectFit: 'cover',
                borderRadius: '10px'
              }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#C5E4E7', 
        color: '#666666', 
        fontSize: '12px',
        textAlign: 'center',
        padding: '20px'
      }}>
        © 2026 Lisa Lin 個人網站. All rights reserved
      </footer>
    </div>
  );
}
