import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import dbProjetos from "../data/dbProjetos";

import Slideshow from "./components/Slideshow";

const ProjetoDescricao = () => {
  const { project_slug } = useParams();
  const [projeto, setProjeto] = useState(null);



  useEffect(() => {
    // Filtrar o artigo pelo slug quando o componente for montado
    const filtrarProjeto = dbProjetos.find(
      (item) => item.project_slug === project_slug
    );

    setProjeto(filtrarProjeto);
  }, [project_slug]);

  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>{projeto ? projeto.title : "Carregando..."}</h2>
            <ol>
              <li>
                <Link to="/moviemaapp/projetos">Projetos</Link>
              </li>
              <li>{projeto ? projeto.title : "Carregando..."}</li>
            </ol>
          </div>
        </div>
      </div>

      {/* content */}
      {projeto ? (
        <section id="" className="faq">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="portfolio-details-slider swiper">
                  <div className="swiper-wrapper align-items-center">
                    <div className="swiper-slide">
                      {projeto.image_galery.length > 0 ? 
                      <Slideshow images={projeto.image_galery} interval={5000} /> 
                      :
                      <h3>Ops, sem fotos do evento!</h3>  
                    }
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="portfolio-description">
                  <h2>{projeto ? projeto.title : "Carregando..."}</h2>
                  <div dangerouslySetInnerHTML={{ __html: projeto.description_complete }} />
              </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p>Carregando...</p>
      )}
      {/* fim content */}
    </>
  );
};

export default ProjetoDescricao;
