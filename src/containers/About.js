import React, { Component } from 'react';
import Notification from '../components/Notification'

class About extends Component {
    render() {

        return (
            <Notification header="About knocknock"  description={
                <div>
                    <p/>
                    <h2><b>Quiénes somos</b></h2>
                    <p>Somos una empresa comprometida con la búsqueda
    de oportunidades laborales, para los jóvenes
    universitarios. Cumpliremos con este compromiso
    mediante una plataforma innovadora; la cual incluye
    una bolsa de trabajo. Así como, un sistema de
    reclutamiento personalizado y enfocado en las
    necesidades que la empresa tenga, en el momento de
    reclutar a un joven que se encuentra estudiando.</p>
                    <p/>
                    <h2><b>Misión</b></h2>
                    <p>Trabajar todos los días a base de un comportamiento
    ejemplar, regido por principios éticos. Con el fin de
    facilitar el vínculo entre el joven y la empresa.</p>
                    <p/>
                    <h2><b>Visión</b></h2>
                    <p>Convertirse en la empresa con mayor número de
    oportunidades brindadas a jóvenes a nivel nacional.</p>
                </div>
        }/>
        );
    }
}

export default About;