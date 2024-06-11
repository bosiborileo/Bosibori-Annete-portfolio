function Services() {
  const services = [
    {
      title: "Data Analysis",
      description:
      "I analyze data to extract meaningful insights, identify trends, and help in decision-making processes.",  
      icon: "ri-layout-4-line",
    },
    {
      title: "Data Visualization",
      description:
        "I create visually appealing and interactive charts, graphs, and dashboards to represent data in an understandable format.",
      icon: "ri-code-box-line",
    },
    {
      title: "Data Transformation and Data Modelling",
      description:
       "I transform raw data into structured formats and build data models to optimize data processing and analysis.",
      icon: "ri-speed-up-line",
    },
];

  const serviceElems = services.map((service) => (
    <article key={service.title} className="services__card">l
      <div className="services__border"></div>
      <div className="services__content">
        <div className="services__icon">
          <div className="services__box"></div>
          <i className={service.icon}></i>
        </div>
        <h2 className="services__title">{service.title}</h2>
        <p className="services__description">{service.description}</p>
      </div>
    </article>
  ));

  return (
    <section className="services section">
      <h2 className="section__title-2">
        <span>Services.</span>
      </h2>
      <div className="services__container container grid">{serviceElems}</div>
    </section>
  );
}
export default Services;
