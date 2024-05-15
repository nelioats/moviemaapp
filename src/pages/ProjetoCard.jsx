import React from "react";
import { Link } from "react-router-dom";

const ProjetoCard = ({ project_slug, title, description, image }) => {
  return (
    <>
      <div className="col-lg-4">
        <article className="d-flex flex-column">
          <div className="post-img">
            <img src={image} alt="" className="img-fluid" />
          </div>

          <h2 className="title">
            <Link to={`/moviemaapp/projeto/${project_slug}`}>{title}</Link>
          </h2>

          <div className="content">
            <p>{description}</p>
          </div>

          <div className="read-more mt-auto">
            <Link to={`/moviemaapp/projeto/${project_slug}`}>Saber mais</Link>
          </div>
        </article>
      </div>
    </>
  );
};

export default ProjetoCard;
