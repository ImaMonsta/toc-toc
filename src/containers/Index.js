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
            <Banner key="Banner" title="¡Abriendo las puertas del mundo laboral!" detail="We offer 12000 jobs vacation right now" search={true} />,
            // <BannerJobsCategories key="BannerJobsCategories" />,
            <BannerPostResume key="HeadBannerPostResumeer" />,
            <BannerSteps key="BannerSteps" />,
            <BannerJobsPosted key="BannerJobsPosted" />,
            // <BannerFunFacts key="BannerFunFacts" />,
        ]);
    }
}

export default Index;