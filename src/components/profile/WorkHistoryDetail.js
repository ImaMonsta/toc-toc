import React, { Component } from 'react';

class WorkHistoryDetail extends Component {
    constructor(props) {
        super(props);
        const {jobTitle, company, from, to, isCurrent, detail} = props.work;
        this.state = {
            jobTitle: jobTitle || '',
            company: company || '',
            from,
            to,
            isCurrent: isCurrent  || false,
            detail: detail || ''
        }
    }
    componentWillReceiveProps(nextProps) {
        const {jobTitle, company, from, to, isCurrent, detail} = nextProps.work;
        this.setState({
            jobTitle: jobTitle || '',
            company: company || '',
            from,
            to,
            isCurrent: isCurrent  || false,
            detail: detail || ''
        });
    }
    
    render() {
        const { jobTitle, company, from, to, isCurrent, detail } = this.state;
        const { lorem, onPropertyChange, i, onDelete } = this.props;
        return (
            <div className="code-edit-small">
                <hr/>
                <label>Job Title</label>
                <input type="text" placeholder="Senior Graphic Designer" className="form-control" value={jobTitle} onChange={e => onPropertyChange(i, e.target.value, 'jobTitle')} />    
                <label>Company Name</label>
                <input type="text" placeholder="Buildomo LLC" className="form-control" value={company} onChange={e => onPropertyChange(i, e.target.value, 'company')}/>    
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <label>From</label>
                        <div className="calendar">
                            <input type="date" className="form-control" value={from} onChange={e => onPropertyChange(i, e.target.value, 'from')}/>
                        </div>{/*<!-- calendar -->*/}
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <label>To</label>
                        <div className="calendar">
                            <input type="date" className="form-control"  value={to} onChange={e => onPropertyChange(i, e.target.value, 'to')}/>
                        </div>{/*<!-- calendar -->*/}
                    </div>
                    <div className="col-md-4">
                        <div className="checkbox">
                            <label htmlFor="logged-1"><input type="checkbox" name="logged-1" value={isCurrent} onChange={e => onPropertyChange(i, e.target.value, 'isCurrent')}/>I currently work here</label>
                        </div>
                    </div>
                    <textarea placeholder={lorem} className="form-control" rows="5" value={detail} onChange={e => onPropertyChange(i, e.target.value, 'detail')} ></textarea>

                </div>
                <div className="row">
                    <label></label>
                    <span onClick={e=> onDelete(i)} style={{display:'block'}} className="icon remove"><i className="fa fa-times" aria-hidden="true"></i></span>
                </div>
            </div>
        );
    }
}

export default WorkHistoryDetail;