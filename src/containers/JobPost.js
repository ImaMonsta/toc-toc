import React, { Component } from 'react';

class JobPost extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const temp = Object.keys(this.refs);
        let result = {}
        for(const prop of temp){
            if(this.refs[prop].type === 'radio')
                result[prop] = this.refs[prop].checked;
            else
                result[prop] = this.refs[prop].value;
        }   
        this.props.postJob(this.props.user.uid, result);
    }

    render() {
        return (
            <div className="tr-post-job page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="short-info code-edit-small">
                                <div className="section">
                                    <span className="tr-title">Short Info</span>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <label>Title for your job</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input ref="title" className="form-control" type="text" placeholder="ex, Human Resource Manager"/>
                                        </div>
                                    </div>{/*<!-- /.row -->*/}
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <label>Job Category</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="dropdown tr-change-dropdown">
                                                <a data-toggle="dropdown" aria-expanded="true"><span className="change-text">Select a category</span><i className="fa fa-angle-down"></i></a>
                                                <ul className="dropdown-menu tr-change">
                                                    <li><a href="">Select a category</a></li>
                                                    <li><a href="">Software Engineer</a></li>
                                                    <li><a href="">Project Manager</a></li>
                                                    <li><a href="">Graphics Designer</a></li>
                                                </ul>								
                                            </div>{/*<!-- /.dropdown -->*/}
                                        </div>
                                    </div>{/*<!-- /.row -->*/}
                                    <div className="row job-category">
                                        <div className="col-sm-3">
                                            <label>Job Category</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="job-type">
                                                <input ref="fullTime" type="radio" name="radio1" placeholder="full-time" id="full-time"/> <label htmlFor="full-time">Full Time</label>
                                                <input ref="partTime" type="radio" name="radio1" placeholder="part-time" id="part-time"/> <label htmlFor="part-time">Part Time</label>
                                                <input ref="freeLance" type="radio" name="radio1" placeholder="freelance" id="freelance"/> <label htmlFor="freelance">Freelance</label>	
                                                <input ref="contract" type="radio" name="radio1" placeholder="contract" id="contract"/> <label htmlFor="contract">Contract</label>	
                                            </div>{/*<!-- /.user-type -->*/}
                                        </div>
                                    </div>{/*<!-- /.row -->*/}
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <label>Job Location</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input ref="address" className="form-control" type="text" placeholder="Address"/>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="dropdown tr-change-dropdown">
                                                        <a data-toggle="dropdown" href="" aria-expanded="true"><span className="change-text">City</span><i className="fa fa-angle-down"></i></a>
                                                        <ul className="dropdown-menu tr-change">
                                                            <li><a href="">City</a></li>
                                                            <li><a href="">Chicago</a></li>
                                                            <li><a href="">Denver</a></li>
                                                            <li><a href="">New Orleans</a></li>
                                                        </ul>								
                                                    </div>{/*<!-- /.dropdown -->*/}		
                                                </div>
                                                <div className="col-sm-6">
                                                    <input ref="postalCode" className="form-control" type="text" placeholder="Postal Code"/>
                                                </div>
                                            </div>									
                                        </div>
                                    </div>{/*<!-- /.row -->*/}
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <label>Salary Information</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <input ref="salary" className="form-control" type="text" placeholder="$5000.00"/>			
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="aegotiable">
                                                        <span>Or</span>
                                                        <input ref="negotiable" type="radio" name="radio2" placeholder="aegotiable" id="aegotiable"/> <label htmlFor="aegotiable">Negotiable</label>
                                                    </div>	
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/*<!-- /.row -->*/}
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <label>Application Deadline</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="calendar">
                                                <input ref="date" type="date" className="form-control" placeholder="2017-06-25"/>
                                            </div>								
                                        </div>
                                    </div>{/*<!-- /.row -->*/}
                                    <div className="row exprience-level">
                                        <div className="col-sm-3">
                                            <label>Exprience Level</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="exprience">
                                                <input ref="entryLevel" type="radio" name="radio3" placeholder="entry-level" id="entry-level"/> <label htmlFor="entry-level">Entry Level</label>
                                                <input ref="midLevel" type="radio" name="radio3" placeholder="mid-level" id="mid-level"/> <label htmlFor="mid-level">Mid Level</label>
                                                <input ref="midSenior" type="radio" name="radio3" placeholder="mid-senior" id="mid-senior"/> <label htmlFor="mid-senior">Mid-Senior Level</label>	
                                                <input ref="topLevel" type="radio" name="radio3" placeholder="top-level" id="top-level"/> <label htmlFor="top-level">Top Level</label>	
                                            </div>{/*<!-- /.user-type -->*/}
                                        </div>
                                    </div>{/*<!-- /.row -->*/}
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <label>Job Function</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="dropdown tr-change-dropdown">
                                                <a data-toggle="dropdown" href="" aria-expanded="true"><span className="change-text">Graphics Design</span><i className="fa fa-angle-down"></i></a>
                                                <ul className="dropdown-menu tr-change">
                                                    <li><a href="">Graphics Design</a></li>
                                                    <li><a href="">Project Manager</a></li>
                                                    <li><a href="">Software Engineer</a></li>
                                                </ul>								
                                            </div>{/*<!-- /.dropdown -->*/}	
                                        </div>
                                    </div>{/*<!-- /.row -->*/}												
                                </div>
                            </div>
                            <div className="job-description section">
                                <span className="tr-title">Job Description</span>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <label>Job Summary</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <textarea ref="summary" className="form-control" type="text" placeholder="Write few lines about your Job" rows="5"/>
                                        <span className="characters-left">5000 Characters left</span>
                                    </div>
                                </div>{/*<!-- /.row -->*/}
                                <div className="row">
                                    <div className="col-sm-3">
                                        <label>Key Responsibilities:</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <textarea ref="responsabilities" className="form-control" type="text" placeholder="Write few lines about your Job" rows="5"/>  
                                        <span className="characters-left">5000 Characters left</span>
                                    </div>
                                </div>{/*<!-- /.row -->*/}
                                <div className="row">
                                    <div className="col-sm-3">
                                        <label>Minimum Requirements:</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <textarea ref="requirements" className="form-control" type="text" placeholder="Write few lines about your Job" rows="5"/>  
                                        <span className="characters-left">5000 Characters left</span>
                                    </div>
                                </div>{/*<!-- /.row -->*/}						
                            </div>{/*<!-- /.job-description -->*/}

                            <div className="section agreement">
                                <div className="buttons">
                                    <a href="" className="btn btn-primary" onClick={this.handleSubmit}>Post Your Job</a>
                                </div>						
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="section quick-rules">
                                <span className="tr-title">Quick Rules</span>
                                <p>Posting an ad on <a href="">knocknock.com</a> is free! However, all post must follow our rules:</p>
                                <ul className="tr-list">
                                    <li>Make sure you post in the correct category.</li>
                                    <li>Do not post the same ad more than once or repost an ad within 48 hours.</li>
                                    <li>Do not upload pictures with watermarks.</li>
                                    <li>Do not post ads containing multiple items unless it's a package deal.</li>
                                    <li>Do not put your email or phone numbers in the title or description.</li>
                                </ul>
                            </div>
                        </div>
                    </div>{/*<!-- /.row -->*/}
                </div>{/*<!-- /.container -->*/}
            </div>
        );
    }
}

export default JobPost;