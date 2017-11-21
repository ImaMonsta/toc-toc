import React, { Component } from 'react';

class BannerFunFact extends Component {
    render() {
        return (
            <div className="tr-fun-fact section-padding">
                <div className="container">
                    <div className="fun-fact-content">
                        <div className="row text-center">
                            <div className="col-sm-4">
                                <div className="fun-fact">
                                    <img src="images/icons/fun-fact1.png" alt="images" className="img-responsive"/>
                                    <h1 className="counter">3,412</h1>
                                    <span>Live Jobs</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="fun-fact">
                                    <img src="images/icons/fun-fact2.png" alt="images" className="img-responsive"/>
                                    <h1 className="counter">12,043</h1>
                                    <span>Total Company</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="fun-fact">
                                    <img src="images/icons/fun-fact3.png" alt="images" className="img-responsive"/>
                                    <h1 className="counter">5,798,298</h1>
                                    <span>Total Candidate</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                </div>
                            </div>
                        </div>{/*<!-- /.row -->*/}				
                    </div>{/*<!-- /.fun-fact-content -->*/}
                </div>{/*<!-- /.container -->*/}
            </div>
        );
    }
}

export default BannerFunFact;