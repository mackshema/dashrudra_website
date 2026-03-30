import { ArrowRight, ChevronRight, MonitorPlay } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      
      <div className="container">
        <div className="hero-content animate-fade-in">
          <div className="hero-subtitle text-gold brand-font">
            Digital Solutions for Schools & Colleges
          </div>
          
          <h1 className="hero-title gradient-text">
            Digitizing Institutions.<br />Simplifying Management.
          </h1>
          
          <p className="hero-tagline">
            "Smart, simple, and reliable digital systems custom-built for your institution's needs."
          </p>
          
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <MonitorPlay size={20} />
              Request Live Demo
            </a>
            <a href="#about" className="btn btn-outline">
              Learn More
              <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
