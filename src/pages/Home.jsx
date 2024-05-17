import { Link } from "react-router-dom";
import FsLightbox from "fslightbox-react";
import React, { useState, useEffect, useRef } from 'react';


const Home = () => {

  const [toggler, setToggler] = useState(false);
  const [anro, setAnro] = useState(false);




  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      // Verifica se hash não está vazio
      const targetElement = document.querySelector(hash);

      if (targetElement) {
        // Verifica se o elemento foi encontrado
        setTimeout(() => {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }, 100);
      } else {
        console.error(`Elemento não encontrado para o seletor: ${hash}`);
      }
    }
  }, []);

  // add actie no menu apresentado ===========================================

  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      let lastActiveSection = activeSection;

      Object.keys(sectionRefs.current).forEach((sectionId) => {
        const sectionRef = sectionRefs.current[sectionId];
        const { top, bottom } = sectionRef.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;

        if (isVisible) {
          lastActiveSection = sectionId;
        }
      });

      if (lastActiveSection !== activeSection) {
        setActiveSection(lastActiveSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verifica a seção ativa ao carregar a página

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  //===========================================================================

  return (
    <>
    
      <section id="home"className="hero-animated d-flex align-items-center fundo">
        <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative"
         >
            
          <img
            src="/moviemaapp/assets/img/hero/logo_moviema_hero.png"
            className="img-fluid animated"  data-aos="zoom-out"
          />
          <h2>
            Projeto <span>MOVIEMA</span>
          </h2>
          <p>
            Foi pensado como uma forma de acolhimento e formação, visando
            contribuir para fortalecer o protagonismo juvenil, que já tem esta
            vivência através dos Itinerários Formativos (disciplinas eletivas,
            projetos, oficinas, núcleos de estudo), entre outras atividades que
            desenvolvem no ensino médio.
            
          </p>
          <div className="d-flex">
            <Link to="/moviemaapp/projetos" className="btn-get-started scrollto">
              Projetos
            </Link>    
                  <span onClick={() => setAnro(!anro)} className="btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i>Apresentações</span>
              <FsLightbox	toggler={anro} sources={["https://youtu.be/rtllCba8SVg"]}/>     
          
          </div>
        </div>
      </section>
               


      <main id="main">
        {/* <!-- ======= SOBRE Section ======= --> */}
        <section id="about" className="about">
          <div className="container">
            <div className="section-header">
              <h3 className="sobre">Sobre</h3>
            </div>

            <div className="row g-4 g-lg-5">
              <div className="col-lg-5">
                <div className="about-img">
                  <img
                    src="/moviemaapp/assets/img/about.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-7">
                <h4 className="pt-0 pt-lg-5">
                  O Projeto Moviema realiza atividades atendendo com público os
                  estudantes do IEMA Pleno São Luís, professores, demais
                  colaboradores, pais, responsáveis dos estudantes e a
                  comunidade do entorno da escola, no Bairro do Centro de São
                  Luís.{" "}
                </h4>
                <p>
                  As atividades são realizadas entre 17h e 20h, quando finalizam
                  as atividades semanais na escola, e ainda estendendo à
                  participação do público infanto-juvenil no turno matutino.
                </p>
                <p className="fst-italic">
                  As atividades são organizadas dentro dos seguintes eixos
                  estruturantes:
                </p>
                {/* <!-- Tab Content --> */}
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab1">
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>No eixo cultural: </h4>
                    </div>
                    <p>
                      Teatro, Libras, Tambor de Crioula “Quinta das
                      Laranjeiras”, Dança, Inglês Básico e Inglês Intermediário,
                      Fotografia, Música (prática instrumental) e Artes visuais
                      (atividades práticas de desenho e pintura).
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>No eixo científico:</h4>
                    </div>
                    <p>Robótica (iniciante e avançado), Matemática Básica.</p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>No eixo esportivo</h4>
                    </div>
                    <p>
                      Karatê, Futsal feminino, Futsal masculino, Voleibol
                      feminino, Voleibol masculino, Handbol, Natação feminina,
                      Natação Masculina, Arqueria, Basquete masculino, Xadrez,
                      Capoeira
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>No eixo de bem-estar</h4>
                    </div>
                    <p>Hidroginástica e Ioga.</p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>No eixo de empreendedorismo</h4>
                    </div>
                    <p>Suporte e Manutenção de Informática.</p>
                  </div>
                  {/* <!-- End Tab 1 Content --> */}

                  <div className="tab-pane fade show" id="tab2">
                    <p className="fst-italic">
                      Consequuntur inventore voluptates consequatur aut vel et.
                      Eos doloribus expedita. Sapiente atque consequatur minima
                      nihil quae aspernatur quo suscipit voluptatem.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>
                        Repudiandae rerum velit modi et officia quasi facilis
                      </h4>
                    </div>
                    <p>
                      Laborum omnis voluptates voluptas qui sit aliquam
                      blanditiis. Sapiente minima commodi dolorum non eveniet
                      magni quaerat nemo et.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Incidunt non veritatis illum ea ut nisi</h4>
                    </div>
                    <p>
                      Non quod totam minus repellendus autem sint velit. Rerum
                      debitis facere soluta tenetur. Iure molestiae assumenda
                      sunt qui inventore eligendi voluptates nisi at. Dolorem
                      quo tempora. Quia et perferendis.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Omnis ab quia nemo dignissimos rem eum quos..</h4>
                    </div>
                    <p>
                      Eius alias aut cupiditate. Dolor voluptates animi ut
                      blanditiis quos nam. Magnam officia aut ut alias quo
                      explicabo ullam esse. Sunt magnam et dolorem eaque magnam
                      odit enim quaerat. Vero error error voluptatem eum.
                    </p>
                  </div>
                  {/* <!-- End Tab 2 Content --> */}

                  <div className="tab-pane fade show" id="tab3">
                    <p className="fst-italic">
                      Consequuntur inventore voluptates consequatur aut vel et.
                      Eos doloribus expedita. Sapiente atque consequatur minima
                      nihil quae aspernatur quo suscipit voluptatem.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>
                        Repudiandae rerum velit modi et officia quasi facilis
                      </h4>
                    </div>
                    <p>
                      Laborum omnis voluptates voluptas qui sit aliquam
                      blanditiis. Sapiente minima commodi dolorum non eveniet
                      magni quaerat nemo et.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Incidunt non veritatis illum ea ut nisi</h4>
                    </div>
                    <p>
                      Non quod totam minus repellendus autem sint velit. Rerum
                      debitis facere soluta tenetur. Iure molestiae assumenda
                      sunt qui inventore eligendi voluptates nisi at. Dolorem
                      quo tempora. Quia et perferendis.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Omnis ab quia nemo dignissimos rem eum quos..</h4>
                    </div>
                    <p>
                      Eius alias aut cupiditate. Dolor voluptates animi ut
                      blanditiis quos nam. Magnam officia aut ut alias quo
                      explicabo ullam esse. Sunt magnam et dolorem eaque magnam
                      odit enim quaerat. Vero error error voluptatem eum.
                    </p>
                  </div>
                  {/* <!-- End Tab 3 Content --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End SOBRE Section --> */}

        {/* <!-- ======= Profissionais Section ======= --> */}
        <section id="cta" className="cta">
          <div className="container-lg">
            <div className="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
              <h3>Profissionais</h3>
            </div>

            <div className="col-lg-12">
              {/* <!-- Tabs --> */}
              <ul className="nav nav-pills mb-3">
                <li>
                  <a
                    className="nav-link active"
                    data-bs-toggle="pill"
                    href="#prof1"
                  >
                    Segunda
                  </a>
                </li>
                <li>
                  <a className="nav-link" data-bs-toggle="pill" href="#prof2">
                    Terça
                  </a>
                </li>
                <li>
                  <a className="nav-link" data-bs-toggle="pill" href="#prof3">
                    Quarta
                  </a>
                </li>
                <li>
                  <a className="nav-link" data-bs-toggle="pill" href="#prof4">
                    Quinta
                  </a>
                </li>
                <li>
                  <a className="nav-link" data-bs-toggle="pill" href="#prof5">
                    Sexta
                  </a>
                </li>
                <li>
                  <a className="nav-link" data-bs-toggle="pill" href="#prof6">
                    Sábado
                  </a>
                </li>
              </ul>
              {/* <!-- End Tabs --> */}

              {/* <!-- Tab Content --> */}
              <div className="tab-content">
                {/* <!-- Tab 1 Content --> */}
                <div className="tab-pane fade show active" id="prof1">
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead className="bg-light">
                        <tr>
                          <th scope="col">Hora</th>
                          <th scope="col">Atividade</th>
                          <th scope="col">Responsável</th>
                          <th scope="col">Local</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>12h30 às 13h30</td>
                          <td>Xadrez</td>
                          <td>Ulisses Rodrigues</td>
                          <td>Sala técnica 1</td>
                        </tr>
                        <tr>
                          <td>17h às 19h</td>
                          <td>Desenho (alunos da escola e comunidade)</td>
                          <td>Francisca Costa</td>
                          <td>Sala técnica 1</td>
                        </tr>
                        <tr>
                          <td>17h às 18h30</td>
                          <td>Teatro (alunos da escola e comunidade)</td>
                          <td>Kátia Dias e Leandro Gabriel</td>
                          <td>Teatro Souzinha</td>
                        </tr>
                        <tr>
                          <td>17h às 18h30</td>
                          <td>Karatê Iniciante (alunos da escola)</td>
                          <td>Pedro Fernando</td>
                          <td>Auditório 2</td>
                        </tr>
                        <tr>
                          <td>17h às 18h30</td>
                          <td>Futsal feminino (alunos da escola)</td>
                          <td>Nathatya Chrys</td>
                          <td>Quadra Esportiva</td>
                        </tr>
                        <tr>
                          <td>18h30 às 20h</td>
                          <td>Futsal masculino (alunos da escola)</td>
                          <td>Nathatya Chrys</td>
                          <td>Quadra Esportiva</td>
                        </tr>
                        <tr>
                          <td>17h30 às 18h30</td>
                          <td>
                            Inglês Intermediário (alunos da escola e comunidade)
                          </td>
                          <td>Lucinda Mamede</td>
                          <td>Sala 307</td>
                        </tr>
                        <tr>
                          <td>17h às 18h30</td>
                          <td>
                            Matemática Básica (aulas de reforço para alunos da
                            escola)
                          </td>
                          <td>Nonato Pessoa</td>
                          <td>Sala 203</td>
                        </tr>
                        <tr>
                          <td>18h às 20h</td>
                          <td>
                            Tambor de Crioula “Quinta das Laranjeiras.” (alunos
                            da escola e comunidade)
                          </td>
                          <td>Romildo Bigorna</td>
                          <td>Área atrás da quadra</td>
                        </tr>
                        <tr>
                          <td>18h30 às 20h</td>
                          <td>
                            Hidroginástica para os pais e comunidade – Turma 2
                          </td>
                          <td>Pedro Fernando</td>
                          <td>Piscina</td>
                        </tr>
                        <tr>
                          <td>17h às 18h30</td>
                          <td>
                            Suporte e Manutenção em Informática (alunos da
                            escola)
                          </td>
                          <td>Wanderson Aguiar</td>
                          <td>Laboratório de Robótica</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <!-- End Tab 1 Content --> */}

                {/* <!-- Tab 2 Content --> */}
                <div className="tab-pane fade show" id="prof2">
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead className="bg-light">
                        <tr>
                          <th scope="col">Hora</th>
                          <th scope="col">Atividade</th>
                          <th scope="col">Responsável</th>
                          <th scope="col">Local</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>17h30 às 19h</td>
                          <td>Robótica (alunos da escola)</td>
                          <td>Wanderson Aguiar</td>
                          <td>Laboratório de Robótica</td>
                        </tr>
                        <tr>
                          <td>17h às 18h30</td>
                          <td>Voleibol feminino (alunos da escola)</td>
                          <td>Paulo Aguiar</td>
                          <td>Quadra Esportiva</td>
                        </tr>
                        <tr>
                          <td>18h30 às 20h</td>
                          <td>Voleibol masculino (alunos da escola)</td>
                          <td>Paulo Aguiar</td>
                          <td>Quadra Esportiva</td>
                        </tr>
                        <tr>
                          <td>17h às 18h30</td>
                          <td>Natação feminina (alunos da escola)</td>
                          <td>Leonardo</td>
                          <td>Piscina</td>
                        </tr>
                        <tr>
                          <td>18h30 às 20h</td>
                          <td>Natação Masculina (alunos da escola)</td>
                          <td>Leonardo</td>
                          <td>Piscina</td>
                        </tr>
                        <tr>
                          <td>17h às 18h30</td>
                          <td>
                            Dança (ritmos e coreografias) (alunos da escola)
                          </td>
                          <td>Cristiano Rubi e Izaura Maira</td>
                          <td>Sala de dança</td>
                        </tr>
                        <tr>
                          <td>8h30 às 10h</td>
                          <td>Karatê (comunidade, público externo)</td>
                          <td>Pedro Fernando</td>
                          <td>Sala de Dança</td>
                        </tr>
                        <tr>
                          <td>17h às 18h30</td>
                          <td>Arqueria (alunos da escola)</td>
                          <td>Davi Coutinho</td>
                          <td>Campo de Futebol</td>
                        </tr>
                        <tr>
                          <td>18h30 às 20h</td>
                          <td>Arqueria (alunos da escola)</td>
                          <td>Davi Coutinho</td>
                          <td>Campo de Futebol</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <!-- End Tab 2 Content --> */}

                {/* <!-- Tab 3 Content --> */}
                <div className="tab-pane fade show" id="prof3">
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead className="bg-light">
                        <tr>
                          <th scope="col">Hora</th>
                          <th scope="col">Atividade</th>
                          <th scope="col">Responsável</th>
                          <th scope="col">Local</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>12h30 às 13h30</td>
                          <td>Xadrez (alunos da escola)</td>
                          <td>Ulisses Rodrigues</td>
                          <td>Sala técnica 1</td>
                        </tr>
                        <tr>
                          <td>17h às 18h30</td>
                          <td>Teatro (alunos da escola e comunidade)</td>
                          <td>Kátia Dias e Leandro Gabriel</td>
                          <td>Teatro Souzinha</td>
                        </tr>
                        <tr>
                          <td>17h às 18h30</td>
                          <td>Karatê Iniciante (alunos da escola)</td>
                          <td>Pedro Fernando</td>
                          <td>Auditório 2</td>
                        </tr>
                        <tr>
                          <td>17h às 18h</td>
                          <td>Futsal feminino (alunos da escola)</td>
                          <td>Nathatya Chrys</td>
                          <td>Quadra Esportiva</td>
                        </tr>
                        <tr>
                          <td>18h às 19h</td>
                          <td>Futsal masculino (alunos da escola)</td>
                          <td>Nathatya Chrys</td>
                          <td>Quadra Esportiva</td>
                        </tr>
                        <tr>
                          <td>17h às 18h30</td>
                          <td>
                            Dança (ritmos e coreografias) com os pais e
                            comunidade
                          </td>
                          <td>Cristiano Rubi e Izaura Maira</td>
                          <td>Sala de dança</td>
                        </tr>
                        <tr>
                          <td>16h30 às 17h30</td>
                          <td>
                            Natação (Iniciantes) – Servidores, pais e comunidade
                          </td>
                          <td>Leonardo</td>
                          <td>Piscina</td>
                        </tr>
                        <tr>
                          <td>17h30 às 18h30</td>
                          <td>
                            Natação (treinos) – Servidores, pais e comunidade
                          </td>
                          <td>Leonardo</td>
                          <td>Piscina</td>
                        </tr>
                        <tr>
                          <td>18h30 às 20h</td>
                          <td>
                            Hidroginástica para os pais e comunidade – Turma 1
                          </td>
                          <td>Pedro Fernando</td>
                          <td>Piscina</td>
                        </tr>
                        <tr>
                          <td>17h20 às 19h30</td>
                          <td>Música (alunos da escola e comunidade)</td>
                          <td>Romildo Bigorna</td>
                          <td>
                            Sala de Capoeira, prédio de trás do pátio interno
                          </td>
                        </tr>
                        <tr>
                          <td>17h30 às 18h30</td>
                          <td>
                            Inglês Intermediário (alunos da escola e comunidade)
                          </td>
                          <td>Lucinda Mamede</td>
                          <td>Sala 307</td>
                        </tr>
                        <tr>
                          <td>17h30 às 18h30</td>
                          <td>Inglês Básico (alunos da escola e comunidade)</td>
                          <td>Antônia Rocha</td>
                          <td>Sala 205</td>
                        </tr>
                        <tr>
                          <td>17h30 às 18h30</td>
                          <td>Libras (alunos e comunidade)</td>
                          <td>Luanne Costa</td>
                          <td>Sala 203</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <!-- End Tab 3 Content --> */}

                {/* <!-- Tab 4 Content --> */}
                <div className="tab-pane fade show" id="prof4">
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead className="bg-light">
                        <tr>
                          <th scope="col">Hora</th>
                          <th scope="col">Atividade</th>
                          <th scope="col">Responsável</th>
                          <th scope="col">Local</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>17h30 às 19h</td>
                          <td>Robótica (alunos da escola)</td>
                          <td>Wanderson Aguiar</td>
                          <td>Laboratório de Robótica</td>
                        </tr>
                        <tr>
                          <td>8h30 às 10h</td>
                          <td>Karatê (comunidade, público externo)</td>
                          <td>Pedro Fernando</td>
                          <td>Sala de Dança</td>
                        </tr>
                        <tr>
                          <td>9h às 10h30</td>
                          <td>Capoeira (comunidade, público externo)</td>
                          <td>Michel Lopes</td>
                          <td>
                            Sala de Capoeira, prédio de trás do pátio interno
                          </td>
                        </tr>
                        <tr>
                          <td>17h às 19h</td>
                          <td>Capoeira (alunos da escola)</td>
                          <td>Michel Lopes</td>
                          <td>
                            Sala de Capoeira, prédio de trás do pátio interno
                          </td>
                        </tr>
                        <tr>
                          <td>17h às 18h30</td>
                          <td>Voleibol feminino (alunos da escola)</td>
                          <td>Paulo Rogério</td>
                          <td>Quadra Esportiva</td>
                        </tr>
                        <tr>
                          <td>18h30 às 20h</td>
                          <td>Basquete masculino (alunos da escola)</td>
                          <td>Paulo Rogério</td>
                          <td>Quadra Esportiva</td>
                        </tr>
                        <tr>
                          <td>17h às 18h30</td>
                          <td>Natação feminina (alunos da escola)</td>
                          <td>Leonardo</td>
                          <td>Piscina</td>
                        </tr>
                        <tr>
                          <td>18h30 às 20h</td>
                          <td>Natação Masculina (alunos da escola)</td>
                          <td>Leonardo</td>
                          <td>Piscina</td>
                        </tr>
                        <tr>
                          <td>17h às 18h30</td>
                          <td>Dança (ritmos e coreografias)</td>
                          <td>Cristiano Rubi e Izaura Maira</td>
                          <td>Sala de dança</td>
                        </tr>
                        <tr>
                          <td>17h às 18h30</td>
                          <td>Arqueria (alunos da escola)</td>
                          <td>Davi Coutinho</td>
                          <td>Campo de Futebol</td>
                        </tr>
                        <tr>
                          <td>18h30 às 20h</td>
                          <td>Arqueria (alunos da escola)</td>
                          <td>Davi Coutinho</td>
                          <td>Campo de Futebol</td>
                        </tr>
                        <tr>
                          <td>18h às 19h</td>
                          <td>Ioga (pais e comunidade)</td>
                          <td>Kátia Dias</td>
                          <td>Auditório 2</td>
                        </tr>
                        <tr>
                          <td>17h20 às 19h30</td>
                          <td>Música (alunos da escola e comunidade)</td>
                          <td>Romildo Bigorna</td>
                          <td>Sala de Serviços Jurídicos</td>
                        </tr>
                        <tr>
                          <td>17h30 às 18h30</td>
                          <td>Libras (alunos e comunidade)</td>
                          <td>Luanne Costa</td>
                          <td>Sala 203</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <!-- End Tab 4 Content --> */}

                {/* <!-- Tab 5 Content --> */}
                <div className="tab-pane fade show" id="prof5">
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead className="bg-light">
                        <tr>
                          <th scope="col">Hora</th>
                          <th scope="col">Atividade</th>
                          <th scope="col">Responsável</th>
                          <th scope="col">Local</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>17h às 18h30</td>
                          <td>Handbol Feminino (alunos da escola)</td>
                          <td>Mateus Cantanhede da Fac Estácio</td>
                          <td>Quadra</td>
                        </tr>
                        <tr>
                          <td>18h30 às 20h</td>
                          <td>Handbol Masculino (alunos da escola)</td>
                          <td>Mateus Cantanhede da Fac Estácio</td>
                          <td>Quadra</td>
                        </tr>
                        <tr>
                          <td>18h às 19h30</td>
                          <td>
                            Hidroginástica para os pais e comunidade – Turma 2
                          </td>
                          <td>Pedro Fernando</td>
                          <td>Piscina</td>
                        </tr>
                        <tr>
                          <td>17h30 às 18h30</td>
                          <td>Libras (alunos e comunidade)</td>
                          <td>Luanne Costa</td>
                          <td>Sala 203</td>
                        </tr>
                        <tr>
                          <td>17h30 às 18h30</td>
                          <td>Inglês Básico (alunos da escola e comunidade)</td>
                          <td>Antônia Rocha</td>
                          <td>Sala 205</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <!-- End Tab 5 Content --> */}

                {/* <!--  Tab 6 Content --> */}
                <div className="tab-pane fade show" id="prof6">
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead className="bg-light">
                        <tr>
                          <th scope="col">Hora</th>
                          <th scope="col">Atividade</th>
                          <th scope="col">Responsável</th>
                          <th scope="col">Local</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>08h às 12h</td>
                          <td>
                            Liga Universitária de Robótica (alunos egressos)
                          </td>
                          <td>Wanderson Aguiar</td>
                          <td>Laboratório de Robótica</td>
                        </tr>
                        <tr>
                          <td>13h às 15h30</td>
                          <td>
                            Introdução à Programação e Robótica (para alunos do
                            E. Fundamental II)
                          </td>
                          <td>Wanderson Aguiar</td>
                          <td>Laboratório de Robótica</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <!-- End Tab 6 Content --> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Profissionais Section --> */}

        {/* <!-- ======= Passo a Passo Section ======= --> */}
        <section id="passo" className="features">
          <div className="container">
            <div className="section-header">
              <h3 className="sobre">Passo a Passo</h3>
            </div>

            <ul className="nav nav-tabs row gy-6 d-flex">
              <li className="nav-item col-6 col-md-6 col-lg-6">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-1"
                >
                  <i className="bi bi-bricks color-cyan"></i>
                  <h4>Criação</h4>
                </a>
              </li>
              {/* <!-- End Tab 1 Nav --> */}

              <li className="nav-item col-6 col-md-6 col-lg-6">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-2"
                >
                  <i className="bi bi-search color-teal"></i>
                  <h4>Visão</h4>
                </a>
              </li>
              {/* <!-- End Tab 3 Nav --> */}
            </ul>

            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <div className="row gy-4">
                  <div className="col-lg-8 order-2 order-lg-1">
                    <h3>Criação</h3>
                    <p className="fst-italic">
                      O Projeto MovIEMA foi criado em setembro de 2022, na
                      intenção de potencializar a utilização do amplo espaço
                      físico da escola IEMA Pleno São Luís e atenuar as tensões
                      e sintomas de ansiedade dos alunos pós pandemia, causada
                      pelo vírus Covid-19.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circle-fill"></i> O Projeto
                        atua após as 17h, quando finalizam as atividades
                        semanais na escola, dentro do modelo IEMA Pleno.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 order-1 order-lg-2 text-center">
                    <img src="/moviemaapp/assets/img/2.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* <!-- End Tab Content 1 --> */}

              <div className="tab-pane" id="tab-2">
                <div className="row gy-4">
                  <div className="col-lg-8 order-2 order-lg-1">
                    <h3>Visão</h3>
                    <p>
                      O Projeto visa contribuir para fortalecer o protagonismo
                      juvenil, que já tem esta vivência nos Itinerários
                      Formativos (disciplinas eletivas, projeto de Vida, Base
                      Técnica, clubes, núcleos de estudo), entre outras
                      atividades, que os estudantes poderão escolher no Ensino
                      Médio.
                    </p>
                  </div>
                  <div className="col-lg-4 order-1 order-lg-2 text-center">
                    <img src="/moviemaapp/assets/img/1.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* <!-- End Tab Content 2 --> */}
            </div>
          </div>
        </section>
        {/* <!-- End Passo a Passo Section --> */}

        {/* <!-- ======= EXECUSSÃO Section ======= --> */}
        <section id="execucao" className="cta">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first mb-3">
                <h3>EXECUÇÃO</h3>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <img
                  src="/moviemaapp/assets/img/exec01.jpg"
                  className="img-fluid"
                  alt="Imagem 1"
                />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <p className="fs-5">
                  Parte do desenvolvimento de ações formativas envolvem a
                  Robótica, o empreendedorismo, Ensino De Línguas, formação de
                  times em diferentes modalidades esportivas e ações formativas
                  nas quatro linguagens artísticas (dança, artes visuais, teatro
                  e música).
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 order-md-first d-flex align-items-center">
                <p className="fs-5">
                  São atividades importantes para a formação integral dos
                  alunos, trazendo uma gama de ações inovadoras que amparam a
                  aplicabilidade da Arte e os preceitos filosóficos e
                  terapêuticos do esporte, ao incluir uma infinidade de
                  atividades físico-motoras e artístico-culturais no dia a dia
                  escolar, valorizando, especialmente, as expressões regionais e
                  locais de forma a promover o desenvolvimento cultural, físico,
                  e mental dos alunos e do prazer de trabalhar em equipe.
                </p>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <img
                  src="/moviemaapp/assets/img/exec02.jpg"
                  className="img-fluid"
                  alt="Imagem 2"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End EXECUSSÃO Section --> */}

        {/* <!-- ======= EXPERIÊNCIAS Section ======= --> */}
        <section id="experiencias" className="onfocus">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-lg-6 video-play position-relative">
              <span onClick={() => setToggler(!toggler)} className="glightbox play-btn"></span>
              <FsLightbox	toggler={toggler} sources={["https://youtu.be/ZfjyrBSQGm0"]}/>
              </div>
              <div className="col-lg-6">
                <div className="content d-flex flex-column justify-content-center h-100">
                  <h3>EXPERIÊNCIAS</h3>
                  <p className="fst-italic">
                    O Moviema desenvolve a culminância de suas atividades no
                    final de cada ano, executando os Jogos Escolares do IEMA
                    Pleno São Luís - JEIPS, evento que reúne competições
                    esportivas das modalidades realizadas no Projeto.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle"></i> Entrevista
                      concedida à Rádio Timbira, sobre o JEIPS e o Moviema em
                      2022:
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i> Dentre as
                      atividades, o JEIPS organiza também uma gincana cultural
                      que arrecada alimentos não perecíveis para doação de
                      cestas natalinas para as famílias carentes da comunidade
                      escolar.
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i> O trabalho e afinco
                      dos coordenadores, professores, voluntários e alunos já
                      rendeu bons frutos, como o prêmio de reconhecimento da
                      Instituição de Ensino no incentivo ao esporte, como
                      destaque no ano de 2022, promovido pela FEMADE e FAME.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End EXPERIÊNCIAS Section --> */}

        {/* <!-- ======= Clients Section ======= --> */}
        <section id="clients" className="clients mt-5">
          <div className="container">
            <div className="section-header mt-4 mb-5">
              <h3 className="">INSTITUIÇÕES PARCEIRAS</h3>
            </div>

            <div className="clients-slider swiper">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-6">
                <div className="col-6 col-sm-6 col-lg">
                  <img
                    src="/moviemaapp/assets/img/parceiros/ufma.jpg"
                    className="img-fluid square-img"
                    alt="Imagem 1"
                  />
                </div>
                <div className="col-6 col-sm-6 col-lg">
                  <img
                    src="/moviemaapp/assets/img/parceiros/uema.jpg"
                    className="img-fluid square-img"
                    alt="Imagem 2"
                  />
                </div>
                <div className="col-6 col-sm-6 col-lg">
                  <img
                    src="/moviemaapp/assets/img/parceiros/uni.jpg"
                    className="img-fluid square-img"
                    alt="Imagem 3"
                  />
                </div>
                <div className="col-6 col-sm-6 col-lg">
                  <img
                    src="/moviemaapp/assets/img/parceiros/arqueria.jpg"
                    className="img-fluid square-img"
                    alt="Imagem 4"
                  />
                </div>
                <div className="col-6 col-sm-6 col-lg">
                  <img
                    src="/moviemaapp/assets/img/parceiros/gdam.jpg"
                    className="img-fluid square-img"
                    alt="Imagem 5"
                  />
                </div>
                <div className="col-6 col-sm-6 col-lg">
                  <img
                    src="/moviemaapp/assets/img/parceiros/academia_futebol.jpg"
                    className="img-fluid square-img"
                    alt="Imagem 5"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Clients Section --> */}
        


      </main>

      {/* <!-- End #main --> */}
    </>
  );
};

export default Home;
