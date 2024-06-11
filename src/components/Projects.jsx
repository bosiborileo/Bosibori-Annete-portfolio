import projects1 from "/src/assets/img/project-1.jpg";
import projects2 from "/src/assets/img/project-2.jpg";
import projects3 from "/src/assets/img/project-3.jpg";

function Projects() {
  const projects = [
    {
      subtitle: "Machine learning",
      title: "Flower Image Classifier",
      description:
        "This project explores the application of deep learning for flower image classification. A convolutional neural network is trained on a dataset of flower images, enabling the model to learn features and patterns that distinguish different flower species",
      demo: "",
      sourceCode: "https://github.com/bosiborileo/udacity_image_classifier",
      design: "https://www.behance.net",
      projectImg: projects1,
    },
    {
      subtitle: "Customer Churn Prediction",
      title: "Predicting Customer Retention",
      description:
        "Predicted customer churn for a business, employing advanced data cleaning, visualization, and machine learning techniques..",
      demo: "",
      sourceCode: "https://github.com/bosiborileo/Petroleum-Company-Customer-Churn",
      design: "https://www.behance.net",
      projectImg: projects2,
    },
    {
      subtitle: "Database Design",
      title: "Bank Database Design",
      description:
        "Designed and implemented a robust database system tailored for a banking institution,demonstrating expertise in database architecture, normalization, and data integrity.",
      demo: "",
      sourceCode: "https://github.com/bosiborileo/Designing-a-bank-Database-Using-Python-and-Mysql",
      design: "https://www.behance.net",
      projectImg: projects3,
    },
    {
      subtitle: "Linear Regression",
      title: "House Price Prediction!",
      description:
        "This project delves into the world of real estate market analysis by developing a house price prediction model. By leveraging machine learning techniques and historical data, the model aims to forecast the selling price of houses with a significant degree of accuracy",
      demo: "",
      sourceCode: "https://github.com/bosiborileo/Predicting-House-Price-with-Linear-Regression",
      design: "https://www.behance.net",
      projectImg: projects1,
    },
  ];

  const projectElems = projects.map((project) => (
    <article className="projects__card" key={project.demo}>
      <div className="projects__image">
        <img src={project.projectImg} alt="image" className="projects__img" />
        <a
          // href={project.demo}
          // target="_blank"
          className="projects__button button"
        >
          <i className="ri-arrow-right-up-line"></i>
        </a>
      </div>

      <div className="projects__content">
        <h3 className="projects__subtitle">{project.subtitle}</h3>
        <h2 className="projects__title">{project.title}</h2>
        <p className="projects__description">{project.description}</p>
      </div>

      <div className="projects__buttons">
        <a href={project.sourceCode} target="_blank" className="projects__link">
          <i className="ri-github-line"></i> View
        </a>
        <a href={project.design} target="_blank" className="projects__link">
          <i class="ri-behance-line"></i> View
        </a>
      </div>
    </article>
  ));

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title-1">
        <span>Projects.</span>
      </h2>
      <div className="projects__container container grid">{projectElems}</div>
    </section>
  );
}

export default Projects;
