import { Info } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="about-content animate-fade-in">
          <p className="about-text">
            We are third-year engineering students from <strong className="text-gold">SRM Madurai College for Engineering and Technology</strong>, specializing in <strong className="text-gold">Cyber Security</strong>. 
          </p>
          <p className="about-text">
            We develop practical digital solutions that solve real institutional challenges. Driven by our experience, we have built and implemented a Hall Arrangement System based on actual college workflows.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
