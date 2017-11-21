import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner'
import BannerJobsCategories from './components/BannerJobsCategories'
import BannerJobsPosted from './components/BannerJobsPosted'
import BannerPostResume from './components/BannerPostResume'
import BannerSteps from './components/BannerSteps'
import BannerFunFacts from './components/BannerFunFact'

class App extends Component {
  render() {
    return ([
      <Header/>,
      <Banner/>,
      <BannerJobsCategories/>,
      <BannerPostResume/>,
      <BannerJobsPosted/>,
      <BannerSteps/>,
      <BannerFunFacts/>,
      <Footer/>
    ]);
  }
}

export default App;
