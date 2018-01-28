import React, { Component } from 'react';
import moment from 'moment';

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            address: '',
            phone: '',
            title: '',
            fb: '',
            tw: '',
            g: '',
            lin: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        const { detail } = nextProps;
        if(detail) {
            this.setState( {
                address: detail.address,
                phone: detail.phone,
                title: detail.title,
                fb: detail.fb,
                tw: detail.tw,
                g: detail.g,
                lin: detail.lin,
            })
        }
    }
    
    
    handleSubmit(e) {
        e.preventDefault();
        const { address, phone, title, fb, tw, g, lin} = this.state;
        this.props.setProfileInfo(
            this.props.candidate,
            address,
            phone,
            title,
            fb,
            tw,
            g,
            lin
        );
        this.props.toogleCandidate();
    }

    render() {
        const { lastUpdate, fullName, email, toogleCandidate, appcontrol } = this.props;
       
        return (
            <div role="tabpanel" className="tab-pane fade in active account-info" id="account-info">
                <div className="tr-fun-fact">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="fun-fact">
                                <div className="fun-fact-icon">
                                    <img src="/images/icons/fun-fact4.png" alt="images" className="img-responsive" />
                                </div>
                                <div className="media-body">
                                    <h1 className="counter">329</h1>
                                    <span>Viewed my resume</span>
                                </div>
                            </div>{/*<!-- /.fun-fact -->*/}
                        </div>
                        <div className="col-sm-4">
                            <div className="fun-fact">
                                <div className="fun-fact-icon">
                                    <img src="/images/icons/fun-fact5.png" alt="images" className="img-responsive" />
                                </div>
                                <div className="media-body">
                                    <h1 className="counter">32</h1>
                                    <span>Application submit</span>
                                </div>
                            </div>{/*<!-- /.fun-fact -->*/}
                        </div>
                        <div className="col-sm-4">
                            <div className="fun-fact">
                                <div className="fun-fact-icon">
                                    <img src="/images/icons/fun-fact6.png" alt="images" className="img-responsive" />
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
                    <span className="icon pull-left"><img src="/images/icons/1.png" alt="Icon" className="img-responsive" /></span>
                    <div className="updated-info">
                        <span className="pull-left">Resume last updated on</span>
                        <span className="pull-right">{moment(lastUpdate).calendar()}</span>
                    </div>
                </div>{/*<!-- /.resume-last-updated -->*/}

                <form className="contact-form" onSubmit={this.handleSubmit}>
                    <div className="section display-information">
                        <div className="title title-after">
                            <div className="icon"><img src="/images/icons/2.png" alt="Icon" className="img-responsive" /></div>
                            <span >Your display Information</span>
                            {
                                !appcontrol.editCandidate ?
                                    <button  className="pull-right btn btn-primary" onClick={toogleCandidate}>Edit Profile</button>
                                    :
                                    <div className="pull-right">
                                        <button key="save-candidate" type="submit" className="btn btn-primary">Save</button>{ ' ' }
                                        <button  key="cancel-candidate"  className="btn button-cancle" onClick={toogleCandidate}>Cancel</button>
                                    </ div>
                            }
                        </div>

                        <div className="change-photo">
                            <div className="user-image">
                                <img src="https://firebasestorage.googleapis.com/v0/b/toc-toc-network.appspot.com/o/AS_Ghost1.jpg?alt=media&token=8861b2d5-f0bf-4264-99ee-8d3b76035028" alt="author" className="img-responsive" />
                            </div>
                            <div className="upload-photo">
                                <label className="btn btn-primary" htmlFor="upload-photo">
                                    <input type="file" id="upload-photo" />
                                    Change Photo
                                </label>
                                <span className="max-size">Max 20 MB</span>
                            </div>
                        </div>
                        <div className="code-edit-small">
                                <ul className="tr-list account-details">
                                    <li>Display Name<span>{fullName}</span></li>
                                    <li>Email<span><a href="">{email}</a></span></li>
                                    <li>
                                        <div className="form-group">
                                            Address <input value={ this.state.address } onChange={input => this.setState({address: input.value})} type="text" disabled={!appcontrol.editCandidate} className="form-control" placeholder="San Francisco, CA, US"/>
                                        </div> 
                                    </li>
                                    <li>
                                        <div className="form-group">
                                            Phone Number <input ref="phone" type="text" disabled={!appcontrol.editCandidate}  className="form-control" placeholder="+0123456789"/>
                                        </div> 
                                    </li>
                                    <li>
                                        <div className="form-group">
                                            Industry Expertise <input ref="title" type="text" disabled={!appcontrol.editCandidate}  className="form-control" placeholder="UI & UX Designer"/>
                                        </div> 
                                    </li>
                                </ul>
                        </div>
                    </div>{/*<!-- /.display-information -->*/}
                    <div className="section">
                        <div className="title title-after">
                            <div className="icon"><img src="/images/icons/3.png" alt="Icon" className="img-responsive" /></div>
                            <span>Social Link</span>
                        </div>
                        <ul className="social social-icon-bg tr-list">
                            <li>
                                <div className="form-inline">
                                    <i className="fa fa-facebook"></i>
                                    <input ref="fb" type="text" disabled={!appcontrol.editCandidate}  className="form-control" placeholder="https://www.facebook.com/jhondoe"/>
                                </div> 
                            </li>
                            <li>
                                <div className="form-inline">
                                    <i className="fa fa-twitter"></i>
                                    <input ref="tw" type="text" disabled={!appcontrol.editCandidate}  className="form-control" placeholder="https://www.twitter.com/jhondoe"/>
                                </div> 
                            </li>
                            <li>
                                <div className="form-inline">
                                    <i className="fa fa-google-plus"></i>
                                    <input ref="g" type="text" disabled={!appcontrol.editCandidate}  className="form-control" placeholder="https://www.googleplus.com/jhondoe"/>
                                </div> 
                            </li>
                            <li>
                                <div className="form-inline">
                                    <i className="fa fa-linkedin"></i>
                                    <input ref="lin" type="text" disabled={!appcontrol.editCandidate}  className="form-control" placeholder="https://www.linkedin.com/jhondoe"/>
                                </div> 
                            </li>
                        </ul>
                    </div>
                </form> 
            </div>
        );
    }
}

export default PersonalInfo;