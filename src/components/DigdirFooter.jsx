import React from 'react';
import { Paragraph, Link } from '@digdir/designsystemet-react';

export const DigdirFooter = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <img 
            src="/images/digdir-logo.svg" 
            alt="Digitaliseringsdirektoratet logo" 
            width="200" 
          />
          <Paragraph spacing>
            Digitaliseringsdirektoratet
          </Paragraph>
          <Paragraph size="small">
            Postboks 1382 Vika, 0114 Oslo
          </Paragraph>
          <Paragraph size="small">
            Org.nr: 991 825 827
          </Paragraph>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Om nettstedet</h3>
          <ul className="footer-list">
            <li><Link href="/personvern">Personvern</Link></li>
            <li><Link href="/tilgjengelighet">Tilgjengelighet</Link></li>
            <li><Link href="/cookies">Informasjonskapsler</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Kontakt oss</h3>
          <ul className="footer-list">
            <li><Link href="mailto:ki@digdir.no">ki@digdir.no</Link></li>
            <li><Link href="tel:+4712345678">+47 123 45 678</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <Paragraph size="small" className="copyright">
          © {new Date().getFullYear()} Digitaliseringsdirektoratet. Alle rettigheter forbeholdt.
        </Paragraph>
      </div>
    </footer>
  );
};

export default DigdirFooter; 