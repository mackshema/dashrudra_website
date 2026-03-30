import { Clock, AlertTriangle, ListX, Workflow } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: <Clock size={32} />,
      title: "Time-Consuming",
      desc: "Creating exam arrangements and managing student records takes hours of repetitive work."
    },
    {
      icon: <AlertTriangle size={32} />,
      title: "Error-Prone",
      desc: "Manual entry increases the likelihood of human error, leading to conflicts during execution."
    },
    {
      icon: <ListX size={32} />,
      title: "Difficult to Manage",
      desc: "Relying on physical paper-based systems or scattered spreadsheets makes administration a nightmare."
    },
    {
      icon: <Workflow size={32} />,
      title: "Inefficient Workflows",
      desc: "Lack of integration slows down institutional processes from attendance to grading."
    }
  ];

  return (
    <section id="problem" className="problem section-padding">
      <div className="container">
        <h2 className="section-title">The Problem We Solve</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Many institutions still depend on manual processes for exams, records, and administration.
        </p>
        
        <div className="problem-grid">
          {problems.map((prob, index) => (
            <div className="problem-card glass-card" key={index}>
              <div className="problem-icon">
                {prob.icon}
              </div>
              <h3 className="problem-title">{prob.title}</h3>
              <p className="problem-desc">{prob.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
