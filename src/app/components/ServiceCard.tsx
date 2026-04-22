import { ImageWithFallback } from './figma/ImageWithFallback';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

export function ServiceCard({ title, description, image, link }: ServiceCardProps) {
  return (
    <div
      style={{
        width: '45%',
        minWidth: '400px',
        display: 'flex',
        border: '1px solid #E0E0E0',
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF'
      }}
    >
      <div style={{ width: '50%' }}>
        <ImageWithFallback
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '12px 0 0 12px'
          }}
        />
      </div>
      <div
        style={{
          width: '50%',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '10px'
        }}
      >
        <h3 style={{ fontSize: '20px', color: '#000000', margin: 0, fontFamily: 'Arial, sans-serif' }}>{title}</h3>
        <p style={{ fontSize: '14px', color: '#666666', margin: 0, lineHeight: '1.5', fontFamily: 'Arial, sans-serif' }}>
          {description}
        </p>
        <a
          href={link || '#'}
          target={link ? '_blank' : undefined}
          rel={link ? 'noopener noreferrer' : undefined}
          style={{
            backgroundColor: '#000000',
            color: '#FFFFFF',
            padding: '10px',
            borderRadius: '8px',
            textAlign: 'center',
            textDecoration: 'none',
            fontSize: '14px',
            width: 'fit-content',
            fontFamily: 'Arial, sans-serif'
          }}
        >
          了解更多
        </a>
      </div>
    </div>
  );
}
