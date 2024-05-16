import {Link, Outlet, NavLink } from 'react-router-dom'
import Footer from './Footer'
import React, { useState, useEffect, useRef } from 'react';

const Master = ({ activeSection }) => {


  useEffect(() => {
    const selectHeader = document.querySelector('#header');
    
    const handleScroll = () => {
      if (selectHeader) {
        window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // =============================================

  const [isActive, setIsActive] = useState(true);
  // Função para alternar a classe quando o ícone é clicado
  const toggleClass = () => {

    document.body.classList.toggle('mobile-nav-active', isActive);
    setIsActive(!isActive); // Inverte o estado atual
  };

  const toggleMenu = () => {

    const selectHeader = document.querySelector('.mobile-nav-active');
    if(selectHeader){
      document.body.classList.toggle('mobile-nav-active', isActive);
      setIsActive(!isActive); // Inverte o estado atual
    }
  
  }

  // ====ativar classe quando secao é apresentada=====================
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section'); // Seleciona todas as seções na página
      let currentActiveSection = 'home'; // Defina o link padrão como 'home'

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;

        // Verifica se a seção está visível na janela
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentActiveSection = section.id;
        }
      });

      setActiveLink(currentActiveSection); // Atualiza o estado com o link ativo
    };

    window.addEventListener('scroll', handleScroll); // Adiciona um listener de scroll

    return () => {
      window.removeEventListener('scroll', handleScroll); // Remove o listener ao desmontar o componente
    };
  }, []); // Executa o efeito somente uma vez ao montar o componente

  // =================================================

  return (
    <>
      

    {/* <!-- ======= Header ======= --> */}
      <header id="header" className="header fixed-top" data-scrollto-offset="0">
        <div className="container-fluid d-flex align-items-center justify-content-between">

          <a href='/moviemaapp/' className="logo d-flex align-items-center scrollto me-auto me-lg-0">
            <h1><img src="/moviemaapp/assets/img/hero/logo_moviema_nav.png" alt="" /></h1>
          </a>

          <nav id="navbar" className="navbar">
            <ul>
              <li><a className={`nav-link scrollto ${activeLink === 'home' ? '' : ''}`} href="/moviemaapp/" onClick={toggleMenu}>Home</a></li>
              <li><a className={`nav-link scrollto ${activeLink === 'about' ? 'active' : ''}`} href="/moviemaapp/#about" onClick={toggleMenu}>Sobre</a></li>
              <li><a className={`nav-link scrollto ${activeLink === 'cta' ? 'active' : ''}`} href="/moviemaapp/#cta" onClick={toggleMenu}>Profissionais</a></li>
              <li><a className={`nav-link scrollto ${activeLink === 'passo' ? 'active' : ''}`} href="/moviemaapp/#passo" onClick={toggleMenu}>Passo a Passo</a></li>
              <li><a className={`nav-link scrollto ${activeLink === 'execucao' ? 'active' : ''}`} href="/moviemaapp/#execucao" onClick={toggleMenu}>Execução</a></li>
              <li><a className={`nav-link scrollto ${activeLink === 'experiencias' ? 'active' : ''}`} href="/moviemaapp/#experiencias" onClick={toggleMenu}>Experiências</a></li>
            </ul>

             <i onClick={toggleClass} className={` ${isActive ? 'bi mobile-nav-toggle d-none bi-list' : 'bi mobile-nav-toggle d-none bi-x'}`}></i>
          </nav>
          <Link className="btn-getstarted scrollto" to='/moviemaapp/projetos'>Projetos</Link>

        </div>
      </header>
      {/* <!-- End Header --> */}


      {/* <Link to='/'>Home</Link>
      <Link to='/projetos'>Projetos</Link> */}

      {/* conteudo */}
      <Outlet />

      <Footer />
        
    </>
  )
}

export default Master