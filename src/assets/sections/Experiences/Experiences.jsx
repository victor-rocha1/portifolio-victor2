import Title from '../../components/Title/Title';
import './experiences.css';

function Experiences() {
    return (
        <>
            <section className="experiências">
                <br /><br /><Title text="MINHA " spantext="EXPERIÊNCIA" /> <br />
                <div className="interface">
                    <div className="timeline">
                        <div className="card-content">
                            <img src="/images/logo_prodemge.png" alt="logo_prodemge" />
                            <div className="text-content">
                                <small className='span1'>2024 - <span className='span2'>atual</span></small>
                                <h5>Estagiário - <span>Prodemge</span></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ea debitis officia porro, amet nobis illo magni, corrupti provident deserunt facilis nam!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Experiences;