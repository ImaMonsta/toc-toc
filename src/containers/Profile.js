import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect, isLoaded } from 'react-redux-firebase'

import  PersonalInfo  from '../components/profile/PersonalInfo'
import Resume from '../components/profile/Resume'
import EditResume from '../components/profile/EditResume'
import Questionary from '../components/Questionary'

class Profile extends Component {
    render() {
        const { profile: response } = this.props;
        const { match, appcontrol, toogleCandidate, setProfileInfo, optionMenuEditCandidate, pushProfileImage } = this.props.props;
        const profile = isLoaded(response) && response[`-${match.params.uid}`] ?  response[`-${match.params.uid}`] : {};
        const detail = isLoaded(response) && profile ? profile.profile : {}

        return (
            <div>
                <div className="tr-breadcrumb bg-image section-before">
                    <div className="container">
                        <div className="breadcrumb-info text-center">
                            <div className="user-image">
                                <img src={ profile.image || 'https://www.unicoos.com/img/profiles/default.png'} alt="author" className="img-responsive" />
                            </div>
                            <div className="user-title">
                                <h1>{profile.fullName}</h1>
                            </div>
                            <ul className="job-meta tr-list list-inline">
                                { profile.address && <li><i className="fa fa-map-marker" aria-hidden="true"></i>{ profile.address }</li> }
                                { detail && detail.phone && <li><i className="fa fa-phone" aria-hidden="true"></i>{ detail.phone }</li>}
                                <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="">{ profile.email }</a></li>
                                { detail &&  detail.title && <li><i className="fa fa-briefcase" aria-hidden="true"></i>{ detail.title }</li> }
                            </ul>
                            <ul className="breadcrumb-social social-icon-bg  tr-list">
                                { detail &&  detail.fb && <li><a target="_blank" href={ detail.fb }><i className="fa fa-facebook"></i><span>Facebook</span> </a></li> }
                                { detail &&  detail.tw && <li><a target="_blank" href={ detail.tw }><i className="fa fa-twitter"></i> <span>Twitter</span> </a></li> }
                                { detail &&  detail.g && <li><a target="_blank" href={ detail.g }><i className="fa fa-google-plus"></i> <span>Google Plus</span> </a></li> }
                                { detail &&  detail.lin && <li><a target="_blank" href={ detail.lin }><i className="fa fa-linkedin"></i><span>Linkedin</span> </a></li> }
                            </ul>
                        </div>
                    </div>{/*<!-- /.container -->*/}
                </div>{/*<!-- /.tr-breadcrumb -->*/}

                <div className="tr-profile section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 col-md-3">
                                <div className="tr-sidebar">
                                    <ul className="nav nav-tabs profile-tabs section" role="tablist">
                                        <li role="presentation" className={ appcontrol.optionMenuCandidate === 1 ? 'active' : ''}><a onClick={e => optionMenuEditCandidate(1)} aria-controls="account-info" role="tab" data-toggle="tab"><i className="fa fa-life-ring" aria-hidden="true" ></i> Account Info</a></li>
                                        <li role="presentation" className={ appcontrol.optionMenuCandidate === 2 ? 'active' : ''}><a onClick={e => optionMenuEditCandidate(2)} aria-controls="resume" role="tab" data-toggle="tab"><span><i className="fa fa-user-o" aria-hidden="true"></i></span> My Resume</a></li>
                                        <li role="presentation" className={ appcontrol.optionMenuCandidate === 3 ? 'active' : ''}><a onClick={e => optionMenuEditCandidate(3)} aria-controls="edit-resume" role="tab" data-toggle="tab"><span><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span> Edit Resume</a></li>
                                        <li role="presentation" className={ appcontrol.optionMenuCandidate === 4 ? 'active' : ''}><a onClick={e => optionMenuEditCandidate(4)} aria-controls="questionary" role="tab" data-toggle="tab"><span><i className="fa fa-question-circle" aria-hidden="true"></i></span> Questionary <span className="badge">1</span></a></li>
                                        {/* <li role="presentation"><a href="#bookmark" aria-controls="bookmark" role="tab" data-toggle="tab"><span><i className="fa fa-bookmark-o" aria-hidden="true"></i></span> Bookmark</a></li>
                                        <li role="presentation"><a href="#archived" aria-controls="archived" role="tab" data-toggle="tab"><span><i className="fa fa-clone" aria-hidden="true"></i></span> Archived Apply Job</a></li>
                                        <li role="presentation"><a href="#close-account" aria-controls="close-account" role="tab" data-toggle="tab"><span><i className="fa fa-scissors" aria-hidden="true"></i></span> Close Account</a></li>
                                    */}
                                    </ul> 
                                </div>
                            </div>
                            <div className="col-sm-8 col-md-9">
                                <div className="tab-content">
       
        { isLoaded(response) && {
            '1': <PersonalInfo candidate={ match.params.uid } profile={profile} appcontrol={appcontrol} toogleCandidate={toogleCandidate} setProfileInfo={setProfileInfo} detail={detail} pushProfileImage={pushProfileImage} />,
            '2': <Resume />,
            '3': <EditResume />,
            '4': <Questionary />,
        }[`${appcontrol.optionMenuCandidate }`]}

                                    <div role="tabpanel" className="tab-pane bookmark" id="bookmark">
                                        <div className="row">
                                            <div className="col-md-4 remove-item">
                                                <div className="job-item">
                                                    <span className="remove-icon"><i className="fa fa-times" aria-hidden="true"></i></span>
                                                    <div className="item-overlay">
                                                        <div className="job-info">
                                                            <a href="" className="btn btn-primary">Full Time</a>
                                                            <span className="tr-title">
                                                                <a href="job-details.html">Project Manager</a>
                                                                <span><a href="">Dig File</a></span>
                                                            </span>
                                                            <ul className="tr-list job-meta">
                                                                <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                                <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                                <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                            </ul>
                                                            <ul className="job-social tr-list">
                                                                <li><a href=""><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
                                                                <li><a href=""><i className="fa fa-expand" aria-hidden="true"></i> </a></li>
                                                                <li><a href=""><i className="fa fa-bookmark-o" aria-hidden="true"></i> </a></li>
                                                                <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> </a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="job-info">
                                                        <div className="company-logo">
                                                            <img src="/images/job/1.png" alt="images" className="img-responsive" />
                                                        </div>
                                                        <span className="tr-title">
                                                            <a href="">Project Manager</a>
                                                            <span><a href="">Dig File</a></span>
                                                        </span>
                                                        <ul className="tr-list job-meta">
                                                            <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                            <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                            <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                        </ul>
                                                        <div className="time">
                                                            <a href=""><span>Full Time</span> </a>
                                                            <span className="pull-right">Posted 23 hours ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 remove-item">
                                                <div className="job-item">
                                                    <span className="remove-icon"><i className="fa fa-times" aria-hidden="true"></i></span>
                                                    <div className="item-overlay">
                                                        <div className="job-info">
                                                            <a href="job-details.html" className="btn btn-primary">Part Time</a>
                                                            <span className="tr-title">
                                                                <a href="job-details.html">Design Associate</a>
                                                                <span><a href="">Loop</a></span>
                                                            </span>
                                                            <ul className="tr-list job-meta">
                                                                <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                                <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                                <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                            </ul>
                                                            <ul className="job-social tr-list">
                                                                <li><a href=""><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
                                                                <li><a href=""><i className="fa fa-expand" aria-hidden="true"></i> </a></li>
                                                                <li><a href=""><i className="fa fa-bookmark-o" aria-hidden="true"></i> </a></li>
                                                                <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> </a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="job-info">
                                                        <div className="company-logo">
                                                            <img src="/images/job/2.png" alt="images" className="img-responsive" />
                                                        </div>
                                                        <span className="tr-title">
                                                            <a href="">Design Associate</a>
                                                            <span><a href="">Loop</a></span>
                                                        </span>
                                                        <ul className="tr-list job-meta">
                                                            <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                            <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                            <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                        </ul>
                                                        <div className="time">
                                                            <a href=""><span className="part-time">Part Time</span> </a>
                                                            <span className="pull-right">Posted 1 day ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 remove-item">
                                                <div className="job-item">
                                                    <span className="remove-icon"><i className="fa fa-times" aria-hidden="true"></i></span>
                                                    <div className="item-overlay">
                                                        <div className="job-info">
                                                            <a href="" className="btn btn-primary">Freelance</a>
                                                            <span className="tr-title">
                                                                <a href="job-details.html">Graphic Designer</a>
                                                                <span><a href="">Humanity Creative</a></span>
                                                            </span>
                                                            <ul className="tr-list job-meta">
                                                                <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                                <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                                <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                            </ul>
                                                            <ul className="job-social tr-list">
                                                                <li><a href=""><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
                                                                <li><a href=""><i className="fa fa-expand" aria-hidden="true"></i> </a></li>
                                                                <li><a href=""><i className="fa fa-bookmark-o" aria-hidden="true"></i> </a></li>
                                                                <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> </a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="job-info">
                                                        <div className="company-logo">
                                                            <img src="/images/job/3.png" alt="images" className="img-responsive" />
                                                        </div>
                                                        <span className="tr-title">
                                                            <a href="">Graphic Designer</a>
                                                            <span><a href="">Humanity Creative</a></span>
                                                        </span>
                                                        <ul className="tr-list job-meta">
                                                            <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                            <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                            <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                        </ul>
                                                        <div className="time">
                                                            <a href=""><span className="freelance">Freelance</span> </a>
                                                            <span className="pull-right">Posted 10 day ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 remove-item">
                                                <div className="job-item">
                                                    <span className="remove-icon"><i className="fa fa-times" aria-hidden="true"></i></span>
                                                    <div className="item-overlay">
                                                        <div className="job-info">
                                                            <a href="" className="btn btn-primary">Full Time</a>
                                                            <span className="tr-title">
                                                                <a href="job-details.html">Design Consultant</a>
                                                                <span><a href="">Families</a></span>
                                                            </span>
                                                            <ul className="tr-list job-meta">
                                                                <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                                <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                                <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                            </ul>
                                                            <ul className="job-social tr-list">
                                                                <li><a href=""><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
                                                                <li><a href=""><i className="fa fa-expand" aria-hidden="true"></i> </a></li>
                                                                <li><a href=""><i className="fa fa-bookmark-o" aria-hidden="true"></i> </a></li>
                                                                <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> </a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="job-info">
                                                        <div className="company-logo">
                                                            <img src="/images/job/4.png" alt="images" className="img-responsive" />
                                                        </div>
                                                        <span className="tr-title">
                                                            <a href="">Design Consultant</a>
                                                            <span><a href="">Families</a></span>
                                                        </span>
                                                        <ul className="tr-list job-meta">
                                                            <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                            <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                            <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                        </ul>
                                                        <div className="time">
                                                            <a href=""><span>Full Time</span> </a>
                                                            <span className="pull-right">Posted Oct 09, 2017</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 remove-item">
                                                <div className="job-item">
                                                    <span className="remove-icon"><i className="fa fa-times" aria-hidden="true"></i></span>
                                                    <div className="item-overlay">
                                                        <div className="job-info">
                                                            <a href="" className="btn btn-primary">Part Time</a>
                                                            <span className="tr-title">
                                                                <a href="job-details.html">Project Manager</a>
                                                                <span><a href="">Sky Creative</a></span>
                                                            </span>
                                                            <ul className="tr-list job-meta">
                                                                <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                                <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                                <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                            </ul>
                                                            <ul className="job-social tr-list">
                                                                <li><a href=""><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
                                                                <li><a href=""><i className="fa fa-expand" aria-hidden="true"></i> </a></li>
                                                                <li><a href=""><i className="fa fa-bookmark-o" aria-hidden="true"></i> </a></li>
                                                                <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> </a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="job-info">
                                                        <div className="company-logo">
                                                            <img src="/images/job/5.png" alt="images" className="img-responsive" />
                                                        </div>
                                                        <span className="tr-title">
                                                            <a href="">Project Manager</a>
                                                            <span><a href="">Sky Creative</a></span>
                                                        </span>
                                                        <ul className="tr-list job-meta">
                                                            <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                            <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                            <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                        </ul>
                                                        <div className="time">
                                                            <a href=""><span className="part-time">Part Time</span> </a>
                                                            <span className="pull-right">Posted 1 day ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 remove-item">
                                                <div className="job-item">
                                                    <span className="remove-icon"><i className="fa fa-times" aria-hidden="true"></i></span>
                                                    <div className="item-overlay">
                                                        <div className="job-info">
                                                            <a href="" className="btn btn-primary">Freelance</a>
                                                            <span className="tr-title">
                                                                <a href="job-details.html">Design Associate</a>
                                                                <span><a href="">Pencil</a></span>
                                                            </span>
                                                            <ul className="tr-list job-meta">
                                                                <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                                <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                                <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                            </ul>
                                                            <ul className="job-social tr-list">
                                                                <li><a href=""><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
                                                                <li><a href=""><i className="fa fa-expand" aria-hidden="true"></i> </a></li>
                                                                <li><a href=""><i className="fa fa-bookmark-o" aria-hidden="true"></i> </a></li>
                                                                <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> </a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="job-info">
                                                        <div className="company-logo">
                                                            <img src="/images/job/6.png" alt="images" className="img-responsive" />
                                                        </div>
                                                        <span className="tr-title">
                                                            <a href="">Design Associate</a>
                                                            <span><a href="">Pencil</a></span>
                                                        </span>
                                                        <ul className="tr-list job-meta">
                                                            <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                            <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                            <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                        </ul>
                                                        <div className="time">
                                                            <a href=""><span className="freelance">Freelance</span> </a>
                                                            <span className="pull-right">Posted 23 hours ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 remove-item">
                                                <div className="job-item">
                                                    <span className="remove-icon"><i className="fa fa-times" aria-hidden="true"></i></span>
                                                    <div className="item-overlay">
                                                        <div className="job-info">
                                                            <a href="" className="btn btn-primary">Full Time</a>
                                                            <span className="tr-title">
                                                                <a href="job-details.html">Graphic Designer</a>
                                                                <span><a href="">Fox</a></span>
                                                            </span>
                                                            <ul className="tr-list job-meta">
                                                                <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                                <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                                <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                            </ul>
                                                            <ul className="job-social tr-list">
                                                                <li><a href=""><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
                                                                <li><a href=""><i className="fa fa-expand" aria-hidden="true"></i> </a></li>
                                                                <li><a href=""><i className="fa fa-bookmark-o" aria-hidden="true"></i> </a></li>
                                                                <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> </a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="job-info">
                                                        <div className="company-logo">
                                                            <img src="/images/job/7.png" alt="images" className="img-responsive" />
                                                        </div>
                                                        <span className="tr-title">
                                                            <a href="">Graphic Designer</a>
                                                            <span><a href="">Fox</a></span>
                                                        </span>
                                                        <ul className="tr-list job-meta">
                                                            <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                            <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                            <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                        </ul>
                                                        <div className="time">
                                                            <a href=""><span>Full Time</span> </a>
                                                            <span className="pull-right">Posted Oct 09, 2017</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 remove-item">
                                                <div className="job-item">
                                                    <span className="remove-icon"><i className="fa fa-times" aria-hidden="true"></i></span>
                                                    <div className="item-overlay">
                                                        <div className="job-info">
                                                            <a href=""><span className="btn btn-primary">Part Time</span> </a>
                                                            <span className="tr-title">
                                                                <a href="job-details.html">Design Consultant</a>
                                                                <span><a href="">Owl</a></span>
                                                            </span>
                                                            <ul className="tr-list job-meta">
                                                                <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                                <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                                <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                            </ul>
                                                            <ul className="job-social tr-list">
                                                                <li><a href=""><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
                                                                <li><a href=""><i className="fa fa-expand" aria-hidden="true"></i> </a></li>
                                                                <li><a href=""><i className="fa fa-bookmark-o" aria-hidden="true"></i> </a></li>
                                                                <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> </a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="job-info">
                                                        <div className="company-logo">
                                                            <img src="/images/job/8.png" alt="images" className="img-responsive" />
                                                        </div>
                                                        <span className="tr-title">
                                                            <a href="">Design Consultant</a>
                                                            <span><a href="">Owl</a></span>
                                                        </span>
                                                        <ul className="tr-list job-meta">
                                                            <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                            <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                            <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                        </ul>
                                                        <div className="time">
                                                            <a href=""><span className="part-time">Part Time</span> </a>
                                                            <span className="pull-right">Posted 10 day ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/*<!-- /.row -->*/}
                                    </div>{/*<!-- /.tab-pane -->*/}

                                    <div role="tabpanel" className="tab-pane apply-job" id="archived">
                                        <div className="job-item">
                                            <div className="job-info">
                                                <div className="left-content">
                                                    <div className="clearfix">
                                                        <div className="company-logo">
                                                            <img src="/images/job/1.png" alt="images" className="img-responsive" />
                                                        </div>
                                                        <span className="tr-title">
                                                            <a href="job-details.html">Design Associate</a><span><a href="">Loop</a></span>
                                                        </span>
                                                        <span><a href="" className="btn btn-primary">Part Time</a></span>
                                                    </div>
                                                    <ul className="tr-list job-meta">
                                                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                    </ul>
                                                </div>
                                                <div className="right-content">
                                                    <a href="" className="btn button-cancle">Delete application</a>
                                                    <span className="applied">Applied: 3 weeks ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="job-item remove-item">
                                            <div className="job-info">
                                                <div className="left-content">
                                                    <div className="clearfix">
                                                        <div className="company-logo">
                                                            <img src="/images/job/2.png" alt="images" className="img-responsive" />
                                                        </div>
                                                        <span className="tr-title">
                                                            <a href="job-details.html">Design Associate</a><span><a href="">Loop</a></span>
                                                        </span>
                                                        <span><a href="" className="btn btn-primary">Part Time</a></span>
                                                    </div>
                                                    <ul className="tr-list job-meta">
                                                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                    </ul>
                                                </div>
                                                <div className="right-content">
                                                    <a href="" className="btn button-cancle">Delete application</a>
                                                    <span className="applied">Applied: 3 weeks ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="job-item remove-item">
                                            <div className="job-info">
                                                <div className="left-content">
                                                    <div className="clearfix">
                                                        <div className="company-logo">
                                                            <img src="/images/job/3.png" alt="images" className="img-responsive" />
                                                        </div>
                                                        <span className="tr-title">
                                                            <a href="job-details.html">Design Associate</a><span><a href="">Loop</a></span>
                                                        </span>
                                                        <span><a href="" className="btn btn-primary">Part Time</a></span>
                                                    </div>
                                                    <ul className="tr-list job-meta">
                                                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                    </ul>
                                                </div>
                                                <div className="right-content">
                                                    <a href="" className="btn button-cancle">Delete application</a>
                                                    <span className="applied">Applied: 3 weeks ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="job-item remove-item">
                                            <div className="job-info">
                                                <div className="left-content">
                                                    <div className="clearfix">
                                                        <div className="company-logo">
                                                            <img src="/images/job/4.png" alt="images" className="img-responsive" />
                                                        </div>
                                                        <span className="tr-title">
                                                            <a href="job-details.html">Design Associate</a><span><a href="">Loop</a></span>
                                                        </span>
                                                        <span><a href="" className="btn btn-primary">Part Time</a></span>
                                                    </div>
                                                    <ul className="tr-list job-meta">
                                                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                    </ul>
                                                </div>
                                                <div className="right-content">
                                                    <a href="" className="btn button-cancle">Delete application</a>
                                                    <span className="applied">Applied: 3 weeks ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="job-item remove-item">
                                            <div className="job-info">
                                                <div className="left-content">
                                                    <div className="clearfix">
                                                        <div className="company-logo">
                                                            <img src="/images/job/5.png" alt="images" className="img-responsive" />
                                                        </div>
                                                        <span className="tr-title">
                                                            <a href="job-details.html">Design Associate</a><span><a href="">Loop</a></span>
                                                        </span>
                                                        <span><a href="" className="btn btn-primary">Part Time</a></span>
                                                    </div>
                                                    <ul className="tr-list job-meta">
                                                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                    </ul>
                                                </div>
                                                <div className="right-content">
                                                    <a href="" className="btn button-cancle">Delete application</a>
                                                    <span className="applied">Applied: 3 weeks ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="job-item remove-item">
                                            <div className="job-info">
                                                <div className="left-content">
                                                    <div className="clearfix">
                                                        <div className="company-logo">
                                                            <img src="/images/job/6.png" alt="images" className="img-responsive" />
                                                        </div>
                                                        <span className="tr-title">
                                                            <a href="job-details.html">Design Associate</a><span><a href="">Loop</a></span>
                                                        </span>
                                                        <span><a href="" className="btn btn-primary">Part Time</a></span>
                                                    </div>
                                                    <ul className="tr-list job-meta">
                                                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                    </ul>
                                                </div>
                                                <div className="right-content">
                                                    <a href="" className="btn button-cancle">Delete application</a>
                                                    <span className="applied">Applied: 3 weeks ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="job-item remove-item">
                                            <div className="job-info">
                                                <div className="left-content">
                                                    <div className="clearfix">
                                                        <div className="company-logo">
                                                            <img src="/images/job/7.png" alt="images" className="img-responsive" />
                                                        </div>
                                                        <span className="tr-title">
                                                            <a href="job-details.html">Design Associate</a><span><a href="">Loop</a></span>
                                                        </span>
                                                        <span><a href="" className="btn btn-primary">Part Time</a></span>
                                                    </div>
                                                    <ul className="tr-list job-meta">
                                                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                    </ul>
                                                </div>
                                                <div className="right-content">
                                                    <a href="" className="btn button-cancle">Delete application</a>
                                                    <span className="applied">Applied: 3 weeks ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/*<!-- /.tab-pane -->*/}

                                    <div role="tabpanel" className="tab-pane section close-account" id="close-account">
                                        <h1>Delete Your Account</h1>
                                        <span>Are you sure, you want to delete your account?</span>
                                        <div className="buttons">
                                            <a href="" className="btn btn-primary">Delete Account</a>
                                            <a href="" className="btn button-cancle">Cancle</a>
                                        </div>
                                    </div>{/*<!-- /.tab-pane -->*/}
                                </div>
                            </div>
                        </div>{/*<!-- /.row -->*/}
                    </div>{/*<!-- /.container -->*/}
                </div>
            </div>
        );
    }
}

export default compose(
    firebaseConnect((props) => [
        `users/-${props.props.match.params.uid}` // { path: '/todos' } // object notation
    ]),
    connect(
        (state) => ({
            profile: state.firebase.data.users,
            // profile: state.firebase.profile // load profile
        })
    )
)(Profile)