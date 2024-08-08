// src/components/WorkSection/WorkSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './WorkSection.css';
import projects from '../../data/projects.json';

const WorkSection = () => {
    const categories = ['Web Design', 'UX/UI', 'Graphic Design', 'Photography'];

    const getProjectCount = (category) => {
        return projects.projects.filter(project => project.category === category).length;
    };

    return (
        <div className="work-section">
            <div className="work-section-header">
                <div className="section-header-title">
                    <h1 className="section-title">Work</h1>
                </div>
                <div className="work-nav-list">
                    <div className="section-header-copy">
                        <p>2018-2024</p>
                        <p>
                            <Link to="/work" id="a-underline">
                                View All
                            </Link>
                        </p>
                        <p>({projects.projects.length})</p>
                    </div>

                    <div className="projects-nav">
                        <div className="projects-nav-container">
                            {categories.map((category, index) => (
                                <div className="project-item" key={index}>
                                    <Link to={`/work/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                                        <div className="project-link">
                                            <div className="project-l">
                                                <div className="project-link-img">
                                                    <img src={projects.projects.find(project => project.category === category)?.img} alt="" />
                                                </div>
                                                <div className="project-name">
                                                    <h4>{category}</h4>
                                                </div>
                                            </div>
                                            <div className="project-date">
                                                <p>/{getProjectCount(category)}</p>
                                            </div>
                                            <div className="project-dir">
                                                <p>&#8599;</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WorkSection;