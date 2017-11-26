import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import BannerJobsCategories from '../components/BannerJobsCategories'
import BannerJobsPosted from '../components/BannerJobsPosted'
import BannerPostResume from '../components/BannerPostResume'
import BannerSteps from '../components/BannerSteps'
import BannerFunFacts from '../components/BannerFunFact'

class Index extends Component {
    render() {
        return ([
            <Header key="Header"/>,
            <Banner key="Banner"/>,
            <BannerJobsCategories key="BannerJobsCategories"/>,
            <BannerPostResume key="HeadBannerPostResumeer"/>,
            <BannerJobsPosted key="BannerJobsPosted"/>,
            <BannerSteps key="BannerSteps"/>,
            <BannerFunFacts key="BannerFunFacts"/>,
            <Footer key="Footer"/>
          ]);
    }
}

export default Index;