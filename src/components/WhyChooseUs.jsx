const WhyChooseUs = () => {
  const reasons = [
    {
      num: "01",
      title: "Real Implementation",
      desc: "Our solutions are born from solving real institutional challenges."
    },
    {
      num: "02",
      title: "Simple & Reliable",
      desc: "No steep learning curves; robust architectures with 99% uptime."
    },
    {
      num: "03",
      title: "Cost-Effective",
      desc: "High-end institutional-grade software at accessible prices."
    },
    {
      num: "04",
      title: "Direct Support",
      desc: "Get immediate help straight from the developers who wrote the code."
    }
  ];

  return (
    <section id="why-us" className="why-choose-us section-padding">
      <div className="container">
        <h2 className="section-title">Why Institutions Trust Us</h2>
        
        <div className="why-grid">
          {reasons.map((reason, index) => (
            <div className="why-item" key={index}>
              <div className="why-number">{reason.num}</div>
              <h4 className="why-title brand-font">{reason.title}</h4>
              <p className="why-desc">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
