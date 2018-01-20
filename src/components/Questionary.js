import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import store from '../store';

class Questionary extends Component {
    constructor() {
        super();
        this.renderQuestion = this.renderQuestion.bind(this);
    }

    renderQuestion(prop, indexGroup, indexQuestion) {
        const more = `inpMore_${indexGroup}_${indexQuestion}`;
        const less = `inpLess_${indexGroup}_${indexQuestion}`;
        return (
            <div className="form-group row text-centered" key={`rowDiv⎮${indexGroup}⎮${indexQuestion}`}>
                <label htmlFor={`more${indexGroup}`} className="col-sm-5 col-form-label">{prop}</label>
                <input className="col-sm-2 form-check-input" ref={more} type="radio" name={`more${indexGroup}`} value={prop} />
                <input className="col-sm-2 form-check-input" ref={less} type="radio" name={`less${indexGroup}`} value={prop} />
            </div>
        );
    }

    render() {
        const questions = [
            ['Persuasivo', 'Gentil', 'Humilde', 'Original'],
            ['Fza de Voluntad', 'Mente Abierte', 'Complaciente', 'Animoso'],
            ['Agresivo', 'Alma de la Fiesta', 'Comodino', 'Temeroso'],
            ['Confiado', 'Simpatizador', 'Tolerante', 'Afirmativo'],
            ['Agradable', 'Temeroso de Dios', 'Tenaz', 'Atractivo'],
            ['Ecuanime', 'Preciso', 'Nervioso', 'Jovial'],
            ['Cauteloso', 'Determinado', 'Convincente', 'Bonachon'],
            ['Disciplinado', 'Generoso', 'Animoso', 'Persistente'],
            ['Docil', 'Atrevido', 'Leal', 'Encantador'],
            ['Competitivo', 'Alegre', 'Considerado', 'Armonioso'],
            ['Dispuesto', 'Deseoso', 'Consecuente', 'Entusiasta'],
            ['Admirable', 'Bondadoso', 'Resignado', 'Caracter Firme'],

            ['Obediente', 'Quisquilloso', 'Inconquistable', 'Jugueton'],
            ['Aventurero', 'Receptivo', 'Cordial', 'Moderado'],
            ['Respetuoso', 'Emprendedor', 'Optimista', 'Servicial'],
            ['Indulgente', 'Esteta', 'Vigoroso', 'Sociable'],
            ['Valiente', 'Inspirador', 'Sumiso', 'Timido'],
            ['Parlachin', 'Controlado', 'Convencional', 'Decisivo'],
            ['Adaptable', 'Disputador', 'Indiferente', 'Sangre Liviana'],
            ['Cohibido', 'Exacto', 'Franco', 'Buen Compañero'],
            ['Amiguero', 'Paciente', 'Confianza en si mismo', 'Mesurado para hablar'],
            ['Diplomatico', 'Audaz', 'Refinado', 'Satisfecho'],
            ['Comforme', 'Confiable', 'Pacifico', 'Positivo'],
            ['Inquieto', 'Popular', 'Buen Vecino', 'Devoto']
        ];

        const pushSample = (e) => { e.preventDefault(); console.log('todos/german', this.refs.questionary); };

        return (
            <div className="tr-profile section-padding" >
                <div className="container">
                    <div className="row">
                    </div>
                </div>

                <div className="col-sm-12 col-md-12">
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane fade in active account-info" id="account-info">
                            <div className="section resume-last-updated">
                                <div className="updated-info">
                                    <span className="pull-left">To complete your submission you have to fill the following questionnaire, the quiestions will be divided in groups of four, please select the word that better describe you and less describe you.</span>

                                </div>
                            </div>{/*<!-- /.resume-last-updated -->*/}
                            <div className="section display-information">
                                <form>
                                    {
                                        questions.map((question, i) =>
                                            <div className="col-sm-6" key={`baseDiv${i}`}>
                                                <div className="form-group">
                                                    <span className="col-sm-offset-5  col-sm-2">More</span>
                                                    <span className="col-sm-2">Less</span>
                                                </div>
                                                {question.map((prop, j) => this.renderQuestion(prop, i, j))}
                                            </div>
                                        )
                                    }
                                    <div className="col-sm-12 section text-center">
                                        <button onClick={e => pushSample(e)}>
                                            Add
                                    </button>
                                        <Link to="/" className="btn btn-primary">Complete Registration</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Questionary;