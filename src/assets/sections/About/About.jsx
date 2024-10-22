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
                    <Title text='Olá, sou Victor' spantext='Rocha' />
                </div>
            </div>
        </section>
    );
}

export default About;