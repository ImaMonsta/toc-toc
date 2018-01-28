import React, { Component } from 'react';

class EditResume extends Component {
    render() {
        return (
            <div role="tabpanel" className="tab-pane edit-resume section active in" id="edit-resume">
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
            </div>
        );
    }
}

export default EditResume;