import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '60px 40px'
      }}
    >
      <h2 style={{ fontSize: '20px', color: '#000000', textAlign: 'center', marginBottom: '40px', fontFamily: 'Arial, sans-serif' }}>
        與我聯繫
      </h2>
      <div style={{ display: 'flex', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ flex: '1' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', color: '#000000', marginBottom: '8px', fontFamily: 'Arial, sans-serif' }}>
                姓名
              </label>
              <input
                type="text"
                placeholder="姓名"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: '100%',
                  height: '30px',
                  border: '1px solid #CCCCCC',
                  borderRadius: '4px',
                  padding: '0 10px',
                  fontSize: '14px',
                  fontFamily: 'Arial, sans-serif',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '14px', color: '#000000', marginBottom: '8px', fontFamily: 'Arial, sans-serif' }}>
                信箱
              </label>
              <input
                type="email"
                placeholder="信箱"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  height: '30px',
                  border: '1px solid #CCCCCC',
                  borderRadius: '4px',
                  padding: '0 10px',
                  fontSize: '14px',
                  fontFamily: 'Arial, sans-serif',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '14px', color: '#000000', marginBottom: '8px', fontFamily: 'Arial, sans-serif' }}>
                你的需求
              </label>
              <textarea
                placeholder="請描述你的需求"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  height: '100px',
                  border: '1px solid #CCCCCC',
                  borderRadius: '4px',
                  padding: '10px',
                  fontSize: '14px',
                  fontFamily: 'Arial, sans-serif',
                  resize: 'vertical',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: '#000000',
                color: '#FFFFFF',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                width: 'fit-content',
                fontFamily: 'Arial, sans-serif'
              }}
            >
              Submit
            </button>
          </form>
        </div>
        <div style={{ flex: '1' }}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758874385535-bd209562d2cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwY29tbXVuaWNhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzY4Njc3NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Contact"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '12px'
            }}
          />
        </div>
      </div>
    </section>
  );
}
