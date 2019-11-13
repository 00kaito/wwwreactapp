import React, { Component } from 'react';
import '../styles/Header.css';


const Header = () => {
    return (
        <div class="header">
            <div class="scanlines"></div>
            <div id="overlayer"></div>
            <div id="slogan" class="text">
                <h2 class="slog1">Software</h2>
                <h2 class="slog2 glitch" data-text="Java">Java</h2>
                <h2 class="slog3">Engineer</h2>
            </div>
        </div>
    );
}

export default Header;