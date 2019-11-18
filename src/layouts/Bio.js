import React, { Component } from 'react';
import '../styles/Bio.css';
import resume from '../images/resume.png';


const Header = () => {
    return (
        <div className='bio-wrapper'>
            <h2 className='h2white'>About</h2>
            <div class="bio">
                <div className='bio-image'>
                    <p><i class="fas fa-file-download"></i>Get my resume</p>
                    <img src={resume} alt='avatar' />
                </div>
                <div className='bio-desc'>
                    <p>
                        Hi, my name is Przemek. I am full stack developer, my favorite tech stack is Java / Kotlin + Spring + React.<br />
                        I will do my best to make your product even better</p>

                    <ul>
                        <li><i class="fas fa-at"></i>bednarz[@]programmer.net</li>
                        <li><i class="fas fa-phone-alt"></i>+48 727 977 722</li>
                        <li><i class="fab fa-linkedin"></i><a href='https://www.linkedin.com/in/full-stack-engineer/' target='_blank'>linkedin.com/in/full-stack-engineer</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;