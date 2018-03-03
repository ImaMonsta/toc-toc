import React, { Component } from 'react';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            careerObjective: props  && props.profile && props.profile.resume && props.profile.resume.careerObjective,
            specialQualifications: props  && props.profile && props.profile.resume && props.profile.resume.specialQualifications,
            hoobies: props  && props.profile && props.profile.resume && props.profile.resume.hoobies,
            fullName: props  && props.profile && props.profile.resume && props.profile.resume.fullName,
            nacionality: props  && props.profile && props.profile.resume && props.profile.resume.nacionality,
            sex: props  && props.profile && props.profile.resume && props.profile.resume.sex,
            address: props  && props.profile && props.profile.resume && props.profile.resume.address,
            birthDate: props  && props.profile && props.profile.resume && props.profile.resume.birthDate,
            birthPlace: props  && props.profile && props.profile.resume && props.profile.resume.birthPlace,
            workHistory: (props  && props.profile && props.profile.resume && props.profile.resume.workHistory && [...props.profile.resume.workHistory]) || [],
            background: (props  && props.profile && props.profile.resume && props.profile.resume.background && [...props.profile.resume.background]) || []
        };
    }
    
    render() {
        return (
            <div role="tabpanel" className="tab-pane section active in" id="resume">
                <ul className="tr-list resume-info">
                    <li className="career-objective">
                        <div className="icon">
                            <i className="fa fa-black-tie" aria-hidden="true"></i>
                        </div>
                        <div className="media-body">
                            <span className="tr-title">Career Objective</span>
                            <span>{this.state.careerObjective}</span>
                        </div>
                    </li>{/*<!-- /.career-objective -->*/}
                    <li className="work-history">
                        <div className="icon">
                            <i className="fa fa-briefcase" aria-hidden="true"></i>
                        </div>
                        <div className="media-body">
                            <span className="tr-title">Work History</span>
                            <ul className="tr-list">
                                {
                                    this.state.workHistory.map((work,i) => 
                                        <React.Fragment key={i}>
                                            <li>
                                                <span>{work.jobTitle}</span>
                                                <span>{work.company}</span>
                                                <span className="present">{`${work.from} - ${work.to}`}</span>
                                                <p>{work.detail}</p>
                                            </li>
                                        </React.Fragment>
                                    )
                                }
                            </ul>
                        </div>
                    </li>{/*<!-- /.work-history -->*/}
                    <li className="education-background">
                        <div className="icon">
                            <i className="fa fa-briefcase" aria-hidden="true"></i>
                        </div>
                        <div className="media-body">
                            <span className="tr-title">Education Background</span>
                            <ul className="tr-list">
                                {
                                    this.state.background.map((education,i) => 
                                        <React.Fragment key={i}>
                                        <li>
                                            <span>{education.degree}</span>
                                            <ul className="tr-list">
                                                <li>{`Year: ${education.from} - ${education.to}`}</li>
                                                <li>{education.institute}</li>
                                            </ul>
                                            <p>{education.detail}</p>
                                        </li>
                                        </React.Fragment>
                                    )
                                }
                            </ul>
                        </div>
                    </li>{/*<!-- /.education-background -->*/}
                    <li className="qualification">
                        <div className="icon">
                            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        </div>
                        <div className="media-body">
                            <span className="tr-title">Special Qualification:</span>
                            <span>{this.state.specialQualifications}</span>
                        </div>
                    </li>{/*<!-- /.qualification -->*/}
                    <li className="language-proficiency">
                        <div className="icon">
                            <i className="fa fa-language" aria-hidden="true"></i>
                        </div>
                        <div className="media-body">
                            <span className="tr-title">Language Proficiency:</span>
                            <ul className="tr-list">
                                <li>
                                    <span>English</span>
                                    <ul className="tr-list rating">
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                                    </ul>
                                </li>
                                <li>
                                    <span>German</span>
                                    <ul className="tr-list rating">
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Spanish</span>
                                    <ul className="tr-list rating">
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Latin</span>
                                    <ul className="tr-list rating">
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>{/*<!-- /.language-proficiency -->*/}
                    <li className="personal-deatils">
                        <div className="icon">
                            <i className="fa fa-user-secret" aria-hidden="true"></i>
                        </div>
                        <div className="media-body">
                            <span className="tr-title">Personal Deatils</span>
                            <ul className="tr-list">
                                <li><span className="left">Full Name</span><span className="middle">:</span> <span className="right">{this.state.fullName}</span></li>
                                <li><span className="left">Date of Birth</span><span className="middle">:</span> <span className="right">{this.state.birthDate}</span></li>
                                <li><span className="left">Birth Place</span><span className="middle">:</span> <span className="right">{this.state.birthPlace}</span></li>
                                <li><span className="left">Nationality</span><span className="middle">:</span> <span className="right">{this.state.nacionality}</span></li>
                                <li><span className="left">Sex</span><span className="middle">:</span> <span className="right">{this.state.sex}</span> </li>
                                <li><span className="left">Address</span><span className="middle">:</span> <span className="right">{this.state.address}</span></li>
                            </ul>
                        </div>
                    </li>{/*<!-- /.personal-deatils -->*/}
                    <li className="personal-deatils">
                        <div className="icon">
                            <i className="fa fa-hand-peace-o" aria-hidden="true"></i>
                        </div>
                        <div className="media-body">
                            <span className="tr-title">Hoobies</span>
                            <span>{this.state.hoobies}</span>
                        </div>
                    </li>{/*<!-- /.personal-deatils -->*/}
                </ul>
            </div>
        );
    }
}

export default Resume;