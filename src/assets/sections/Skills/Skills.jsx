import Title from "../../components/Title/Title";
import "./skills.css";

function Skills() {
    return (
        <section className="skills">
            <Title text="Minhas" spantext="Habilidades" />
            <br />
            <div className="interface">
                <div className="flex">
                    <div className="box">
                        <i className="bi bi-laptop"></i>
                        <h2>FRONT END</h2>
                        <p>
                            Desenvolvo aplicações usando <span>JavaScript</span> como base, <span>HTML5</span> e <span>CSS3</span> para marcação, e a Biblioteca <span>React </span> para uma programação mais organizada e eficiente..
                        </p>
                    </div>

                    <div className="box">
                        <i className="bi bi-code-square"></i>
                        <h2>BACK END</h2>
                        <p>
                            Possuo experiência acadêmica em <span>Python</span>, com foco na resolução de exercícios e problemas básicos. Além disso, tenho experiência profissional com <span>PHP</span>, utilizando o framework <span>Laravel</span> em projetos na <span>Prodemge</span>.
                        </p>
                    </div>

                    <div className="box">
                        <i className="bi bi-database"></i>
                        <h2>DADOS</h2>
                        <p>
                            Conhecimentos na <span>Linguagem SQL</span> e <span>Banco de Dados Relacional</span> usando o Software <span>PostgreSQL</span>, usando comandos simples para consultas em Tabelas Relacionais.
                        </p>
                    </div>
                </div>
            </div>

            <div className="icons">
                <img src="/images/git.png" alt="logo-git" />
                <img src="/images/github.png" alt="logo-github" />
                <img src="/images/js.png" alt="logo-js" />
                <img src="/images/html.png" alt="logo-html" />
                <img src="/images/css.png" alt="logo-css" />
                <img src="/images/python.png" alt="logo-python" />
                <img src="/images/postgres.png" alt="logo-postgres" />
                <img src="/images/sql.png" alt="logo-sql" />
                <img src="/images/php.png" alt="logo-php" />
                <img src="/images/laravel.png" alt="logo-laravel" />
            </div>
        </section>
    );
}

export default Skills;