import Title from '../../components/Title/Title';
import './experiences.css';
import logo_prodemge from "../../../../public/images/logo_prodemge.png"

function Experiences() {
    return (
        <>
            <section className="experiências" id='experiences'>
                <br /><br /><Title text="Minha " spantext="Experiência" /> <br />
                <div className="interface">
                    <div className="timeline">
                        <div className="card-content">
                            <img src={logo_prodemge} alt="logo_prodemge" />
                            <div className="text-content">
                                <small className='span1'>2024 - <span className='span2'>atual</span></small>
                                <h5>Estagiário - <span>Prodemge</span></h5>
                                <ul>
                                    <li>Uso de Metodologias Ágeis: Scrum e Kanban</li>
                                    <li>Escrita de Histórias de usuário e organização estruturada no Git – utilizadas como documentação viva dos projetos.
                                    </li>
                                    <li>Documentação técnica completa do Sistema de Gestão de Correspondências, aplicando diagramas como ER e Fluxograma.
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Experiences;