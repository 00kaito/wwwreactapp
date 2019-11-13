import React, { Component } from 'react';
import '../styles/Skills.css';
import SkillsComponent from '../components/SkillsComponent'

class SkillsTemplate extends Component {

    render() {
        return (
            <>
                <h2 class="h2">Some of skills and projects</h2>
                <section class="cv-builder">
                    <SkillsComponent />
                </section>
            </>
        );
    }
}


export default SkillsTemplate;