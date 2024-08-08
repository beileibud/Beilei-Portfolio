import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import transition from "../../transition";
import FoldedHero from "../../components/Folded/FoldedHero";
import HeroImage from "../../assets/project-images/beilei.png";
import WorkSection from "../../components/WorkSection/WorkSection";
import Project from "../../components/Project/Project";
import FeedItem from "../../components/FeedItem/FeedItem";
//content
import projects from "../../data/projects.json";
import feeds from "../../data/feeds.json";

// helper functions
const renderProjects = (start, end) => {
  return projects.projects
    .slice(start, end)
    .map((project, index) => (
      <Project
        key={index}
        projectImg={project.img}
        projectTitle={project.title}
        projectCategory={project.category}
      />
    ));
};

const renderFeeds = (start, end) => {
  return feeds.feeds
    .slice(start, end)
    .map((feed, index) => (
      <FeedItem
        key={index}
        feedImg={feed.img}
        feedDate={feed.date}
        feedName={feed.name}
        feedCopy={feed.copy}
      />
    ));
};

const Home = () => {
  return (
    <div className="home">
      {/* hero section */}
      <FoldedHero>
        <div className="container">
          {/* <div className="hero-img">
            <img src={HeroImage} alt="" />
          </div> */}
          <div className="hero-copy">
            <h1>
              <span>Beilei Zhu</span>
              <br />
              A UX/UI and Front-End Developer skilled in Graphic Design
              and Photography with a flair for integrating functional
              solutions with aesthetic appeal. My approach is rooted in
              understanding user needs and translating them into intuitive,
              visually appealing digital experiences. &nbsp;{" "}
              <Link to="/studio"> More about me</Link>
            </h1>
          </div>
        </div>
      </FoldedHero>
      <div className="divider"></div>

      {/* work section */}
      <div className="container">
        <div className="work-section">
          <WorkSection />
          <div className="work-section-header">
          </div>

          {/* work - projects */}
          <div className="projects">
            <div className="row">
              <div className="col sm">{renderProjects(0, 2)}</div>
              {renderProjects(2, 3)}
            </div>
            <div className="row">
              <div className="col">{renderProjects(3, 4)}</div>
              {renderProjects(4, 5)}
            </div>

            <div className="row">
              {renderProjects(5, 6)}
              <div className="col sm">{renderProjects(6, 8)}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>

      {/* feeds */}
      <div className="container">
        <div className="feed-section">
          <div className="work-section-header">
            <div className="section-header-title">
              <h1 className="section-title">Feed</h1>
            </div>
            <div className="section-header-copy">
              <p>
                <Link to="/feed" id="a-underline">
                  View All
                </Link>
              </p>
              <p>({feeds.feeds.length})</p>
            </div>
          </div>

          <div className="feeds">
            <div className="row">{renderFeeds(0, 2)}</div>
            <div className="row">{renderFeeds(2, 4)}</div>
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <Footer />
    </div>
  );
};

export default transition(Home);
