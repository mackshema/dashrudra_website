import { CheckCircle2, Zap, Settings, ShieldCheck } from 'lucide-react';

const Solution = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "Automatically Generates Seating Plans",
      desc: "Instant generation of optimized hall plans with zero overlaps.",
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: "Reduces Manual Workload",
      desc: "Takes seconds to complete what usually takes hours for the staff.",
    },
    {
      icon: <Settings size={24} />,
      title: "Follows Institutional Methods",
      desc: "Customizable parameters match your existing university guidelines.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Works efficiently in real scenarios",
      desc: "Field-tested under stress during real institution exams.",
    }
  ];

  return (
    <section id="solution" className="solution section-padding">
      <div className="container">
        <h2 className="section-title">Our Solution <span className="text-gold">(Live in Action)</span></h2>
        
        <div className="solution-container">
          <div className="solution-features">
            <h3 className="brand-font" style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-light)' }}>
              Hall Arrangement System
            </h3>
            
            {features.map((feature, i) => (
              <div className="feature-item animate-fade-in" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <div className="feature-text">
                  <h4 className="brand-font">{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
            
            <div style={{ marginTop: '2rem' }}>
              <a href="#contact" className="btn btn-primary">
                Preview Our System
              </a>
            </div>
          </div>
          
          <div className="mockup-container animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="mockup-header">
              <div className="mockup-dot dot-red"></div>
              <div className="mockup-dot dot-yellow"></div>
              <div className="mockup-dot dot-green"></div>
              <span style={{ fontSize: '0.75rem', color: '#94A3B8', marginLeft: '10px' }}>
                dashrudhra.tech / dashboard / hall-plan
              </span>
            </div>
            <div className="mockup-body">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <div style={{ width: '150px', height: '24px', background: '#cbd5e1', borderRadius: '4px' }}></div>
                <div style={{ width: '80px', height: '24px', background: 'var(--primary-gold)', borderRadius: '4px' }}></div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '20px' }}>
                <div style={{ height: '60px', background: '#e2e8f0', borderRadius: '6px' }}></div>
                <div style={{ height: '60px', background: '#e2e8f0', borderRadius: '6px' }}></div>
                <div style={{ height: '60px', background: '#e2e8f0', borderRadius: '6px' }}></div>
              </div>
              
              <table className="mock-table">
                <thead>
                  <tr>
                    <th>Room</th>
                    <th>Invigilator</th>
                    <th>Capacity</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>301</td><td>Prof. Smith</td><td>30/30</td><td style={{ color: 'green' }}>Ready</td></tr>
                  <tr><td>302</td><td>Prof. Davis</td><td>28/30</td><td style={{ color: 'green' }}>Ready</td></tr>
                  <tr><td>303</td><td>Dr. Wilson</td><td>30/30</td><td style={{ color: 'green' }}>Ready</td></tr>
                  <tr><td>304</td><td>Dr. Ali</td><td>15/30</td><td style={{ color: 'orange' }}>Partial</td></tr>
                </tbody>
              </table>
              
              <div style={{ position: 'absolute', bottom: '15px', right: '15px', padding: '5px 10px', background: 'rgba(212, 175, 55, 0.2)', color: '#b48608', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                Tested & Implemented Successfully
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
