import React, { Component } from 'react';
import '../styles/Skills.css';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import SkillsTemplate from '../layouts/SkillsTemplate';

class SkillsComponent extends Component {

    skills = [
        { 'active': true, 'progressValue': 80, 'name': 'Java' },
        { 'active': false, 'progressValue': 60, 'name': 'Spring' },
        { 'active': false, 'progressValue': 40, 'name': 'SQL' },
        { 'active': false, 'progressValue': 50, 'name': 'JavaScript' },
        { 'active': false, 'progressValue': 80, 'name': 'HTML' },
        { 'active': false, 'progressValue': 80, 'name': 'CSS3' },
        { 'active': false, 'progressValue': 70, 'name': 'React' },
        { 'active': false, 'progressValue': 60, 'name': 'Linux' },
    ];

    projects = [
        { 'name': 'Library', 'technologies': ['Java', 'SpringBoot', 'Thymeleaf', 'Bootstrap', 'CSS3', 'SQL'], 'url': 'https://github.com/00kaito/Library' },
        { 'name': 'Async React example', 'technologies': ['React', 'JavaScript'], 'url': 'https://bitbucket.org/go-js/async-proj1/src' },
        { 'name': 'React Website', 'technologies': ['React', 'HTML', 'CSS3', 'JavaScript'], 'url': '#' },
        { 'name': 'Udemy Downloader', 'technologies': ['Java', 'Spring', 'Bootstrap', 'HTML', 'CSS3', 'Thymeleaf'], 'url': '#' },
        { 'name': 'Just another to do app', 'technologies': ['React', 'HTML', 'JavaScript', 'ReactRouter', 'CSS3'], 'url': 'https://bitbucket.org/go-js/todoapp/src/master/' },
    ];
    state = {
        skills: this.skills,
        projects: this.projects,
        activeObject: {}
    }

    handleHover = (e) => {
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

            if (projects.length < 1) {
                projects = this.projects;
            } else {
                return skills;
            }
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
                <Skills items={this.state.skills} handleHover={this.handleHover} currentSkill={this.state.currentObject} />
                <Projects items={this.state.projects} currentSkill={this.state.currentObject} />
            </>
        );
    }
}


export default SkillsComponent;