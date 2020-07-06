import React from 'react'
import { Link } from 'react-router-dom'

import "./PageNotFound.scss";
const PageNotFound = () => {
  return (
    <article className="pageNotFound" data-testid="pageNotFound">
      <section className="pageNotFound__bigText">
        404
      </section>

      <section className="pageNotFound__smallText">
        <div> Ops! </div>
        <div> A página não existe ou não está disponível </div>
      </section>

      <section className="pageNotFound__button">
        <Link to="/">
          <button type="button">
            Voltar para página inicial
          </button>
        </Link>
      </section>      
    </article>
  )
}

export default PageNotFound;


