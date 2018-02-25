import React, { Component } from 'react';

class EducationBackgroundDetail extends Component {
    constructor(props) {
        super(props);
        const { degree, institute, from, to, result, detail } = props.education;
        this.state={
            degree: degree || '',
            institute: institute || '',
            from,
            to,
            result: result  || '',
            detail: detail  || ''
        }
    }

    componentWillReceiveProps(nextProps) {
        const { degree, institute, from, to, result, detail } = nextProps.education;
        this.setState({
            degree: degree || '',
            institute: institute || '',
            from,
            to,
            result: result  || '',
            detail: detail  || ''
        });
    }
    
    
    render() {
        const { degree, institute, from, to, result, detail } = this.state;
        const {lorem, onPropertyChange, i, onDelete } = this.props;
        return (
            <React.Fragment>
                <div className="code-edit-small">
                    <label>Degree</label>
                    <input type="text" placeholder="Diploma in Graphic Designer" className="form-control" value={degree} onChange={e => onPropertyChange(i, e.target.value, 'degree')} /> 
                    <label>Institute Name</label>
                    <input type="text" placeholder="Cincinnati Christian University" className="form-control" value={institute} onChange={e => onPropertyChange(i, e.target.value, 'institute')} /> 
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <label>From Year</label>
                            <div className="calendar">
                                <input type="date" className="form-control" value={from} onChange={e => onPropertyChange(i, e.target.value, 'from')} />
                            </div>{/*<!-- calendar -->*/}
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <label>To Year (or expected)</label>
                            <div className="calendar">
                                <input type="date" className="form-control" value={to} onChange={e => onPropertyChange(i, e.target.value, 'to')} />
                            </div>{/*<!-- calendar -->*/}
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <label>Result (GPA)</label>
                            <input type="text" placeholder="4.00/5.00" className="form-control" value={result} onChange={e => onPropertyChange(i, e.target.value, 'result')} /> 
                        </div>
                    </div>
                </div>

                <textarea placeholder={lorem} className="form-control" rows="5" value={detail} onChange={e => onPropertyChange(i, e.target.value, 'detail')} ></textarea>

                <div className="row">
                    <label></label>
                    <span onClick={e=> onDelete(i)} style={{display:'block'}} className="icon remove"><i className="fa fa-times" aria-hidden="true"></i></span>
                </div>
            </React.Fragment>
        );
    }
}

export default EducationBackgroundDetail;