import React, { Component } from 'react';

class BannerJobsPosted extends Component {
    render() {
        return (
            <div className="tr-job-posted section-padding">
                <div className="container">
                    <div className="section-title">
                        <h1>Jobs you may be interested in</h1>
                    </div>
                    <div className="job-tab">
                        <ul className="nav nav-tabs text-center" role="tablist">
                            <li role="presentation" className="active"><a href="#hot-jobs" aria-controls="hot-jobs" role="tab" data-toggle="tab">Hot Jobs</a></li>
                            <li role="presentation"><a href="#recent-jobs" aria-controls="recent-jobs" role="tab" data-toggle="tab">Recent Jobs</a></li>
                            <li role="presentation"><a href="#popular-jobs" aria-controls="popular-jobs" role="tab" data-toggle="tab">Popular Jobs</a></li>
                        </ul>
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane fade in active" id="hot-jobs">
                                <div className="row">
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Full Time</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Project Manager</a>
                                                        <span><a href="#">Dig File</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/1.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Project Manager</a>
                                                    <span><a href="#">Dig File</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>
                                                <div className="time">
                                                    <a href="#"><span>Full Time</span></a>
                                                    <span className="pull-right">Posted 23 hours ago</span>
                                                </div>																				
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Part Time</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Design Associate</a>
                                                        <span><a href="#">Loop</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>								
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/2.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Design Associate</a>
                                                    <span><a href="#">Loop</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>
                                                <div className="time">
                                                    <a href="#"><span className="part-time">Part Time</span></a>
                                                    <span className="pull-right">Posted 1 day ago</span>
                                                </div>			
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Freelance</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Graphic Designer</a>
                                                        <span><a href="#">Humanity Creative</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>								
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/3.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Graphic Designer</a>
                                                    <span><a href="#">Humanity Creative</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>
                                                <div className="time">
                                                    <a href="#"><span className="freelance">Freelance</span></a>
                                                    <span className="pull-right">Posted 10 day ago</span>
                                                </div>			
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Full Time</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Design Consultant</a>
                                                        <span><a href="#">Families</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>								
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/4.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Design Consultant</a>
                                                    <span><a href="#">Families</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>
                                                <div className="time">
                                                    <a href="#"><span>Full Time</span></a>
                                                    <span className="pull-right">Posted Oct 09, 2017</span>
                                                </div>				
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Part Time</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Project Manager</a>
                                                        <span><a href="#">Sky Creative</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>								
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/5.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Project Manager</a>
                                                    <span><a href="#">Sky Creative</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>	
                                                <div className="time">
                                                    <a href="#"><span className="part-time">Part Time</span></a>
                                                    <span className="pull-right">Posted 1 day ago</span>
                                                </div>			
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Freelance</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Design Associate</a>
                                                        <span><a href="#">Pencil</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>								
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/6.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Design Associate</a>
                                                    <span><a href="#">Pencil</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>
                                                <div className="time">
                                                    <a href="#"><span className="freelance">Freelance</span></a>
                                                    <span className="pull-right">Posted 23 hours ago</span>
                                                </div>				
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Full Time</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Graphic Designer</a>
                                                        <span><a href="#">Fox</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>								
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/7.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Graphic Designer</a>
                                                    <span><a href="#">Fox</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>
                                                <div className="time">
                                                    <a href="#"><span>Full Time</span></a>
                                                    <span className="pull-right">Posted Oct 09, 2017</span>
                                                </div>				
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#"><span className="btn btn-primary">Part Time</span></a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Design Consultant</a>
                                                        <span><a href="#">Owl</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>								
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/8.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Design Consultant</a>
                                                    <span><a href="#">Owl</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>
                                                <div className="time">
                                                    <a href="#"><span className="part-time">Part Time</span></a>
                                                    <span className="pull-right">Posted 10 day ago</span>
                                                </div>			
                                            </div>
                                        </div>
                                    </div>
                                </div>{/*<!-- /.row -->*/}
                            </div>{/*<!-- /.tab-pane -->*/}
                            <div role="tabpanel" className="tab-pane fade in" id="recent-jobs">
                                <div className="row">
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Part Time</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Design Associate</a>
                                                        <span><a href="#">Loop</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>								
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/2.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Design Associate</a>
                                                    <span><a href="#">Loop</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>
                                                <div className="time">
                                                    <a href="#"><span className="part-time">Part Time</span></a>
                                                    <span className="pull-right">Posted 1 day ago</span>
                                                </div>				
                                            </div>
                                        </div>
                                    </div>						
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Full Time</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Project Manager</a>
                                                        <span><a href="#">Dig File</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/1.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Project Manager</a>
                                                    <span><a href="#">Dig File</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>
                                                <div className="time">
                                                    <a href="#"><span>Full Time</span></a>
                                                    <span className="pull-right">Posted 23 hours ago</span>
                                                </div>			
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Part Time</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Design Consultant</a>
                                                        <span><a href="#">Families</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>								
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/4.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Design Consultant</a>
                                                    <span><a href="#">Families</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>
                                                <div className="time">
                                                    <a href="#"><span className="part-time">Part Time</span></a>
                                                    <span className="pull-right">Posted Oct 09, 2017</span>
                                                </div>				
                                            </div>
                                        </div>
                                    </div>							
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Freelance</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Graphic Designer</a>
                                                        <span><a href="#">Humanity Creative</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>								
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/3.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Graphic Designer</a>
                                                    <span><a href="#">Humanity Creative</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>
                                                <div className="time">
                                                    <a href="#"><span className="freelance">Freelance</span></a>
                                                    <span className="pull-right">Posted 10 day ago</span>
                                                </div>				
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Full Time</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Design Associate</a>
                                                        <span><a href="#">Pencil</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>								
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/6.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Design Associate</a>
                                                    <span><a href="#">Pencil</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>	
                                                <div className="time">
                                                    <a href="#"><span>Full Time</span></a>
                                                    <span className="pull-right">Posted 23 hours ago</span>
                                                </div>			
                                            </div>
                                        </div>
                                    </div>							
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Freelance</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Project Manager</a>
                                                        <span><a href="#">Sky Creative</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>								
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/5.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Project Manager</a>
                                                    <span><a href="#">Sky Creative</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>
                                                <div className="time">
                                                    <a href="#"><span className="freelance">Freelance</span></a>
                                                    <span className="pull-right">Posted 1 day ago</span>
                                                </div>			
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Part Time</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Design Consultant</a>
                                                        <span><a href="#">Owl</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>								
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/8.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Design Consultant</a>
                                                    <span><a href="#">Owl</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>
                                                <div className="time">
                                                    <a href="#"><span className="part-time">Part Time</span></a>
                                                    <span className="pull-right">Posted 10 day ago</span>
                                                </div>				
                                            </div>
                                        </div>
                                    </div>							
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Full Time</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Graphic Designer</a>
                                                        <span><a href="#">Fox</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>								
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/7.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Graphic Designer</a>
                                                    <span><a href="#">Fox</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>
                                                <div className="time">
                                                    <a href="#"><span>Full Time</span></a>
                                                    <span className="pull-right">Posted Oct 09, 2017</span>
                                                </div>				
                                            </div>
                                        </div>
                                    </div>
                                </div>{/*!-- /.row -->*/}
                            </div>{/*<!-- /.tab-pane -->*/}
                            <div role="tabpanel" className="tab-pane fade in" id="popular-jobs">
                                <div className="row">
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Full Time</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Graphic Designer</a>
                                                        <span><a href="#">Fox</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>								
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/7.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Graphic Designer</a>
                                                    <span><a href="#">Fox</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>	
                                                <div className="time">
                                                    <a href="#"><span>Full Time</span></a>
                                                    <span className="pull-right">Posted Oct 09, 2017</span>
                                                </div>			
                                            </div>
                                        </div>
                                    </div>						
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Part Time</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Design Associate</a>
                                                        <span><a href="#">Loop</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>								
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/2.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Design Associate</a>
                                                    <span><a href="#">Loop</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>
                                                <div className="time">
                                                    <a href="#"><span className="part-time">Part Time</span></a>
                                                    <span className="pull-right">Posted 1 day ago</span>
                                                </div>			
                                            </div>
                                        </div>
                                    </div>						
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Full Time</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Project Manager</a>
                                                        <span><a href="#">Dig File</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/1.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Project Manager</a>
                                                    <span><a href="#">Dig File</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>
                                                <div className="time">
                                                    <a href="#"><span>Full Time</span></a>
                                                    <span className="pull-right">Posted 23 hours ago</span>
                                                </div>				
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Freelance</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Graphic Designer</a>
                                                        <span><a href="#">Humanity Creative</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>								
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/3.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Graphic Designer</a>
                                                    <span><a href="#">Humanity Creative</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>
                                                <div className="time">
                                                    <a href="#"><span className="freelance">Freelance</span></a>
                                                    <span className="pull-right">Posted 10 day ago</span>
                                                </div>			
                                            </div>
                                        </div>
                                    </div>							
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Full Time</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Design Consultant</a>
                                                        <span><a href="#">Families</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>								
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/4.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Design Consultant</a>
                                                    <span><a href="#">Families</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>
                                                <div className="time">
                                                    <a href="#"><span>Full Time</span></a>
                                                    <span className="pull-right">Posted Oct 09, 2017</span>
                                                </div>			
                                            </div>
                                        </div>
                                    </div>							
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Freelance</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Design Associate</a>
                                                        <span><a href="#">Pencil</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>								
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/6.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Design Associate</a>
                                                    <span><a href="#">Pencil</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>	
                                                <div className="time">
                                                    <a href="#"><span className="freelance">Freelance</span></a>
                                                    <span className="pull-right">Posted 23 hours ago</span>
                                                </div>		
                                            </div>
                                        </div>
                                    </div>	
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Part Time</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Design Consultant</a>
                                                        <span><a href="#">Owl</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>								
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/8.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Design Consultant</a>
                                                    <span><a href="#">Owl</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>
                                                <div className="time">
                                                    <a href="#"><span className="part-time">Part Time</span></a>
                                                    <span className="pull-right">Posted 10 day ago</span>
                                                </div>			
                                            </div>
                                        </div>
                                    </div>														
                                    <div className="col-sm-6 col-md-3">
                                        <div className="job-item">
                                            <div className="item-overlay">
                                                <div className="job-info">
                                                    <a href="#" className="btn btn-primary">Full Time</a>
                                                    <span className="tr-title">
                                                        <a href="job-details.html">Project Manager</a>
                                                        <span><a href="#">Sky Creative</a></span>
                                                    </span>
                                                    <ul className="tr-list job-meta">
                                                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                                                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                                                        <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                                                    </ul>
                                                    <ul className="job-social tr-list">
                                                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>										
                                            </div>								
                                            <div className="job-info">
                                                <div className="company-logo">
                                                    <img src="images/job/5.png" alt="images" className="img-responsive"/>
                                                </div>
                                                <span className="tr-title">
                                                    <a href="#">Project Manager</a>
                                                    <span><a href="#">Sky Creative</a></span>
                                                </span>
                                                <ul className="tr-list job-meta">
                                                    <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                                                    <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                                                    <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                                                </ul>
                                                <div className="time">
                                                    <a href="#"><span>Full Time</span></a>
                                                    <span className="pull-right">Posted 1 day ago</span>
                                                </div>				
                                            </div>
                                        </div>
                                    </div>
                                </div>{/*<!-- /.row -->*/}
                            </div>{/*<!-- /.tab-pane -->*/}
                        </div>				
                    </div>{/*<!-- /.job-tab -->*/}			
                </div>{/*<!-- /.container -->*/}
            </div>
        );
    }
}

export default BannerJobsPosted;