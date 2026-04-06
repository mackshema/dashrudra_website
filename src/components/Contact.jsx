import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact section-padding" style={{ background: 'var(--bg-gradient)' }}>
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="contact-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="contact-info" style={{ maxWidth: '600px', width: '100%' }}>
            <h3 className="brand-font text-gold" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              Ready to Upgrade?
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
              Whether you need to automate your exams or digitize your entire institution, 
              DashRudhra's suite of digital solutions is here to help. Reach out to us.
            </p>
            
            <div className="contact-item">
              <div className="contact-icon"><Mail size={24} /></div>
              <div className="contact-text">
                <h5 className="brand-font">Email Us</h5>
                <p>dashrudratechorg@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><Phone size={24} /></div>
              <div className="contact-text">
                <h5 className="brand-font">Call Us Directly</h5>
                <p>+91 89397 22569</p>
                <p style={{ marginTop: '0.25rem' }}>+91 74488 81750</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><MapPin size={24} /></div>
              <div className="contact-text">
                <h5 className="brand-font">Our Base</h5>
                <p>SRM Madurai College for Engineering & Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
