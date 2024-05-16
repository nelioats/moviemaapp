import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import dbProjetos from "../data/dbProjetos";
import ProjetoCard from "./ProjetoCard";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Rolagem para o topo ao mudar de rota
  }, [pathname]);

  return null;
};

const Projetos = () => {
  const project_slug = "segunda_edicao_jeips";

  return (
    <>
      <ScrollToTop />
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <div className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Projetos</h2>
            <ol>
              <li>
                <Link to="/moviemaapp/">Home</Link>
              </li>
              <li>Projetos</li>
            </ol>
          </div>
        </div>
      </div>
      {/* <!-- End Breadcrumbs --> */}

      {/* <!-- ======= PROJETOS Section ======= --> */}
      <section id="" className="faq">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
              <div className="content px-xl-5">
                <h3>
                  O ano de 2023 consagrou o Moviema como um{" "}
                  <strong>Projeto de Extensão</strong>
                </h3>
                <p>
                  Passou a atender também os familiares dos estudantes e a
                  comunidade do entorno da escola. Em 15 meses de atividades, o
                  Projeto cresceu, as parcerias aumentaram, assim como a
                  clientela. Festejamos o atendimento de 398 inscritos e
                  atuantes em 20 atividades.
                </p>

                <p></p>
              </div>
            </div>

            <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img">
              <img
                src="/moviemaapp/assets/img/logoprojetos_moviema.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>

          {/* <!-- post list item --> */}

          <div className="col-lg-12 mt-5">
            <div className="row gy-4 posts-list">
              {dbProjetos.map(
                ({ id, project_slug, title, description, image }) => (
                  <ProjetoCard
                    key={id}
                    project_slug={project_slug}
                    title={title}
                    description={description}
                    image={image}
                  />
                )
              )}
            </div>
          </div>
          {/* <!-- End post list item --> */}
        </div>
      </section>
      {/* <!-- End PROJETOS Section --> */}
    </>
  );
};

export default Projetos;
