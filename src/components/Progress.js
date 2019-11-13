import React, { Component } from 'react';
import '../styles/Progress.css';

const Progress = (props) => {
    const widthStyle = { width: props.progressValue + "%" };
    return (
        <div className='wrapper'>
            <em>{props.progressValue + '%'}</em>
            <div className='progress' style={widthStyle}></div>
        </div>
    );
}

export default Progress;