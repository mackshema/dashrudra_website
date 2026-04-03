import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    institution: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Connects directly to your own custom logic Express Backend!
      const response = await fetch("https://dashrudra-website.onrender.com/api/send-email", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', mobile: '', institution: '', message: '' });
      } else {
        // Attempt to parse the error message from the backend, if it provided one
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error || "The backend server rejected the request. Please check your credentials.";
        alert(`Backend Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Backend Error:", error);
      alert("Failed to connect to backend server. Make sure it is running on PORT 5000!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section-padding" style={{ background: 'var(--bg-gradient)' }}>
      <div className="container">
        <h2 className="section-title">Book a Demo</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3 className="brand-font text-gold" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              Ready to Upgrade?
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
              Whether you need to automate your exams or digitize your entire institution, 
              DashRudhra's suite of digital solutions is here to help. Reach out to see a live demo.
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
          
          {success ? (
            <div className="contact-form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <CheckCircle2 size={64} className="text-gold" style={{ marginBottom: '1.5rem' }} />
              <h4 className="brand-font" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Request Sent Successfully!</h4>
              <p style={{ color: 'var(--text-muted)' }}>
                We have smoothly received your request. An authentic confirmation email has been dispatched directly from the DashRudhra team to the client.
              </p>
              <button onClick={() => setSuccess(false)} className="btn btn-outline" style={{ marginTop: '2rem' }}>Send Another Request</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h4 className="brand-font" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
                Request a Consultation
              </h4>
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="Prof. John Doe" required />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email ID (We will send confirmation here)</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="johndoe@university.edu" required />
              </div>

              <div className="form-group">
                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                <input type="tel" name="mobile" id="mobile" value={formData.mobile} onChange={handleChange} className="form-control" placeholder="+91 98765 43210" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="institution" className="form-label">Institution Name</label>
                <input type="text" name="institution" id="institution" value={formData.institution} onChange={handleChange} className="form-control" placeholder="University of Digital Sciences" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">How can we help?</label>
                <textarea name="message" id="message" value={formData.message} onChange={handleChange} className="form-control" placeholder="I am interested in learning more about the Hall Arrangement System..." required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending via Backend...' : 'Book a Demo'}
                {!isSubmitting && <Send size={18} />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
