import './about.css';
import avatar from '../../../../public/images/avatar.jpg';
import Title from '../../components/Title/Title';
import Icons from '../../components/Icons/Icons';

function About() {
    const socialIcons = [
        { name: 'instagram', link: 'https://www.instagram.com/victor.rocha77/' },
        { name: 'github', link: 'https://www.github.com/victor-rocha1' },
    ];

    return (
        <section className='about' id='about'>
            <div className="interface">
                <div className="about2">
                    <div className="avatar">
                        <img src={avatar} alt="Avatar de Victor" />
                    </div>
                    <div className="about-content">
                        <Title text='Victor' spantext='Rocha' />
                        <p className="desc">Apaixonado por codificação</p>
                        <ul className='description-list'>
                            <li>Desenvolvedor Front End</li>
                            <li>Estudante do 4° período de Análise e Desenvolvimento de Sistemas</li>
                            <li>Estudante de diversos cursos de tecnologia</li>
                            <li>Estagiário na Prodemge</li>
                        </ul>
                        <br />
                        <br />
                        <Icons
                            icons={socialIcons} 
                            size="2rem" 
                            alignment="flex-start" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;