import React, { Component } from 'react';

class BannerSteps extends Component {
    render() {
        return (
            <div className="tr-steps bg-image section-padding section-before">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="step">
                                <div className="step-image">
                                    <img src="images/icons/step1.png" alt="images" className="img-responsive" />
                                </div>
                                <h1>01 Steps</h1>
                                <h2>Register an account <span role="img" aria-label="Happy">🎟</span></h2>
                                <p>Go to the signup page and register a new account.</p>
                            </div>{/*<!-- step -->*/}
                        </div>
                        <div className="col-sm-3">
                            <div className="step">
                                <div className="step-image">
                                    <img src="images/icons/fun-fact5.png" alt="images" className="img-responsive" />
                                </div>
                                <h1>02 Steps</h1>
                                <h2>Answer a simple questionary <span role="img" aria-label="Happy">📋</span></h2>
                                <p>We will send an email with the questionary attach.</p>
                            </div>{/*<!-- /.step -->*/}
                        </div>
                        <div className="col-sm-3">
                            <div className="step">
                                <div className="step-image">
                                    <img src="images/icons/step2.png" alt="images" className="img-responsive" />
                                </div>
                                <h1>03 Steps</h1>
                                <h2>Get help from our success coach <span role="img" aria-label="Happy">🏆</span></h2>
                                <p>One of our success coach will get in touch.</p>
                            </div>{/*<!-- /.step -->*/}
                        </div>
                        <div className="col-sm-3">
                            <div className="step">
                                <div className="step-image">
                                    <img src="images/icons/step3.png" alt="images" className="img-responsive" />
                                </div>
                                <h1>04 Steps</h1>
                                <h2>Start to work <span role="img" aria-label="Happy">😄</span></h2>
                                <p>Ejoy.</p>
                            </div>{/*<!-- /.step -->*/}
                        </div>
                    </div>{/*<!-- /.row -->*/}
                </div>{/*<!-- /.container -->*/}
            </div>
        );
    }
}

export default BannerSteps;