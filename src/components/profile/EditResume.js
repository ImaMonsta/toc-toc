import React, { Component } from 'react';
import WorkHistoryDetail from './WorkHistoryDetail'
import EducationBackgroundDetail from './EducationBackgroundDetail'

class EditResume extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.workAdd = this.workAdd.bind(this);
        this.workUpdate = this.workUpdate.bind(this);
        this.workDelete = this.workDelete.bind(this);
        this.educationUpdate = this.educationUpdate.bind(this);
        this.educationDelete = this.educationDelete.bind(this);
        this.educationAdd = this.educationAdd.bind(this);
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

    workUpdate(index, value, property) {
        const {
            workHistory
        } = this.state;
        const toUpdate = {...workHistory[index] };
        toUpdate[property] = value;
        const updatedWorkHistory = [ ...workHistory.slice(0, index), {...toUpdate}, ...workHistory.slice(index+1)]
        this.setState({
            workHistory: updatedWorkHistory
        });
    }
    workDelete(index) {
        const {
            workHistory
        } = this.state;
        const updatedWorkHistory = [ ...workHistory.slice(0, index), ...workHistory.slice(index+1)]
        this.setState({
            workHistory: updatedWorkHistory
        });
    }

    educationUpdate(index, value, property) {
        const {
            background
        } = this.state;
        const toUpdate = {...background[index] };
        toUpdate[property] = value;
        const updatedBackground = [ ...background.slice(0, index), {...toUpdate}, ...background.slice(index+1)]
        this.setState({
            background: updatedBackground
        });
    }

    educationDelete(index) {
        const {
            background
        } = this.state;
        const updatedBackground = [ ...background.slice(0, index), ...background.slice(index+1)]
        this.setState({
            background: updatedBackground
        });
    }

    educationAdd(e) {
        const {
            background
        } = this.state;
        background.push({});
        this.setState({
            background
        });
    }

    workAdd(e) {
        const {
            workHistory
        } = this.state;
        workHistory.push({});
        this.setState({
            workHistory
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { userId, editResume } = this.props;
        const { careerObjective, specialQualifications, hoobies, fullName, nacionality, sex, address, birthPlace, birthDate, workHistory, background } = this.state
        const resume = {
            careerObjective,
            specialQualifications,
            hoobies,
            fullName,
            nacionality,
            sex,
            address,
            birthPlace,
            birthDate,
            workHistory,
            background
        };
        editResume(userId,resume);
    }

    componentDidMount() {
    }
    
    render() {
        const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni।`;
        const specialQualificationsPlaceHolder = 
        `1. 5 years+ experience designing and building products In the Design & IT industry.
2. Passion for people-centered design, solid intuition.
3. Skilled at any Kind Design Tools.
4. Hard Worker & Quick Lerner.
        `;
        return (
            <div role="tabpanel" className="tab-pane edit-resume section active in" id="edit-resume">
                    <ul className="tr-list resume-info">
                        <li className="career-objective">
                            <div className="icon">
                                <i className="fa fa-black-tie" aria-hidden="true"></i>
                            </div>
                            <div className="media-body">
                                <span className="tr-title">Career Objective</span>
                                
                                <textarea placeholder={lorem} value={this.state.careerObjective} onChange={(e)=> this.setState({careerObjective: e.target.value})} className="form-control" rows="5"></textarea>

                            </div>
                        </li>{/*<!-- /.career-objective -->*/}
                        <li className="work-history">
                            <div className="icon">
                                <i className="fa fa-briefcase" aria-hidden="true"></i>
                            </div>
                            <div className="media-body additem-work">
                                <span className="tr-title">Work History</span>
                                <div id="addhistory" className="additem">
                                    <span id="clone" className="icon clone" onClick={this.workAdd}><i className="fa fa-plus" aria-hidden="true"></i></span>
                                    {
                                        this.state.workHistory.map((work, i) => 
                                            <React.Fragment key={i}>
                                                <WorkHistoryDetail lorem={lorem} work={work} i={i} onPropertyChange={this.workUpdate} onDelete={this.workDelete}/>
                                            </React.Fragment>
                                        ) 
                                    }
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
                                    <span id="edu-clone" className="icon clone" onClick={this.educationAdd}><i className="fa fa-plus" aria-hidden="true"></i></span>
                                    {
                                        this.state.background.map((education, i) =>
                                            <React.Fragment key={i}>
                                                <EducationBackgroundDetail lorem={lorem} education={education} i={i} onPropertyChange={this.educationUpdate} onDelete={this.educationDelete} />
                                            </React.Fragment>
                                        )
                                    }
                                </div>{/*<!-- /.additem -->*/}
                            </div>
                        </li>{/*<!-- /.education-background -->*/}
                        <li className="qualification">
                            <div className="icon">
                                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                            </div>
                            <div className="media-body">
                                <span className="tr-title">Special Qualification:</span>
                                <textarea placeholder={specialQualificationsPlaceHolder} value={this.state.specialQualifications} onChange={(e)=> this.setState({specialQualifications: e.target.value})} className="form-control" rows="5"></textarea>

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
                                        <input type="text" placeholder="Jhon Doe" className="form-control" value={this.state.fullName} onChange={(e)=> this.setState({fullName: e.target.value})} />    
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <label>Nationality<span className="pull-right">:</span> </label>
                                    </div>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder="Mexican" className="form-control" value={this.state.nacionality} onChange={(e)=> this.setState({nacionality: e.target.value})} />    
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <label>Sex<span className="pull-right">:</span> </label>
                                    </div>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder="Male" className="form-control" value={this.state.sex} onChange={(e)=> this.setState({sex: e.target.value})} />    
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <label>Address<span className="pull-right">:</span> </label>
                                    </div>
                                    <div className="col-sm-8">
                                        <input type="121 King Street, Melbourne Victoria, 1200 USA" placeholder="Jhon Doe" className="form-control" value={this.state.address} onChange={(e)=> this.setState({address: e.target.value})} />    
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <label>Birth Place<span className="pull-right">:</span> </label>
                                    </div>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder="Mexico City" className="form-control" value={this.state.birthPlace} onChange={(e)=> this.setState({birthPlace: e.target.value})} />    
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <label>Date of Birth<span className="pull-right">:</span> </label>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="calendar">
                                            <input type="date" className="form-control" placeholder="1982-01-26" value={this.state.birthDate} onChange={(e)=> this.setState({birthDate: e.target.value})}/>
                                        </div>{/*<!-- calendar -->*/}
                                    </div>
                                </div>
                            </div>
                        </li>{/*<!-- /.personal-deatils -->*/}
                        <li className="personal-deatils">
                            <div className="icon">
                                <i className="fa fa-hand-peace-o" aria-hidden="true"></i>
                            </div>
                            <div className="media-body">
                                <span className="tr-title">Hobbies</span>
                                <textarea placeholder={lorem} value={this.state.hoobies} onChange={(e)=> this.setState({hoobies: e.target.value})} className="form-control" rows="5"></textarea>
                            </div>
                        </li>{/*<!-- /.personal-deatils -->*/}
                    </ul>
                <form onSubmit={this.handleSubmit}>
                    <div className="buttons pull-right">
                        <button type="submit" className="btn btn-primary">Update Your Resume</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditResume;