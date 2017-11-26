import React, { Component } from 'react';

class BannerSteps extends Component {
    render() {
        return (
            <div className="tr-steps bg-image section-padding section-before">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="step">
                                <div className="step-image">
                                    <img src="images/icons/step1.png" alt="images" className="img-responsive" />
                                </div>
                                <h1>01 Steps</h1>
                                <h2>Register an account</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>{/*<!-- step -->*/}
                        </div>
                        <div className="col-sm-4">
                            <div className="step">
                                <div className="step-image">
                                    <img src="images/icons/step2.png" alt="images" className="img-responsive" />
                                </div>
                                <h1>02 Steps</h1>
                                <h2>search your desired job</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>{/*<!-- /.step -->*/}
                        </div>
                        <div className="col-sm-4">
                            <div className="step">
                                <div className="step-image">
                                    <img src="images/icons/step3.png" alt="images" className="img-responsive" />
                                </div>
                                <h1>03 Steps</h1>
                                <h2>Send your resume to employers</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>{/*<!-- /.step -->*/}
                        </div>
                    </div>{/*<!-- /.row -->*/}
                </div>{/*<!-- /.container -->*/}
            </div>
        );
    }
}

export default BannerSteps;