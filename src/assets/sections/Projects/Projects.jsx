import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import Title from "../../components/Title/Title.jsx";
import ImgProject from "../../components/ImgProject/ImgProject.jsx";
import imgSpace from "./images/VRSpaceX.png";
import imgValidador from "./images/validador.png";
import imgCalculadoraPy from "./images/calculadorapy.png";
import imgOneBitFlix from "./images/onebitflix.png";
import imgJogodeDamas from "./images/jogo-de-dama.png";
import './projects.css';

function Projects() {
    const projects = [
        { img: imgSpace, text: "VRSpaceX", github: "https://github.com/victor-rocha1/SpaceX-Bootstrap" },
        { img: imgJogodeDamas, text: "Jogo de Damas - Projeto Acadêmico", github: "https://github.com/victor-rocha1/jogo-de-damas" },
        { img: imgOneBitFlix, text: "OneBitFlix", github: "https://github.com/victor-rocha1/onebitflix" },
        { img: imgValidador, text: "Validador de Email e Senha", github: "https://github.com/victor-rocha1/Validador-de-Email-e-Senha" },
        { img: imgCalculadoraPy, text: "Calculadora Python", github: "https://github.com/victor-rocha1/Calculadora-Python" },
    ];

    return (
        <section className="projects" id="projects">
            <Title text="MEUS " spantext="PROJETOS" />
            <div className="interface">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                    effect="coverflow"
                    centeredSlides={true}
                    slidesPerView="auto"
                    grabCursor={true}
                    autoplay={{ delay: 3000 }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 230, // Destaca o slide ativo
                        modifier: 1, 
                        slideShadows: false, // Tira as sombras laterais
                    }}
                    pagination={{ clickable: true }}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className="project-slide">
                            <ImgProject
                                img={project.img}
                                text={project.text}
                                github={project.github}
                                button={true}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Projects;