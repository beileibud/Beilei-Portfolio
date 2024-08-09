import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import transition from "../../transition";

import TeamImg1 from "/project-images/beilei.png";
import TeamImg2 from "../../assets/team/team2.jpg";

import Project from "../../components/Project/Project";

//content
import projects from "../../data/projects.json";

const Contact = () => {
  return (
    <div className="contact">
      <div className="divider"></div>

      <div className="container">
        <h1 className="section-title">Contact</h1>
        <div className="whitespace-300"></div>
        <p>Odense & Viborg</p>
      </div>

      <div className="divider"></div>

      <div className="container">
        <section className="contact-info">
          <div className="contact-info-col">
            <h2 className="section-h2">
              From audacious conceptual
              journeys to meticulous execution of thoughtful design, let's explore possibilities or delve deeper on crafting fundamentals.
            </h2>
          </div>
          <div className="contact-info-col">
            <div className="contact-info-sub-col">
              <p>Beilei Zhu</p>
              <p>Nashville, TN</p>
              <p></p>
              <p></p>

              <br />

              <p>+1 404 935 3665</p>
              <p>beileibud@gmail.com</p>

              <br />
              <br />
              <br />

              <br />
              <br />
              <br />
              <p>37135</p>
            </div>
            <div className="contact-info-sub-col">
              <a href="#">Instagram</a> <br />
              <a href="#">LinkedIn</a> <br />
              <a href="#">Github</a>
            </div>
          </div>
        </section>
      </div>
      <div className="divider"></div>

      <div className="container">
        <section className="contact-info">
          <div className="contact-info-col">
            <h1 className="section-title">All </h1>
          </div>
          <div className="contact-info-col">
            <div className="contact-info-sub-col">
              <p>Web Developer</p>
              <p className="sec-contact">
               Frontend, React, JavaScript, HTML, CSS, SQL, GIT
              </p>

              <br />
              <p>UX/UI</p>
              <p className="sec-contact">
                Reaserch,Concept, Communication, Design, Interface, Mockup, Figma
              </p>

              <br />
              <p>Design</p>
              <p className="sec-contact">
                Graphic Design, Digital Design.
              </p>

              <br />
              <br />
              <br />

              <br />
              <br />
              <br />
            </div>
            <div className="contact-info-sub-col"></div>
          </div>
        </section>
      </div>
      {/* <div className="divider"></div> */}
      <div className="container">
        <section className="contact-info">
          <div className="contact-info-col">
            {/* <h1 className="section-title">Founding Partners</h1> */}
          </div>
          <div className="contact-info-col">
            <div className="contact-info-sub-col">
              {/* <p>
                Neoteric® is established and directed by Danish designers Morten
                Skov Hansen and Emil Rasmussen, with branches in Copenhagen and
                Viborg.
              </p> */}
              <br />
              {/* <p>
                From audacious conceptual journeys to meticulous execution of
                thoughtful design, we invite you to connect to explore
                possibilities or delve deeper into our studio's philosophy on
                crafting fundamentals.
              </p> */}
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </section>
      </div>
      <div className="divider"></div>
      <div className="container">
        <div className="team">
          <div className="team-col"></div>
          <div className="team-col">
            <div className="dev">
              <div className="dev-img">
                <img src={TeamImg1} alt="" />
              </div>
              <div className="dev-name">
                <p>Beilei Zhu</p>
              </div>
              <div className="dev-pos">
                <p>Developer & Designer</p>
                <p>beileibud@gmail.com</p>
              </div>
              <div className="dev-contact">
                <p>LinkedIn</p>
              </div>
            </div>
            {/* <div className="dev">
              <div className="dev-img">
                <img src={TeamImg2} alt="" />
              </div>
              <div className="dev-name">
                <p>Sorten Skov Hansen</p>
              </div>
              <div className="dev-pos">
                <p>Founder & Creative Lead</p>
                <p>sorten@neoteric.com</p>
              </div>
              <div className="dev-contact">
                <p>+23 9843 7834</p>
                <p>LinkedIn</p>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="container">
        <div className="work-section-header">
          <div className="section-header-title">
            <h1 className="section-title">Work</h1>
          </div>
          <div className="section-header-copy">
            <p>2018-2024</p>
            <p>
              <Link to="/" id="a-underline">
                View All
              </Link>
            </p>
            <p>({projects.projects.length})</p>
          </div>
        </div>

        <div className="projects">
          <div className="row">
            <div className="col sm">
              {projects.projects.slice(0, 2).map((project, index) => (
                <Project
                  key={index}
                  projectImg={project.img}
                  projectTitle={project.title}
                  projectCategory={project.category}
                />
              ))}
            </div>
            {projects.projects.slice(2, 3).map((project, index) => (
              <Project
                key={index}
                projectImg={project.img}
                projectTitle={project.title}
                projectCategory={project.category}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <Footer />
    </div>
  );
};

export default transition(Contact);
