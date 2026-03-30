import { ShieldCheck } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <a href="#home" className="footer-logo brand-font">
          <ShieldCheck className="text-gold" size={24} />
          DashRudhra
        </a>
        <p className="footer-text">
          Digitizing Institutions. Simplifying Management. <br />
          Built by Third-Year Cyber Security Engineering Students.
        </p>
        <p className="footer-text" style={{ marginTop: '2rem', fontSize: '0.8rem', opacity: 0.7 }}>
          &copy; {currentYear} DashRudhra Digital Solutions. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
