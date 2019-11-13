import React from 'react';
import '../styles/App.css';

import Header from '../layouts/HeaderTemplate';
import Skills from '../layouts/SkillsTemplate';
import Footer from '../layouts/FooterTemplate';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper" >
        <Header />
        <Skills />
        <Footer />
      </div>
    );
  }

}

export default App;
