import Title from "../../components/Title/Title";
import "./skills.css";
import git from "../../../../public/images/git.png";
import github from "../../../../public/images/github.png";
import js from "../../../../public/images/js.png";
import html from "../../../../public/images/html.png";
import css from "../../../../public/images/css.png";
import python from "../../../../public/images/python.png";
import postgres from "../../../../public/images/postgres.png";
import sql from "../../../../public/images/sql.png";
import php from "../../../../public/images/php.png";
import laravel from "../../../../public/images/laravel.png";

function Skills() {
    return (
        <section className="skills" id="skills">
            <Title text="Habilidades" spantext="Gerais" />
            <br />
            <div className="interface">
                <div className="flex">
                    <div className="box">
                        <i className="bi bi-laptop"></i>
                        <h2>Front End</h2>
                        <p>
                            Desenvolvo aplicações usando <span>JavaScript</span> como base, <span>HTML5</span> e <span>CSS3</span> para marcação, e a Biblioteca <span>React </span> para uma programação mais organizada e eficiente..
                        </p>
                    </div>

                    <div className="box">
                        <i className="bi bi-code-square"></i>
                        <h2>Back End</h2>
                        <p>
                            Tenho experiência acadêmica com <span>Python</span> e banco de dados <span>PostgreSQL</span>. No âmbito profissional, trabalhei com <span>PHP</span>, utilizando o framework <span>CakePHP</span> em projetos na <span>Prodemge</span>.
                        </p>
                    </div>

                    <div className="box">
                        <i className="bi bi-clipboard-data"></i>
                        <h2>Metodologias Ágeis</h2>
                        <p>
                            Tenho conhecimento nas metodologias <span>Scrum</span> e <span>Kanban</span>, aplicando conceitos como <span>Análise de Requisitos</span>, <span>Histórias de Usuário</span> e o uso do <span>GitLab</span> para gestão e versionamento de código.
                        </p>
                    </div>
                </div>
            </div>

            <div className="icons">
                <div className="icons">
                    <img src={git} />
                    <img src={github} alt="logo-github" />
                    <img src={js} alt="logo-js" />
                    <img src={html} alt="logo-html" />
                    <img src={css} alt="logo-css" />
                    <img src={python} alt="logo-python" />
                    <img src={postgres} alt="logo-postgres" />
                    <img src={sql} alt="logo-sql" />
                    <img src={php} alt="logo-php" />
                    <img src={laravel} alt="logo-laravel" />
                </div>
            </div>
        </section>
    );
}

export default Skills;