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
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #E0E0E0',
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
      }}
    >
      <div style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden' }}>
        <ImageWithFallback
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div
        style={{
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          flex: 1,
        }}
      >
        <h3 style={{ fontSize: '18px', color: '#000000', margin: 0, fontFamily: 'Arial, sans-serif' }}>{title}</h3>
        <p
          style={{
            fontSize: '14px',
            color: '#666666',
            margin: 0,
            lineHeight: '1.5',
            fontFamily: 'Arial, sans-serif',
            flex: 1,
          }}
        >
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
            fontFamily: 'Arial, sans-serif',
          }}
        >
          了解更多
        </a>
      </div>
    </div>
  );
}
