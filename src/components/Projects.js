import React, { Component } from 'react';
import '../styles/Projects.css';

const Projects = (props) => {
    const projects = props.items
        .map(item => {
            return (
                <li key={item.name}>
                    <div className='project_desc'>
                        <h4>{item.name}</h4>
                        <em>{item.technologies.toString()}</em>
                    </div>
                    <div className='project_icons'>
                        <a href="#" target="_blank"><i class="fab fa-git-square"></i></a>
                        <a href="#" target="_blank"><i class="fas fa-plus"></i></a>
                        <a href="#" target="_blank"><i class="fas fa-search"></i></a>
                    </div>
                </li >
            )
        })
    return (
        <div class="projects">
            <ul>
                {projects}
            </ul>
        </div>
    );
}

export default Projects;