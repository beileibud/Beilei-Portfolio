import React from "react";
import "./SampleProject.css";
import { Link } from "react-router-dom";
import transition from "../../transition";

import Masonry from "react-masonry-css";
import Footer from "../../components/Footer/Footer";

// images
import ProjectImageMain from "/project-images/img2.jpg";
import ProjectImage1 from "/project-images/img2.jpg";
import ProjectImage2 from "/project-images/img3.jpg";
import ProjectImage3 from "/project-images/img4.jpg";
import ProjectImage4 from "/project-images/img5.jpg";
import ProjectImage5 from "/project-images/img6.jpg";
import ProjectImage6 from "/project-images/img7.jpg";
import ProjectImage7 from "/project-images/img8.jpg";
import ProjectImage8 from "/project-images/img9.jpg";
import ProjectImage9 from "/project-images/img10.jpg";
import ProjectImage10 from "/project-images/img11.jpg";
import ProjectImage11 from "/project-images/img1.jpg";
import ProjectImage12 from "/project-images/img2.jpg";

import Project from "../../components/Project/Project";

// content
import projects from "../../data/projects.json";

// masonary grid breakpoints
const SampleProject = () => {
  const myBreakpointsAndCols = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  var items = [
    { id: 1, image: ProjectImage1 },
    { id: 2, image: ProjectImage2 },
    { id: 3, image: ProjectImage3 },
    { id: 4, image: ProjectImage4 },
    { id: 5, image: ProjectImage5 },
    { id: 5, image: ProjectImage6 },
    { id: 5, image: ProjectImage7 },
    { id: 5, image: ProjectImage8 },
    { id: 5, image: ProjectImage9 },
    { id: 5, image: ProjectImage10 },
    { id: 5, image: ProjectImage11 },
    { id: 5, image: ProjectImage12 },
  ];

  items = items.map(function (item) {
    return (
      <div key={item.id}>
        <img src={item.image} alt="" />
      </div>
    );
  });

  return (
    <div className="sample-project">
      <div className="divider"></div>
      <div className="container">
        <div className="project-head">
          <div className="project-head-col">
            <h1 className="section-title">FOTOfinder</h1>
          </div>
          <div className="project-head-col">
            <p>Project</p>
            <p className="project-copy-sec">Client: FOTOfinder</p>
            <p className="project-copy-sec">Project: Web design/development</p>
            <p className="project-copy-sec">Year: 2023</p>
            <br />
            <br />
            <p className="project-copy-sec">Dynamic React App</p>
            <p className="project-copy-sec">UX/UI Design</p>
            <p className="project-copy-sec">Firebase API</p>
            <p className="project-copy-sec">Modern Platform</p>
          </div>
        </div>

        <div className="project-sub-head">
          <div className="back-link">
            <Link to="/work" id="a-underline">
              Back to work
            </Link>
          </div>
          {/* <div className="project-credits">
            <p>Credits</p>
            <p className="project-copy-sec">Google NOSP</p>
          </div> */}
        </div>

        <div className="project-image">
          <img src={ProjectImageMain} alt="" />
        </div>
      </div>
      <div className="divider"></div>
      <div className="container">
        <section className="contact-info project-dummy">
          <div className="contact-info-col">
            <h2 className="section-h2">
              FOTOfinder<sup>&copy;</sup> is a local Photographer platform that seamlessly match users with local photographers. FOTOFinder caters to personal aesthetic tastes and scheduling needs, offering an intuitive interface for a hassle-free photographer discovery and booking experience.
            </h2>
          </div>
          <div className="contact-info-col">
            <div className="contact-info-sub-col">
              <p>
                FOTOfinder© is the result of meticulous design and user-centric development, born from a vision to streamline the process of connecting clients with local photographers. Our app stands as a testament to modern UI/UX principles, offering an intuitive and seamless experience from search to booking.
              </p>
              <br />
              <p>
                Intuitive Interface: We've crafted a clean, minimalist design that allows users to navigate effortlessly through our platform. The uncluttered layout ensures that the focus remains on the photographers' work.
              </p>

              <br />
              <p>
                Smart Matching Algorithm: At the heart of FOTOfinder© lies a sophisticated algorithm that analyzes user preferences and photographer styles, ensuring optimal matches that go beyond mere logistics.
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <div className="contact-info-sub-col">
              <p>
              Streamlined Booking Process: We've simplified the journey from discovery to confirmation. With just a few taps, users can schedule sessions directly through the app, eliminating the need for back-and-forth communications.
              </p>

              <br />
              <p>
              Personalized Experience: The app learns from user interactions, continually refining recommendations to align with individual aesthetic preferences.
              </p>

              <br />
              <p>
              Responsive Design: Whether on mobile or desktop, FOTOfinder© adapts seamlessly, providing a consistent and optimized experience across all devices.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="divider"></div>
      <div className="container">
        <div className="project-grid">
          <Masonry
            breakpointCols={myBreakpointsAndCols}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {items}
          </Masonry>
        </div>
      </div>
      <div className="divider"></div>
      <div className="container">
        <div className="work-section-header">
          <div className="section-header-title">
            <h1 className="section-title">Work</h1>
          </div>
          <div className="section-header-copy">
            <p>2016-2023</p>
            <p>
              <Link to="/work" id="a-underline">
                View All
              </Link>
            </p>
            <p>({projects.projects.length})</p>
          </div>
        </div>

        <div className="projects">
          <div className="row">
            <div className="col sm">
              {projects.projects.slice(4, 6).map((project, index) => (
                <Project
                  key={index}
                  projectImg={project.img}
                  projectTitle={project.title}
                  projectCategory={project.category}
                />
              ))}
            </div>
            {projects.projects.slice(6, 7).map((project, index) => (
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

export default transition(SampleProject);
