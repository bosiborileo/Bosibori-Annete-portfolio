import aboutProfile from "/src/assets/img/about.jpg";
import randomLines from "/src/assets/img/random-lines.svg";

function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <h2 className="section__title-1">
          <span>About Me</span>
        </h2>

        <div className="about__profile">
          <div className="about__image">
            <img src={aboutProfile} alt="image" className="about__img" />
            <div className="about__shadow"></div>
            <div className="geometric-box"></div>
            <img src={randomLines} alt="" className="about__line" />
            <div className="about__box"></div>
          </div>
        </div>

        <div className="about__info">
          <p className="about__description">
            Hello there! I'm <b>Annete Bosibori</b>, a passionate{" "}
            <b>Data Analyst</b>with a strong Analytical background. 
            Proficient in creating impactful data visualizations with Power BI, 
            conducting predictive modeling, and performing quantitative analysis.
            
          </p>
          <ul className="about__list">
            <li className="about__item">
              <b>My Skills Are:</b> Statistical Analysis, Data Analysis, Regression, Data cleaning, Data visualization, Graphic Design, Git, Deep Learning, Database Design, Natural Language Processing, Machine Learning
              .
            </li>
          </ul>

          <div className="about__buttons">
            <a href="#contact" className="button">
              <i className="ri-send-plane-line"></i>
              Contact Me
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/yousufrashwan"
              className="button__ghost"
            >
              <i className="ri-linkedin-box-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
