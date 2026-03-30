import { 
  Building2, 
  Users, 
  CalendarCheck, 
  Cpu, 
  Globe, 
  DatabaseBackup 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building2 size={40} />,
      title: "Exam & Hall Management",
      desc: "Smart seating and invigilation systems tailored to institutional workflows."
    },
    {
      icon: <Users size={40} />,
      title: "Student Record Management",
      desc: "Centralized, secure digital vaults to handle academic, personal, and fee records."
    },
    {
      icon: <CalendarCheck size={40} />,
      title: "Attendance Tracking",
      desc: "Automated logging modules connecting effortlessly with administrative portals."
    },
    {
      icon: <Cpu size={40} />,
      title: "Administrative Automation",
      desc: "Cut routine paperwork down to zero with smart scripts and custom software."
    },
    {
      icon: <Globe size={40} />,
      title: "Institutional Websites & Portals",
      desc: "Modern and interactive platforms for student and faculty collaboration."
    },
    {
      icon: <DatabaseBackup size={40} />,
      title: "Secure Digital Records",
      desc: "Enterprise-grade robust security protocols ensuring safe data migrations and backups."
    }
  ];

  return (
    <section id="services" className="services section-padding" style={{ backgroundColor: '#0B1F3A' }}>
      <div className="container">
        <h2 className="section-title">What We Offer</h2>
        
        <div className="services-grid">
          {services.map((svc, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {svc.icon}
              </div>
              <h3 className="service-title brand-font">{svc.title}</h3>
              <p className="service-desc">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
