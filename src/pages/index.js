import React from "react"

import SEO from "../components/seo"
import ReactLogo from "../images/react.png"
import ReduxLogo from "../images/redux.png"
import GraphQlLogo from "../images/graphql.png"
import StrapiLogo from "../images/strapi.svg"
import Web from "../images/web-dev.png"

import threeChar from "../images/threeChar.png"
import men from '../images/men.png';

import Slider from "../components/Slider/Slider"

import "../styles/index.css"

const techLogos = [ReactLogo, ReduxLogo, GraphQlLogo, StrapiLogo]

const scrollToTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
}

const IndexPage = () => (
  <div className="global-wrapper">
    <SEO title="Home" />
    <div className="gradient-section">
      <nav className="navbar">
        <div className="container">
          <div className="navbar__container__logo">Rudos.Tech</div>
          <div className="navbar__container__collapse">
            {/* <div className="navbar__container__collapse__links">
              <div className="navbar__container__collapse__links--link">
                Технологии
              </div>
              <div className="navbar__container__collapse__links--link">
                Наши работы
              </div>
              <div className="navbar__container__collapse__links--link">
                <span>ENG</span>/<span>RUS</span>
              </div>
            </div> */}
          </div>
        </div>
      </nav>
      <div className="intro-title">
        <div className="container">
          <div>
            <h1 className="intro-title__heading">
              Мы создаем современные <span>веб приложения</span>
            </h1>
            <button className="button button-primary button-contact">
              Связаться с нами
            </button>
          </div>
        </div>
        <div className="technologies">
          <div className="container">
            <div className="tech-title">
              <h6>
                Наш основной стек - это React, Redux, Gatsby.JS, GraphQL,
                Strapi, Flask, и другие технологии.
              </h6>
            </div>
            <div className="tech-list">
              {techLogos.map(logo => (
                <div
                  className="tech-list__item"
                  key={logo}
                  style={{ backgroundImage: `url(${logo})` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="about-us-section-2">
      <div className="container">
        <div className="about-us-section-2__container">
          <h2>О нас</h2>

          <div className="about-us-row">
            <div className="about-us-col-item img">
              <img src={threeChar} alt="persons" className="img" />
            </div>
            <div className="about-us-col-item">
              <div className="text">
                <h3 className="text-title">Что мы делаем?</h3>
                <div className="text-text">
                  Мы – полноценный партнер для бизнеса со стороны IT
                </div>
                <div className="text-text">
                  RUDOS работает в формате Venture Builder и за полгода запустил
                  6 проектов
                </div>
              </div>
            </div>
          </div>
          <div className="about-us-row">
            <div className="about-us-col-item">
              <div className="text">
                <h3 className="text-title">Как можем помочь бизнесу</h3>
                <div className="text-text  right">
                  Запустить MVP и решить бизнес-задачу
                </div>
                <div className="text-text right">
                  Разработать сложное решение с обширной бизнес-логикой
                </div>
                <div className="text-text right">
                  Создать код, который легко поддерживать
                </div>
              </div>
            </div>
            <div className="about-us-col-item img" style={{justifyContent:'center'}}>
              <img src={men} alt="persons" className="img" />
            </div>
          </div>
          {/* <span>Мы – полноценный партнер для бизнеса со стороны IT</span> */}
        </div>
      </div>
    </div>
    <div className="about-us-section">
      <div className="container">
        <div className="row">
          <div className="col-item">
            <h2 className="col-item__heading">6</h2>
            <div className="col-item__subheading">Разработчиков</div>
          </div>
          <div className="col-item">
            <h2 className="col-item__heading">6</h2>
            <div className="col-item__subheading">
              Выпущенных <br /> проектов
            </div>
          </div>
          <div className="col-item">
            <img src={Web} alt="web" width="80px" />
            <div className="col-item__subheading">
              Веб
              <br /> приложения
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="stage-section">
      <div className="container">
        <div className="stages-block">
          <div className="stages-title">Основные этапы разрабоки</div>
          <div className="stages-list">
            <div className="stages-item">
              <div className="stage-item-content">
                <div className="stage-item-circle">1</div>
                <div className="stage-subtitle">Составление ТЗ</div>
              </div>
            </div>
            <div className="stages-item">
              <div className="stage-item-content">
                <div className="stage-item-circle">2</div>
                <div className="stage-subtitle">
                  Разработка уникального <br /> дизайна
                </div>
              </div>
            </div>
            <div className="stages-item">
              <div className="stage-item-content">
                <div className="stage-item-circle">3</div>
                <div className="stage-subtitle">
                  Составление <br /> документации
                </div>
              </div>
            </div>
            <div className="stages-item">
              <div className="stage-item-content">
                <div className="stage-item-circle">4</div>
                <div className="stage-subtitle">Интеграция</div>
              </div>
            </div>
            <div className="stages-item">
              <div className="stage-item-content">
                <div className="stage-item-circle">5</div>
                <div className="stage-subtitle">
                  Внедрение <br /> и поддержка
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="slider-section">
      <div className="container__embla">
        <div className="embla-wrapper">
          <h2>Наши проекты</h2>
          <Slider />
        </div>
      </div>
    </div>
    {/* <div className="technologies-section">
      <div className="container">
        <div className="tech-item-part">
          <h2>Почему React?</h2>
          <img
            src={BlueReact}
            alt="react"
            width="230px"
            className="tech-image"
          />
        </div>
        <div className="tech-item-part">
          <div className="tech-description-list">
            <div className="tech-description-item">
              Библиотека с окрытым исходным кодом
            </div>
            <div className="tech-description-item">
              Позволяет быстро создавать современные приложения
            </div>
            <div className="tech-description-item">
              Кросс-платформенная гибкость
            </div>
            <div className="tech-description-item">
              Лёгкая миграция между версиями
            </div>
            <div className="tech-description-item">
              Читайте больше на React.com
            </div>
          </div>
        </div>
      </div>
    </div> */}
    <div className="footer">
      <div className="container container-footer">
        <div className="footer-content">
          <h6 className="heading">Rudos.Tech</h6>
          <h6 className="developer">Наша команда</h6>
          <div className="mail">rudos.tech@test.ru</div>
        </div>
        <div className="footer-button">
          <div className="footer-arrow" onClick={scrollToTop} >
            ^
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
