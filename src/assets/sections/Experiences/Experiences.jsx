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
                                    <li>Manutenção de sistemas de trânsito de Minas Gerais usando o framework Cake PHP</li>
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