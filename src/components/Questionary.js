import React, { Component } from 'react';

class Questionary extends Component {
    constructor() {
        super();
        this.renderQuestion = this.renderQuestion.bind(this);
        this.questionaryResult = this.questionaryResult.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderQuestion(prop, indexGroup, indexQuestion) {
        const more = `more_${indexGroup}_${indexQuestion}`;
        const less = `less_${indexGroup}_${indexQuestion}`;
        return (
            <div className="form-group row text-centered" key={`rowDiv⎮${indexGroup}⎮${indexQuestion}`}>
                <label htmlFor={`more${indexGroup}`} className="col-sm-5 col-form-label">{prop}</label>
                <input className="col-sm-2 form-check-input" ref={more} type="radio" name={`more${indexGroup}`} value={prop} />
                <input className="col-sm-2 form-check-input" ref={less} type="radio" name={`less${indexGroup}`} value={prop} />
            </div>
        );
    }

    questionaryResult() {
        const questionaryProperties = {};
        Object.keys(this.refs)
            .forEach(key => {
                const [ml, group] = key.split('_');
                const { checked, value } = this.refs[key];
                const moreOrless = checked ? { [ml]: value, } : {};

                questionaryProperties[`Question${group}`] = {
                    ...questionaryProperties[`Question${group}`],
                    ...moreOrless
                };
            });
        return questionaryProperties;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.postQuestionarie(this.props.user.uid, this.questionaryResult());
    }

    render() {
        const questions = [
            ['Persuasivo', 'Gentil', 'Humilde', 'Original'],
            ['Fza de Voluntad', 'Mente Abierta', 'Complaciente', 'Animoso'],
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

        return (
            <div role="tabpanel" className="tab-pane edit-resume section active in" id="questionary">
                <div className="container">
                    <div className="row">
                    </div>
                </div>

                <div className="col-sm-12 col-md-12">
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane fade in active account-info" id="account-info">
                            <div className="section resume-last-updated">
                                <div className="updated-info">
                                <div>
                                    <span className="pull-left">Please fill the following questionaries and send them to us</span><br/>
                                    <span><a href="https://firebasestorage.googleapis.com/v0/b/toc-toc-network.appspot.com/o/questionnaires%2FPrueba%202%20Hoja%20de%20respuestas.xlsx?alt=media&token=71593551-f6a8-4963-9b91-2e967aae0d80" download>Questionaire 1</a></span><br/>
                                    <span><a href="https://firebasestorage.googleapis.com/v0/b/toc-toc-network.appspot.com/o/questionnaires%2FPrueba%202.pdf?alt=media&token=f6b09365-497d-4bfd-a20c-70c736cbb058" download>Questionaire 2</a></span><br/>
                                    <span><a href="https://firebasestorage.googleapis.com/v0/b/toc-toc-network.appspot.com/o/questionnaires%2FPrueba%203.xlsx?alt=media&token=b7108661-12b3-46fe-80b3-efb0135d883a" download>Questionaire 3</a></span><br/><br/>
                                </div>
                                    <span className="pull-left">To complete your submission you have to fill the following questionnaire, the quiestions will be divided in groups of four, please select the word that better describe you and less describe you.</span>
                                </div>
                            </div>{/*<!-- /.resume-last-updated -->*/}
                            <div className="section display-information">
                                <form className="tr-form" onSubmit={ this.handleSubmit }>
                                    {
                                        questions.map((question, i) =>
                                            <div className="col-sm-12" key={ `baseDiv${i}` }>
                                                <div className="form-group">
                                                    <span className="col-sm-offset-5  col-sm-2">More</span>
                                                    <span className="col-sm-2">Less</span>
                                                </div>
                                                {question.map((prop, j) => this.renderQuestion(prop, i, j))}
                                            </div>
                                        )
                                    }
                                    <div className="col-sm-12 section text-center">
                                        <button type="submit" className="btn btn-primary">Submit Questionary</button>
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