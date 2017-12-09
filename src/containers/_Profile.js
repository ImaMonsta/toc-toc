import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div>
            <div className="tr-breadcrumb bg-image section-before">
                <div className="container">
                    <div className="breadcrumb-info text-center">
                        <div className="breadcrumb-logo">
                            <img src="images/others/company-logo.png" alt="Logo" className="img-responsive"/>
                        </div>
                        <div className="page-title">
                            <h1>Google inc</h1>
                        </div>		
                        <ul className="job-meta tr-list list-inline">
                            <li><i className="fa fa-map-marker" aria-hidden="true"></i>San Francisco, CA, US</li>
                            <li><i className="fa fa-phone" aria-hidden="true"></i>+0123 456 789</li>
                            <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="">support@google.com</a></li>
                            <li><i className="fa fa-briefcase" aria-hidden="true"></i>IT Industry</li>
                            <li><i className="fa fa-black-tie" aria-hidden="true"></i>Company Size: 2K</li>
                        </ul>
                        <ul className="breadcrumb-social social-icon-bg  tr-list">
                            <li><a href=""><i className="fa fa-facebook"></i><span>Facebook</span></a></li>
                            <li><a href=""><i className="fa fa-twitter"></i> <span>Twitter</span> </a></li>
                            <li><a href=""><i className="fa fa-google-plus"></i> <span>Google Plus</span> </a></li>
                            <li><a href=""><i className="fa fa-linkedin"></i><span>Linkedin</span> </a></li>
                            <li><a href=""><i className="fa fa-dribbble"></i> <span>Dribbble</span></a></li>
                            <li><a href=""><i className="fa fa-behance"></i> <span>Behance</span></a></li>
                            <li><a href=""><i className="fa fa-globe"></i> <span>Website</span> </a></li>
                        </ul>			
                    </div>
                </div>
            </div>	
            <div className="tr-profile section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-md-3">
                            <div className="tr-sidebar">
                                <ul className="nav nav-tabs profile-tabs section" role="tablist">
                                    <li role="presentation" className="active"><a href="#account-info" aria-controls="account-info" role="tab" data-toggle="tab"><i className="fa fa-life-ring" aria-hidden="true"></i> Account Info</a></li>
                                    <li role="presentation"><a href="#company-profile" aria-controls="company-profile" role="tab" data-toggle="tab"><span><i className="fa fa-user-o" aria-hidden="true"></i></span>Company Profile</a></li>
                                    <li role="presentation"><a href="#edit-profile" aria-controls="edit-profile" role="tab" data-toggle="tab"><span><i className="fa fa-user-o" aria-hidden="true"></i></span>Edit Company Profile</a></li>
                                    <li role="presentation"><a href="#open-role" aria-controls="open-role" role="tab" data-toggle="tab"><span><i className="fa fa-bell-o" aria-hidden="true"></i></span>Open Role</a></li>
                                    <li role="presentation"><a href="#archived" aria-controls="archived" role="tab" data-toggle="tab"><span><i className="fa fa-clone" aria-hidden="true"></i></span>Archived Job Post</a></li>
                                    <li role="presentation"><a href="#close-account" aria-controls="close-account" role="tab" data-toggle="tab"><span><i className="fa fa-scissors" aria-hidden="true"></i></span>Logout</a></li>
                                </ul>	        			
                            </div>{/*<!-- /.tr-sidebar -->*/}        		
                        </div>
                        <div className="col-sm-8 col-md-9">
                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane fade in active account-info" id="account-info">	
                                    <div className="tr-fun-fact">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="fun-fact">
                                                    <div className="fun-fact-icon">
                                                        <img src="images/icons/fun-fact4.png" alt="images" className="img-responsive"/>
                                                    </div>
                                                    <div className="media-body">
                                                        <h1 className="counter">329</h1>
                                                        <span>Total job post</span>
                                                    </div>
                                                </div>{/*<!-- /.fun-fact -->*/}
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="fun-fact">
                                                    <div className="fun-fact-icon">
                                                        <img src="images/icons/fun-fact5.png" alt="images" className="img-responsive"/>
                                                    </div>
                                                    <div className="media-body">
                                                        <h1 className="counter">23,563</h1>
                                                        <span>Application submit</span>
                                                    </div>
                                                </div>{/*<!-- /.fun-fact -->*/}									
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="fun-fact">
                                                    <div className="fun-fact-icon">
                                                        <img src="images/icons/fun-fact6.png" alt="images" className="img-responsive"/>
                                                    </div>
                                                    <div className="media-body">
                                                        <h1 className="counter">27</h1>
                                                        <span>Call for interview</span>
                                                    </div>
                                                </div>{/*<!-- /.fun-fact -->*/}									
                                            </div>
                                        </div>{/*<!-- ./row -->*/}							
                                    </div>{/*<!-- /.tr-fun-fact -->*/}

                                    <div className="section resume-last-updated">
                                        <span className="icon pull-left"><img src="images/icons/1.png" alt="Icon" className="img-responsive"/></span>
                                        <div className="updated-info">
                                            <span className="pull-left">Profile last updated on</span>
                                            <span className="pull-right">24/4/2017</span>
                                        </div>
                                    </div>{/*<!-- /.resume-last-updated -->*/}

                                    <div className="section display-information">
                                        <div className="title title-after">
                                            <div className="icon"><img src="images/icons/2.png" alt="Icon" className="img-responsive"/></div> 
                                            <span>Your display information</span>
                                        </div>

                                        <div className="change-photo">
                                            <div className="user-image">
                                                <img src="images/others/company-logo.png" alt="logo" className="img-responsive"/>
                                            </div>
                                            <div className="upload-photo">
                                                <label className="btn btn-primary" for="upload-photo">
                                                    <input type="file" id="upload-photo"/>
                                                    Change Photo
                                                </label>
                                                <span className="max-size">Max 20 MB</span>
                                            </div>
                                        </div>
                                        <ul className="tr-list account-details">
                                            <li>Compnay Name<span>Google Inc</span></li>
                                            <li>Address<span>San Francisco, CA, US</span></li>
                                            <li>Phone Number<span>+0123456789</span></li>
                                            <li>Email Id<span><a href="">jhondoe@gmail.com</a></span></li>
                                            <li>Industry Expertise<span>IT Industry</span></li>
                                            <li>Compnay Size<span>2,000</span></li>
                                        </ul>								
                                    </div>{/*<!-- /.display-information -->*/}
                                    <div className="section">
                                        <div className="title title-after">
                                            <div className="icon"><img src="images/icons/3.png" alt="Icon" className="img-responsive"/></div> 
                                            <span>Social Link</span>
                                        </div>
                                        <ul className="social social-icon-bg tr-list">
                                            <li><i className="fa fa-facebook"></i><span className="media-body"><a href="">https://www.facebook.com/jhondoe</a></span></li>
                                            <li><i className="fa fa-twitter"></i><span className="media-body"><a href="">https://www.twitter.com/jhondoe</a></span></li>
                                            <li><i className="fa fa-google-plus"></i><span className="media-body"><a href="">https://www.googleplus.com/jhondoe</a></span></li>
                                            <li><i className="fa fa-linkedin"></i><span className="media-body"><a href="">https://www.linkedin.com/jhondoe</a></span></li>
                                            <li><i className="fa fa-dribbble"></i><span className="media-body"><a href="">https://www.dribbble.com/jhondoe</a></span></li>
                                            <li><i className="fa fa-behance"></i><span className="media-body"><a href="">https://www.behance.com/jhondoe</a></span></li>
                                            <li><i className="fa fa-globe"></i><span className="media-body"><a href="">https://www.globe.com/jhondoe</a></span></li>
                                        </ul>						
                                    </div>
                                </div>{/*<!-- /.tab-pane -->*/}

                                <div role="tabpanel" className="tab-pane section" id="company-profile">
                                    <ul className="tr-list resume-info">
                                        <li className="career-objective">
                                            <div className="icon">
                                                <i className="fa fa-black-tie" aria-hidden="true"></i>
                                            </div>  
                                            <div className="media-body">
                                                <span className="tr-title">Company Info</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br/>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni।</p>
                                            </div>
                                        </li>{/*<!-- /.career-objective -->*/}
                                        <li className="mission-vision">
                                            <div className="icon">
                                                <i className="fa fa-anchor" aria-hidden="true"></i>
                                            </div>  
                                            <div className="media-body">
                                                <span className="tr-title">Mission & Vision</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br/>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni।</p>
                                            </div>
                                        </li>{/*<!-- /.mission-vision -->*/}	
                                        <li className="company-achievement">
                                            <div className="icon">
                                                <i className="fa fa-book" aria-hidden="true"></i>
                                            </div>
                                            <div className="media-body">
                                                <span className="tr-title">Company Achievement</span>
                                                <ul className="tr-list">
                                                    <li>
                                                        <span>Introducing Our Mobile “Nexus”</span>
                                                        <ul className="tr-list">
                                                            <li>Year: 27 May, 2010</li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                    </li>
                                                    <li>
                                                        <span>Win Award Stardom</span>
                                                        <ul className="tr-list">
                                                            <li>Year: 27 May, 2010</li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>{/*<!-- /.company-achievement -->*/}							
                                    </ul>
                                    <div className="buttons pull-right">
                                        <a href="" className="btn button-cancle">Cancle</a>
                                        <a href="" className="btn btn-primary">Update Profile</a>
                                    </div>								
                                </div>{/*<!-- /.tab-pane -->*/}

                                <div role="tabpanel" className="tab-pane section" id="edit-profile">
                                    <ul className="tr-list resume-info">
                                        <li className="career-objective">
                                            <div className="icon">
                                                <i className="fa fa-black-tie" aria-hidden="true"></i>
                                            </div>  
                                            <div className="media-body">
                                                <span className="tr-title">Career Objective</span>
                                                <div className="code-edit">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br/>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni।</p>		
                                                </div>
                                            </div>
                                        </li>{/*<!-- /.career-objective -->*/}
                                        <li className="mission-vision">
                                            <div className="icon">
                                                <i className="fa fa-anchor" aria-hidden="true"></i>
                                            </div>  
                                            <div className="media-body">
                                                <span className="tr-title">Mission & Vision</span>
                                                <div className="code-edit">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br/>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni।</p>
                                                </div>
                                            </div>
                                        </li>{/*<!-- /.mission-vision -->*/}
                                        <li className="work-history">
                                            <div className="icon">
                                                <i className="fa fa-book" aria-hidden="true"></i>
                                            </div>
                                            <div className="media-body additem-achiev">
                                                <span className="tr-title">Company Achievement</span>
                                                <div id="achievement" className="additem">
                                                    <span id="achiev-clone" className="icon clone"><i className="fa fa-plus" aria-hidden="true"></i></span>
                                                    <span className="icon remove"><i className="fa fa-times" aria-hidden="true"></i></span>

                                                    <div className="code-edit-small">
                                                        <label>Title</label>
                                                        <div className="code-edit">
                                                            <span>Introducing Our Mobile “Nexus”</span>
                                                        </div>
                                                        <label>Year</label>
                                                        <div className="calendar">
                                                            <input type="date" className="form-control" value="2017-06-25"/>
                                                        </div>
                                                    </div>
                                                    <label>Description</label>
                                                    <div className="code-edit">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                    </div>									    		
                                                </div>						    	
                                            </div>
                                        </li>{/*<!-- /.work-history -->*/}	
                                    </ul>
                                    <div className="buttons pull-right">
                                        <a href="" className="btn button-cancle">Cancle</a>
                                        <a href="" className="btn btn-primary">Update Profile</a>
                                    </div>														
                                </div>{/*<!-- /.tab-pane -->*/}

                                <div role="tabpanel" className="tab-pane open-role" id="open-role">
                                    <div className="role remove-item">
                                        <div className="left-content">
                                            <div className="clearfix">
                                                <span className="tr-title">
                                                    <a href="">Design Associate</a>
                                                </span>
                                                <span><a href="" className="btn btn-primary">Part Time</a></span>
                                            </div>
                                            <span className="deadline">Application Deadline : Jun 27, 2017</span>
                                            <ul className="tr-list job-meta">
                                                <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                            </ul>										
                                        </div>
                                        <div className="right-content">
                                            <span><a href=""><i className="fa fa-pencil"></i></a></span>
                                            <span className="remove-icon"><i className="fa fa-trash-o"></i></span>
                                        </div>
                                    </div>{/*<!-- /.role -->*/}
                                    <div className="role remove-item">
                                        <div className="left-content">
                                            <div className="clearfix">
                                                <span className="tr-title">
                                                    <a href="">Design Associate</a>
                                                </span>
                                                <span><a href="" className="btn btn-primary">Part Time</a></span>
                                            </div>
                                            <span className="deadline">Application Deadline : Jun 27, 2017</span>
                                            <ul className="tr-list job-meta">
                                                <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                            </ul>										
                                        </div>
                                        <div className="right-content">
                                            <span><a href=""><i className="fa fa-pencil"></i></a></span>
                                            <span className="remove-icon"><i className="fa fa-trash-o"></i></span>
                                        </div>
                                    </div>{/*<!-- /.role -->*/}
                                    <div className="role remove-item">
                                        <div className="left-content">
                                            <div className="clearfix">
                                                <span className="tr-title">
                                                    <a href="">Design Associate</a>
                                                </span>
                                                <span><a href="" className="btn btn-primary">Part Time</a></span>
                                            </div>
                                            <span className="deadline">Application Deadline : Jun 27, 2017</span>
                                            <ul className="tr-list job-meta">
                                                <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                            </ul>										
                                        </div>
                                        <div className="right-content">
                                            <span><a href=""><i className="fa fa-pencil"></i></a></span>
                                            <span className="remove-icon"><i className="fa fa-trash-o"></i></span>
                                        </div>
                                    </div>{/*<!-- /.role -->*/}
                                    <div className="role remove-item">
                                        <div className="left-content">
                                            <div className="clearfix">
                                                <span className="tr-title">
                                                    <a href="">Design Associate</a>
                                                </span>
                                                <span><a href="" className="btn btn-primary">Part Time</a></span>
                                            </div>
                                            <span className="deadline">Application Deadline : Jun 27, 2017</span>
                                            <ul className="tr-list job-meta">
                                                <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                            </ul>										
                                        </div>
                                        <div className="right-content">
                                            <span><a href=""><i className="fa fa-pencil"></i></a></span>
                                            <span className="remove-icon"><i className="fa fa-trash-o"></i></span>
                                        </div>
                                    </div>{/*<!-- /.role -->*/}
                                    <div className="role remove-item">
                                        <div className="left-content">
                                            <div className="clearfix">
                                                <span className="tr-title">
                                                    <a href="">Design Associate</a>
                                                </span>
                                                <span><a href="" className="btn btn-primary">Part Time</a></span>
                                            </div>
                                            <span className="deadline">Application Deadline : Jun 27, 2017</span>
                                            <ul className="tr-list job-meta">
                                                <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                            </ul>										
                                        </div>
                                        <div className="right-content">
                                            <span><a href=""><i className="fa fa-pencil"></i></a></span>
                                            <span className="remove-icon"><i className="fa fa-trash-o"></i></span>
                                        </div>
                                    </div>{/*<!-- /.role -->*/}
                                    <div className="role remove-item">
                                        <div className="left-content">
                                            <div className="clearfix">
                                                <span className="tr-title">
                                                    <a href="">Design Associate</a>
                                                </span>
                                                <span><a href="" className="btn btn-primary">Part Time</a></span>
                                            </div>
                                            <span className="deadline">Application Deadline : Jun 27, 2017</span>
                                            <ul className="tr-list job-meta">
                                                <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                            </ul>										
                                        </div>
                                        <div className="right-content">
                                            <span><a href=""><i className="fa fa-pencil"></i></a></span>
                                            <span className="remove-icon"><i className="fa fa-trash-o"></i></span>
                                        </div>
                                    </div>{/*<!-- /.role -->*/}
                                    <div className="role remove-item">
                                        <div className="left-content">
                                            <div className="clearfix">
                                                <span className="tr-title">
                                                    <a href="">Design Associate</a>
                                                </span>
                                                <span><a href="" className="btn btn-primary">Part Time</a></span>
                                            </div>
                                            <span className="deadline">Application Deadline : Jun 27, 2017</span>
                                            <ul className="tr-list job-meta">
                                                <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                            </ul>										
                                        </div>
                                        <div className="right-content">
                                            <span><a href=""><i className="fa fa-pencil"></i></a></span>
                                            <span className="remove-icon"><i className="fa fa-trash-o"></i></span>
                                        </div>
                                    </div>{/*<!-- /.role -->*/}							
                                </div>{/*<!-- /.tab-pane -->*/}

                                <div role="tabpanel" className="tab-pane archived-job" id="archived">
                                    <div className="job-item remove-item">
                                        <div className="job-info">
                                            <div className="left-content">
                                                <div className="clearfix">
                                                    <span className="tr-title">
                                                        <a href="job-post.html">Design Associate</a>
                                                    </span>
                                                    <span><a href="" className="btn btn-primary">Part Time</a></span>
                                                </div>
                                                <span className="deadline">Application Deadline : Jun 27, 2017</span>										
                                            </div>
                                            <div className="right-content">
                                                <span className="remove-icon"><i className="fa fa-trash-o"></i></span>
                                            </div>
                                        </div>
                                    </div>{/*<!-- /.job-item -->*/}
                                    <div className="job-item remove-item">
                                        <div className="job-info">
                                            <div className="left-content">
                                                <div className="clearfix">
                                                    <span className="tr-title">
                                                        <a href="job-post.html">Design Associate</a>
                                                    </span>
                                                    <span><a href="" className="btn btn-primary">Part Time</a></span>
                                                </div>
                                                <span className="deadline">Application Deadline : Jun 27, 2017</span>										
                                            </div>
                                            <div className="right-content">
                                                <span className="remove-icon"><i className="fa fa-trash-o"></i></span>
                                            </div>
                                        </div>
                                    </div>{/*<!-- /.job-item -->*/}
                                    <div className="job-item remove-item">
                                        <div className="job-info">
                                            <div className="left-content">
                                                <div className="clearfix">
                                                    <span className="tr-title">
                                                        <a href="job-post.html">Design Associate</a>
                                                    </span>
                                                    <span><a href="" className="btn btn-primary">Part Time</a></span>
                                                </div>
                                                <span className="deadline">Application Deadline : Jun 27, 2017</span>										
                                            </div>
                                            <div className="right-content">
                                                <span className="remove-icon"><i className="fa fa-trash-o"></i></span>
                                            </div>
                                        </div>
                                    </div>{/*<!-- /.job-item -->*/}
                                    <div className="job-item remove-item">
                                        <div className="job-info">
                                            <div className="left-content">
                                                <div className="clearfix">
                                                    <span className="tr-title">
                                                        <a href="job-post.html">Design Associate</a>
                                                    </span>
                                                    <span><a href="" className="btn btn-primary">Part Time</a></span>
                                                </div>
                                                <span className="deadline">Application Deadline : Jun 27, 2017</span>										
                                            </div>
                                            <div className="right-content">
                                                <span className="remove-icon"><i className="fa fa-trash-o"></i></span>
                                            </div>
                                        </div>
                                    </div>{/*<!-- /.job-item -->*/}
                                    <div className="job-item remove-item">
                                        <div className="job-info">
                                            <div className="left-content">
                                                <div className="clearfix">
                                                    <span className="tr-title">
                                                        <a href="job-post.html">Design Associate</a>
                                                    </span>
                                                    <span><a href="" className="btn btn-primary">Part Time</a></span>
                                                </div>
                                                <span className="deadline">Application Deadline : Jun 27, 2017</span>										
                                            </div>
                                            <div className="right-content">
                                                <span className="remove-icon"><i className="fa fa-trash-o"></i></span>
                                            </div>
                                        </div>
                                    </div>{/*<!-- /.job-item -->*/}
                                    <div className="job-item remove-item">
                                        <div className="job-info">
                                            <div className="left-content">
                                                <div className="clearfix">
                                                    <span className="tr-title">
                                                        <a href="job-post.html">Design Associate</a>
                                                    </span>
                                                    <span><a href="" className="btn btn-primary">Part Time</a></span>
                                                </div>
                                                <span className="deadline">Application Deadline : Jun 27, 2017</span>										
                                            </div>
                                            <div className="right-content">
                                                <span className="remove-icon"><i className="fa fa-trash-o"></i></span>
                                            </div>
                                        </div>
                                    </div>{/*<!-- /.job-item -->*/}
                                    <div className="job-item remove-item">
                                        <div className="job-info">
                                            <div className="left-content">
                                                <div className="clearfix">
                                                    <span className="tr-title">
                                                        <a href="job-post.html">Design Associate</a>
                                                    </span>
                                                    <span><a href="" className="btn btn-primary">Part Time</a></span>
                                                </div>
                                                <span className="deadline">Application Deadline : Jun 27, 2017</span>										
                                            </div>
                                            <div className="right-content">
                                                <span className="remove-icon"><i className="fa fa-trash-o"></i></span>
                                            </div>
                                        </div>
                                    </div>{/*<!-- /.job-item -->*/}
                                    <div className="job-item remove-item">
                                        <div className="job-info">
                                            <div className="left-content">
                                                <div className="clearfix">
                                                    <span className="tr-title">
                                                        <a href="job-post.html">Design Associate</a>
                                                    </span>
                                                    <span><a href="" className="btn btn-primary">Part Time</a></span>
                                                </div>
                                                <span className="deadline">Application Deadline : Jun 27, 2017</span>										
                                            </div>
                                            <div className="right-content">
                                                <span className="remove-icon"><i className="fa fa-trash-o"></i></span>
                                            </div>
                                        </div>
                                    </div>{/*<!-- /.job-item -->*/}
                                    <div className="job-item remove-item">
                                        <div className="job-info">
                                            <div className="left-content">
                                                <div className="clearfix">
                                                    <span className="tr-title">
                                                        <a href="job-post.html">Design Associate</a>
                                                    </span>
                                                    <span><a href="" className="btn btn-primary">Part Time</a></span>
                                                </div>
                                                <span className="deadline">Application Deadline : Jun 27, 2017</span>										
                                            </div>
                                            <div className="right-content">
                                                <span className="remove-icon"><i className="fa fa-trash-o"></i></span>
                                            </div>
                                        </div>
                                    </div>{/*<!-- /.job-item -->*/}						
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

export default Profile;