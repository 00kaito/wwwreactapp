import React, { Component } from 'react';
import '../styles/Skills.css';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

class SkillsComponent extends Component {

    skills = [
        { 'active': false, 'progressValue': 80, 'name': 'Java' },
        { 'active': false, 'progressValue': 60, 'name': 'Spring' },
        { 'active': false, 'progressValue': 40, 'name': 'SQL' },
        { 'active': false, 'progressValue': 50, 'name': 'JavaScript' },
        { 'active': false, 'progressValue': 80, 'name': 'HTML' },
        { 'active': false, 'progressValue': 80, 'name': 'CSS3' },
        { 'active': false, 'progressValue': 70, 'name': 'React' },
        { 'active': false, 'progressValue': 60, 'name': 'Linux' },
    ];

    projects = [
        { 'name': 'Library', 'technologies': ['Java', 'SpringBoot', 'Thymeleaf', 'Bootstrap', 'CSS3', 'SQL'] },
        { 'name': 'Async React', 'technologies': ['React', 'JavaScript'] },
        { 'name': 'React Website', 'technologies': ['React', 'HTML', 'CSS3', 'JavaScript'] },
        { 'name': 'Udemy Downloader', 'technologies': ['Java', 'Spring', 'Bootstrap', 'HTML', 'CSS3', 'Thymeleaf'] },
        { 'name': 'Temporary Email', 'technologies': ['React', 'Java', 'Spring', 'Hibernate', 'HTML', 'SQL', 'JavaScript', 'ReactRouter', 'Redux', 'CSS3'] },
    ];
    state = {
        skills: this.skills,
        projects: this.projects,
        activeObject: {}
    }


    handleClick = (e) => {
        const skills = [...this.skills];
        let projects = [...this.projects];
        let currentObject = {};
        skills.map(skill => {
            if (skill.name === e.target.getAttribute('name') && skill.active === false) {
                skill.active = true;
                currentObject = skill;
                projects = projects.filter(project => project.technologies.includes(skill.name));
            } else {
                skill.active = false;
            }
            return skills;
        })
        this.setState({
            skills,
            projects,
            currentObject
        })
    }

    render() {
        return (
            <>
                <Skills items={this.state.skills} handleClick={this.handleClick} currentSkill={this.state.currentObject} />
                <Projects items={this.state.projects} currentSkill={this.state.currentObject} />
            </>
        );
    }
}


export default SkillsComponent;