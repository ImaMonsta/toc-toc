import React, { Component } from 'react';
import Banner from '../components/banner/Banner';
// import BannerJobsCategories from '../components/banner/BannerJobsCategories';
import BannerJobsPosted from '../components/banner/BannerJobsPosted';
import BannerPostResume from '../components/banner/BannerPostResume';
import BannerSteps from '../components/banner/BannerSteps';
// import BannerFunFacts from '../components/banner/BannerFunFact';

class Index extends Component {
    render() {
        return ([
            <Banner key="Banner" title="The Easiest Way to Get Your New Job" detail="We offer 12000 jobs vacation right now" search={true} />,
            // <BannerJobsCategories key="BannerJobsCategories" />,
            <BannerPostResume key="HeadBannerPostResumeer" />,
            <BannerJobsPosted key="BannerJobsPosted" />,
            <BannerSteps key="BannerSteps" />,
            // <BannerFunFacts key="BannerFunFacts" />,
        ]);
    }
}

export default Index;