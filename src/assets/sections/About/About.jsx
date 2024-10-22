import './about.css';
import avatar from '../../../../public/images/logo.png';
import Title from '../../components/Title';

function About() {
    return (
        <section className='about'>
            <div className="interface">
                <div className="about2">
                    <div className="avatar">
                        <img src={avatar} alt="Avatar de Victor" />
                    </div>
                    {/* Exibindo o título e a lista separados */}
                    <div className="about-content">
                        <Title text='Victor' spantext='Rocha' />
                        <p className="desc">Apaixonado por codificação</p>
                        <ul className='description-list'>
                            <li>Desenvolvedor Frontend</li>
                            <li>Estudante do 4° período de Análise e Desenvolvimento de Sistemas</li>
                            <li>Estudante de diversos cursos de tecnologia</li>
                            <li>Estagiário na Prodemge</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;