import React, { Component } from 'react';
import { link } from 'fs';
import Progress from './Progress';

class Skills extends Component {
    render() {
        const skills = this.props.items;

        const skillsList = skills
            .map(skill => <li name={skill.name}
                key={skill.name} className={skill.active ? 'active' : ''}
                onMouseOver={this.props.handleHover}>{skill.name}</li>);
        const currentSkill = this.props.currentSkill;
        const widthStyle = currentSkill != undefined && { width: currentSkill.progressValue + "%" };

        return (
            <>
                <div class="skills">
                    <ul>
                        {skillsList}
                    </ul>
                    {currentSkill !== undefined && currentSkill.name !== undefined && (
                        <div className='progressbar'>
                            <div><h3>{currentSkill.name} skill level</h3></div>
                            <Progress progressValue={currentSkill.progressValue} />
                        </div>)}
                </div>
            </>
        );
    }
}

export default Skills;