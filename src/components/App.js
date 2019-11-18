import React from 'react';
import '../styles/App.css';

import Header from '../layouts/HeaderTemplate';
import Skills from '../layouts/SkillsTemplate';
import Footer from '../layouts/FooterTemplate';
import Bio from '../layouts/Bio';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper" >
        <Header />
        <Skills />
        <Bio />
        <Footer />
      </div>
    );
  }

}

export default App;
