import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect, isLoaded } from 'react-redux-firebase'

import PersonalInfo from '../components/profile/PersonalInfo'

class Profile extends Component {
    render() {
        const { profile } = this.props;
        const { match, appcontrol, toogleCandidate, setProfileInfo, optionMenuEditCandidate } = this.props.props;
        const { fullName, email, lastUpdate, profile: detail } = isLoaded(profile) ? profile[`-${match.params.uid}`] : {}
        const { phone, address, title, fb, tw, g, lin } = detail ? detail : {};

        return (
            <div>
                <div className="tr-breadcrumb bg-image section-before">
                    <div className="container">
                        <div className="breadcrumb-info text-center">
                            <div className="user-image">
                                <img src="https://firebasestorage.googleapis.com/v0/b/toc-toc-network.appspot.com/o/AS_Ghost1.jpg?alt=media&token=8861b2d5-f0bf-4264-99ee-8d3b76035028" alt="author" className="img-responsive" />
                            </div>
                            <div className="user-title">
                                <h1>{fullName}</h1>
                            </div>
                            <ul className="job-meta tr-list list-inline">
                                { address && <li><i className="fa fa-map-marker" aria-hidden="true"></i>{ address }</li> }
                                { phone && <li><i className="fa fa-phone" aria-hidden="true"></i>{ phone }</li>}
                                <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="">{ email }</a></li>
                                { title && <li><i className="fa fa-briefcase" aria-hidden="true"></i>{ title }</li> }
                            </ul>
                            <ul className="breadcrumb-social social-icon-bg  tr-list">
                                { fb && <li><a target="_blank" href={fb}><i className="fa fa-facebook"></i><span>Facebook</span> </a></li> }
                                { tw && <li><a target="_blank" href={tw}><i className="fa fa-twitter"></i> <span>Twitter</span> </a></li> }
                                { g && <li><a target="_blank" href={g}><i className="fa fa-google-plus"></i> <span>Google Plus</span> </a></li> }
                                { lin && <li><a target="_blank" href={lin}><i className="fa fa-linkedin"></i><span>Linkedin</span> </a></li> }
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
                                        <li role="presentation" className={appcontrol.optionMenuCandidate === 1 ? 'active' : ''}><a onClick={e => optionMenuEditCandidate(1)} aria-controls="account-info" role="tab" data-toggle="tab"><i className="fa fa-life-ring" aria-hidden="true" ></i> Account Info</a></li>
                                        <li role="presentation" className={appcontrol.optionMenuCandidate === 2 ? 'active' : ''}><a onClick={e => optionMenuEditCandidate(2)} aria-controls="resume" role="tab" data-toggle="tab"><span><i className="fa fa-user-o" aria-hidden="true"></i></span> My Resume</a></li>
                                        <li role="presentation"><a href="#edit-resume" aria-controls="edit-resume" role="tab" data-toggle="tab"><span><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span> Edit Resume</a></li>
                                        <li role="presentation"><a href="#bookmark" aria-controls="bookmark" role="tab" data-toggle="tab"><span><i className="fa fa-bookmark-o" aria-hidden="true"></i></span> Bookmark</a></li>
                                        <li role="presentation"><a href="#archived" aria-controls="archived" role="tab" data-toggle="tab"><span><i className="fa fa-clone" aria-hidden="true"></i></span> Archived Apply Job</a></li>
                                        <li role="presentation"><a href="#close-account" aria-controls="close-account" role="tab" data-toggle="tab"><span><i className="fa fa-scissors" aria-hidden="true"></i></span> Close Account</a></li>
                                    </ul>
                                    <a href="" className="btn btn-primary"><i className="fa fa-cloud-download" aria-hidden="true"></i> <span>Download Resume as doc</span> </a>
                                </div>{/*<!-- /.tr-sidebar -->*/}
                            </div>
                            <div className="col-sm-8 col-md-9">
                                <div className="tab-content">

        { appcontrol.optionMenuCandidate === 1 && <PersonalInfo candidate={match.params.uid} fullName={fullName} email={email} lastUpdate={lastUpdate} appcontrol={appcontrol} toogleCandidate={toogleCandidate} setProfileInfo={setProfileInfo} detail={detail} /> }

                                    <div role="tabpanel" className="tab-pane section" id="resume">
                                        <ul className="tr-list resume-info">
                                            <li className="career-objective">
                                                <div className="icon">
                                                    <i className="fa fa-black-tie" aria-hidden="true"></i>
                                                </div>
                                                <div className="media-body">
                                                    <span className="tr-title">Career Objective</span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br />
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni।</p>
                                                </div>
                                            </li>{/*<!-- /.career-objective -->*/}
                                            <li className="work-history">
                                                <div className="icon">
                                                    <i className="fa fa-briefcase" aria-hidden="true"></i>
                                                </div>
                                                <div className="media-body">
                                                    <span className="tr-title">Work History</span>
                                                    <ul className="tr-list">
                                                        <li>
                                                            <span>Senior Graphic Designer @ Buildomo</span>
                                                            <span className="present">2016 - Present</span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                        </li>
                                                        <li>
                                                            <span>Former Graphic Designer @ Ideame</span>
                                                            <span className="present">2015 - 2016</span>
                                                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                        </li>
                                                        <li>
                                                            <span>Head of Design @ Titan Compnay</span>
                                                            <span className="present">2007 - 2015</span>
                                                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                                        </li>
                                                        <li>
                                                            <span>Graphic Designer @ Precision</span>
                                                            <span className="present">2005 - 2007</span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                        </li>
                                                        <li>
                                                            <span>Graphic Designer (Intern) @ Costa Rica Fruit Compnay</span>
                                                            <span className="present">2003 - 2005</span>
                                                            <p>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                        </li>
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
                                                        <li>
                                                            <span>Senior Graphic Designer @ Buildomo</span>
                                                            <ul className="tr-list">
                                                                <li>Year: 1999 - 2001</li>
                                                                <li>Major: Major in Accounting</li>
                                                                <li>Course Duration: 2 Years</li>
                                                                <li>Result: 4.00</li>
                                                            </ul>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                        </li>
                                                        <li>
                                                            <span>Bachalor of Arts @ Universty of Bristol</span>
                                                            <ul className="tr-list">
                                                                <li>Year: 1999 - 2001</li>
                                                                <li>Major: Major in Accounting</li>
                                                                <li>Course Duration: 2 Years</li>
                                                                <li>Result: 4.00</li>
                                                            </ul>
                                                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                        </li>
                                                        <li>
                                                            <span>Diploma in Graphics Design @ Cincinnati Christian University</span>
                                                            <ul className="tr-list">
                                                                <li>Year: 1999 - 2001</li>
                                                                <li>Major: Major in Accounting</li>
                                                                <li>Course Duration: 2 Years</li>
                                                                <li>Result: 4.00</li>
                                                            </ul>
                                                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>{/*<!-- /.education-background -->*/}
                                            <li className="qualification">
                                                <div className="icon">
                                                    <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                                </div>
                                                <div className="media-body">
                                                    <span className="tr-title">Special Qualification:</span>
                                                    <ol>
                                                        <li>5 years+ experience designing and building products In the Design & IT industry.</li>
                                                        <li>Passion for people-centered design, solid intuition.</li>
                                                        <li>Skilled at any Kind Design Tools. </li>
                                                        <li>Hard Worker & Quick Lerner.</li>
                                                    </ol>
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
                                                        <li><span className="left">Full Name</span><span className="middle">:</span> <span className="right">Jhon Doe</span></li>
                                                        <li><span className="left">Father's Name </span><span className="middle">:</span> <span className="right">Robert Doe</span></li>
                                                        <li><span className="left">Mother's Name</span><span className="middle">:</span> <span className="right">Ismatic Roderos Doe</span></li>
                                                        <li><span className="left">Date of Birth</span><span className="middle">:</span> <span className="right">26/01/1982</span></li>
                                                        <li><span className="left">Birth Place</span><span className="middle">:</span> <span className="right">United State of America</span></li>
                                                        <li><span className="left">Nationality</span><span className="middle">:</span> <span className="right">Canadian</span></li>
                                                        <li><span className="left">Sex</span><span className="middle">:</span> <span className="right">Male</span> </li>
                                                        <li><span className="left">Address</span><span className="middle">:</span> <span className="right">121 King Street, Melbourne Victoria, 1200 USA</span></li>
                                                    </ul>
                                                </div>
                                            </li>{/*<!-- /.personal-deatils -->*/}
                                            <li className="personal-deatils">
                                                <div className="icon">
                                                    <i className="fa fa-hand-peace-o" aria-hidden="true"></i>
                                                </div>
                                                <div className="media-body">
                                                    <span className="tr-title">Declaration</span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br />
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni। dolores eos qui ratione voluptatem sequi nesciunt. </p>
                                                </div>
                                            </li>{/*<!-- /.personal-deatils -->*/}
                                        </ul>
                                        <div className="buttons pull-right">
                                            <a href="" className="btn button-cancle">Cancle</a>
                                            <a href="" className="btn btn-primary">Update Your Resume</a>
                                        </div>
                                    </div>{/*<!-- /.tab-pane -->*/}

                                    <div role="tabpanel" className="tab-pane edit-resume section" id="edit-resume">
                                        <ul className="tr-list resume-info">
                                            <li className="career-objective">
                                                <div className="icon">
                                                    <i className="fa fa-black-tie" aria-hidden="true"></i>
                                                </div>
                                                <div className="media-body">
                                                    <span className="tr-title">Career Objective</span>
                                                    <div className="code-edit">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br />
                                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni।</p>
                                                    </div>
                                                </div>
                                            </li>{/*<!-- /.career-objective -->*/}
                                            <li className="work-history">
                                                <div className="icon">
                                                    <i className="fa fa-briefcase" aria-hidden="true"></i>
                                                </div>
                                                <div className="media-body additem-work">
                                                    <span className="tr-title">Work History</span>
                                                    <div id="addhistory" className="additem">
                                                        <span id="clone" className="icon clone"><i className="fa fa-plus" aria-hidden="true"></i></span>
                                                        <span className="icon remove"><i className="fa fa-times" aria-hidden="true"></i></span>
                                                        <div className="code-edit-small">
                                                            <label>Job Title</label>
                                                            <div className="code-edit"><span>Senior Graphic Designer</span></div>
                                                            <label>Compnay Name</label>
                                                            <div className="code-edit"><span>Buildomo LLC</span></div>
                                                            <div className="row">
                                                                <div className="col-sm-6 col-md-4">
                                                                    <label>From</label>
                                                                    <div className="calendar">
                                                                        <input type="date" className="form-control" defaultValue="2015-01-15" />
                                                                    </div>{/*<!-- calendar -->*/}
                                                                </div>
                                                                <div className="col-sm-6 col-md-4">
                                                                    <label>To</label>
                                                                    <div className="calendar">
                                                                        <input type="date" className="form-control" defaultValue="2016-01-13" />
                                                                    </div>{/*<!-- calendar -->*/}
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="checkbox">
                                                                        <label htmlFor="logged-1"><input type="checkbox" name="logged-1" id="logged-1" />I currently work here</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>{/*<!-- /.work-history -->*/}
                                            <li className="education-background">
                                                <div className="icon">
                                                    <i className="fa fa-briefcase" aria-hidden="true"></i>
                                                </div>
                                                <div className="media-body additem-edu">
                                                    <span className="tr-title">Education Background</span>
                                                    <div id="add-edu" className="additem">
                                                        <span id="edu-clone" className="icon clone"><i className="fa fa-plus" aria-hidden="true"></i></span>
                                                        <span className="icon remove"><i className="fa fa-times" aria-hidden="true"></i></span>

                                                        <div className="code-edit-small">
                                                            <label>Degree</label>
                                                            <div className="code-edit"><span>Diploma in Graphic Designer</span></div>
                                                            <label>Institute Name</label>
                                                            <div className="code-edit"><span>Cincinnati Christian University</span></div>
                                                            <div className="row">
                                                                <div className="col-sm-6 col-md-4">
                                                                    <label>From Year</label>
                                                                    <div className="calendar">
                                                                        <input type="date" className="form-control" defaultValue="2012-01-01" />
                                                                    </div>{/*<!-- calendar -->*/}
                                                                </div>
                                                                <div className="col-sm-6 col-md-4">
                                                                    <label>To Year (or expected)</label>
                                                                    <div className="calendar">
                                                                        <input type="date" className="form-control" defaultValue="2017-01-13" />
                                                                    </div>{/*<!-- calendar -->*/}
                                                                </div>
                                                                <div className="col-sm-6 col-md-4">
                                                                    <label>Result (GPA)</label>
                                                                    <div className="code-edit"><span>4.00/5.00</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="code-edit">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                        </div>
                                                    </div>{/*<!-- /.additem -->*/}
                                                </div>
                                            </li>{/*<!-- /.education-background -->*/}
                                            <li className="qualification">
                                                <div className="icon">
                                                    <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                                </div>
                                                <div className="media-body">
                                                    <span className="tr-title">Special Qualification:</span>
                                                    <div className="code-edit">
                                                        <ol>
                                                            <li>5 years+ experience designing and building products In the Design &amp; IT industry.</li>
                                                            <li>Passion for people-centered design, solid intuition.</li>
                                                            <li>Skilled at any Kind Design Tools. </li>
                                                            <li>Hard Worker &amp; Quick Lerner.</li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </li>{/*<!-- /.qualification -->*/}
                                            <li className="language-proficiency code-edit-small">
                                                <div className="icon">
                                                    <i className="fa fa-language" aria-hidden="true"></i>
                                                </div>
                                                <div className="media-body">
                                                    <span className="tr-title">Language Proficiency:</span>
                                                    <div className="rating-star">
                                                        <span className="pull-left code-edit">English</span>
                                                        <div className="rating">
                                                            <input type="radio" id="star1" name="rating" /><label className="full" htmlFor="star1"></label>

                                                            <input type="radio" id="star2" name="rating" /><label className="half" htmlFor="star2"></label>

                                                            <input type="radio" id="star3" name="rating" /><label className="full" htmlFor="star3"></label>

                                                            <input type="radio" id="star4" name="rating" /><label className="half" htmlFor="star4"></label>

                                                            <input type="radio" id="star5" name="rating" /><label className="full" htmlFor="star5"></label>

                                                            <input type="radio" id="star6" name="rating" /><label className="half" htmlFor="star6"></label>

                                                            <input type="radio" id="star7" name="rating" /><label className="full" htmlFor="star7"></label>

                                                            <input type="radio" id="star8" name="rating" /><label className="half" htmlFor="star8"></label>

                                                            <input type="radio" id="star9" name="rating" /><label className="full" htmlFor="star9"></label>

                                                            <input type="radio" id="star10" name="rating" /><label className="half" htmlFor="star10"></label>
                                                        </div>
                                                    </div>
                                                    <div className="rating-star">
                                                        <span className="pull-left code-edit">German</span>
                                                        <div className="rating">
                                                            <input type="radio" id="star11" name="rating1" /><label className="full" htmlFor="star11"></label>

                                                            <input type="radio" id="star12" name="rating1" /><label className="half" htmlFor="star12"></label>

                                                            <input type="radio" id="star13" name="rating1" /><label className="full" htmlFor="star13"></label>

                                                            <input type="radio" id="star14" name="rating1" /><label className="half" htmlFor="star14"></label>

                                                            <input type="radio" id="star15" name="rating1" /><label className="full" htmlFor="star15"></label>

                                                            <input type="radio" id="star16" name="rating1" /><label className="half" htmlFor="star16"></label>

                                                            <input type="radio" id="star17" name="rating1" /><label className="full" htmlFor="star17"></label>

                                                            <input type="radio" id="star18" name="rating1" /><label className="half" htmlFor="star18"></label>

                                                            <input type="radio" id="star19" name="rating1" /><label className="full" htmlFor="star19"></label>

                                                            <input type="radio" id="star20" name="rating1" /><label className="half" htmlFor="star20"></label>
                                                        </div>
                                                    </div>
                                                    <div className="rating-star">
                                                        <span className="pull-left code-edit">Spanish</span>
                                                        <div className="rating">
                                                            <input type="radio" id="star21" name="rating2" /><label className="full" htmlFor="star21"></label>

                                                            <input type="radio" id="star22" name="rating2" /><label className="half" htmlFor="star22"></label>

                                                            <input type="radio" id="star23" name="rating2" /><label className="full" htmlFor="star23"></label>

                                                            <input type="radio" id="star24" name="rating2" /><label className="half" htmlFor="star24"></label>

                                                            <input type="radio" id="star25" name="rating2" /><label className="full" htmlFor="star25"></label>

                                                            <input type="radio" id="star26" name="rating2" /><label className="half" htmlFor="star26"></label>

                                                            <input type="radio" id="star27" name="rating2" /><label className="full" htmlFor="star27"></label>

                                                            <input type="radio" id="star28" name="rating2" /><label className="half" htmlFor="star28"></label>

                                                            <input type="radio" id="star29" name="rating2" /><label className="full" htmlFor="star29"></label>

                                                            <input type="radio" id="star30" name="rating2" /><label className="half" htmlFor="star30"></label>
                                                        </div>
                                                    </div>
                                                    <div className="rating-star">
                                                        <span className="pull-left code-edit">Latin</span>
                                                        <div className="rating">
                                                            <input type="radio" id="star31" name="rating3" /><label className="full" htmlFor="star31"></label>

                                                            <input type="radio" id="star32" name="rating3" /><label className="half" htmlFor="star32"></label>

                                                            <input type="radio" id="star33" name="rating3" /><label className="full" htmlFor="star33"></label>

                                                            <input type="radio" id="star34" name="rating3" /><label className="half" htmlFor="star34"></label>

                                                            <input type="radio" id="star35" name="rating3" /><label className="full" htmlFor="star35"></label>

                                                            <input type="radio" id="star36" name="rating3" /><label className="half" htmlFor="star36"></label>

                                                            <input type="radio" id="star37" name="rating3" /><label className="full" htmlFor="star37"></label>

                                                            <input type="radio" id="star38" name="rating3" /><label className="half" htmlFor="star38"></label>

                                                            <input type="radio" id="star39" name="rating3" /><label className="full" htmlFor="star39"></label>

                                                            <input type="radio" id="star40" name="rating3" /><label className="half" htmlFor="star40"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>{/*<!-- /.language-proficiency -->*/}
                                            <li className="personal-deatils code-edit-small">
                                                <div className="icon">
                                                    <i className="fa fa-user-secret" aria-hidden="true"></i>
                                                </div>
                                                <div className="media-body">
                                                    <span className="tr-title">Personal Deatils</span>
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <label>Full Name<span className="pull-right">:</span> </label>
                                                        </div>
                                                        <div className="col-sm-8">
                                                            <span className="code-edit">Jhon Doe</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <label>Father's Name<span className="pull-right">:</span> </label>
                                                        </div>
                                                        <div className="col-sm-8">
                                                            <span className="code-edit">Robert Doe</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <label>Date of Birth<span className="pull-right">:</span> </label>
                                                        </div>
                                                        <div className="col-sm-8">
                                                            <div className="calendar">
                                                                <input type="date" className="form-control" defaultValue="1982-01-26" />
                                                            </div>{/*<!-- calendar -->*/}
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <label>Birth Place<span className="pull-right">:</span> </label>
                                                        </div>
                                                        <div className="col-sm-8">
                                                            <span className="code-edit">United State of America</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <label>Nationality<span className="pull-right">:</span> </label>
                                                        </div>
                                                        <div className="col-sm-8">
                                                            <span className="code-edit">Canadian</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <label>Sex<span className="pull-right">:</span> </label>
                                                        </div>
                                                        <div className="col-sm-8">
                                                            <span className="code-edit">Male</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <label>Address<span className="pull-right">:</span> </label>
                                                        </div>
                                                        <div className="col-sm-8">
                                                            <span className="code-edit">121 King Street, Melbourne Victoria, 1200 USA</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>{/*<!-- /.personal-deatils -->*/}
                                            <li className="personal-deatils">
                                                <div className="icon">
                                                    <i className="fa fa-hand-peace-o" aria-hidden="true"></i>
                                                </div>
                                                <div className="media-body">
                                                    <span className="tr-title">Declaration</span>
                                                    <div className="code-edit">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br />
                                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni। dolores eos qui ratione voluptatem sequi nesciunt. </p>
                                                    </div>
                                                </div>
                                            </li>{/*<!-- /.personal-deatils -->*/}
                                        </ul>
                                        <div className="buttons pull-right">
                                            <a href="" className="btn button-cancle">Cancle</a>
                                            <a href="" className="btn btn-primary">Update Your Resume</a>
                                        </div>
                                    </div>{/*<!-- /.tab-pane -->*/}

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
        `candidates/-${props.props.match.params.uid}` // { path: '/todos' } // object notation
    ]),
    connect(
        (state) => ({
            profile: state.firebase.data.candidates,
            // profile: state.firebase.profile // load profile
        })
    )
)(Profile)