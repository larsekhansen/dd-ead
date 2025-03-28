import React from 'react';
import { Button, Heading, Paragraph } from '@digdir/designsystemet-react';

export const Hero = ({ title, description, primaryCta, secondaryCta, image }) => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <Heading level={1} size="xlarge" spacing>
            {title}
          </Heading>
          <Paragraph size="large" spacing className="hero-description">
            {description}
          </Paragraph>
          <div className="hero-actions">
            {primaryCta && (
              <Button 
                variant="primary" 
                onClick={primaryCta.onClick} 
                href={primaryCta.href || undefined}
              >
                {primaryCta.text}
              </Button>
            )}
            {secondaryCta && (
              <Button 
                variant="secondary" 
                onClick={secondaryCta.onClick} 
                href={secondaryCta.href || undefined}
              >
                {secondaryCta.text}
              </Button>
            )}
          </div>
        </div>
        {image && (
          <div className="hero-image">
            <img src={image.src} alt={image.alt || "Hero image"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero; 