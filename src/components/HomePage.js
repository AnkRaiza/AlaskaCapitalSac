import React from 'react';
import * as $ from 'jquery'
import "../styles/bootstrap.css";
import "../styles/bootstrap-theme.css";
import * as flag from "../Images/flag1.jpg";
import * as flag2 from "../Images/flag2.jpg";
import * as sn1 from "../Images/sn1.png";
import * as sn2 from "../Images/sn2.png";
import * as sn3 from "../Images/sn3.png";
import * as sn4 from "../Images/sn4.png";
import * as searchButton from "../Images/SearchBtn.jpg";
import * as mainBanner from "../Images/MainBanner1.jpg";
import * as mainBanner2 from "../Images/MainBanner2.jpg";
import * as mainBanner3 from "../Images/MainBanner3.jpg";
import * as comillas1 from "../Images/comillas1.png";
import * as comillas2 from "../Images/comillas2.png";
import * as logo from "../Images/Logo.png";
import * as nosotros from "../Images/Side_img_nosotros.jpg";
import * as reg from "../Images/Reg.jpg";
import * as arrow from "../Images/Arrow.png";
import * as pdfIcon from "../Images/pdficon.png";
import * as side from "../Images/Side_img.jpg";
import * as sideImage from "../Images/Side_img_contact.jpg";
import * as sideMap from "../Images/Side_img_webmap.jpg";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "Ingenio",
      selectedLi: "inicio",
      language: "sp",
    };
  }


  handleLanguageChange = (value) => {
    this.setState(prevState => ({
      ...prevState,
      language: value,
    }));
  }

  handleResponsiveMenuToggle = () => {
    $("#bs-example-navbar-collapse-1").toggleClass("collapse");
  }

  scrollIndex = () => {
    this.setState(prevState => ({
      ...prevState,
      selectedLi: "inicio",
    }));
    const home = $("#HomeDiv");
    if (home.offset()) {
      $("html, body").animate({
        scrollTop: $("#HomeDiv").offset().top
      }, 1000);
    }
  }

  resizeParentDiv = () => {
    const parentDivHeight = $("#ParentDiv").height();
    const secondDivHeight = $("#SecondDiv").height();
    if (parentDivHeight > secondDivHeight) {
      $("#ParentDiv").height(parentDivHeight);
    } else {
      $("#ParentDiv").height(secondDivHeight);
    }
  }

  hideShow = (element, e) => {
    e.preventDefault();
    e.stopPropagation();
    $("#ParentDiv").height($("#HomeDiv").height());
    const parentDiv = $("#ParentDiv");
    if (parentDiv.offset()) {
      $("html, body").animate({
        scrollTop: $("#ParentDiv").offset().top
      }, 1000);
    }
    if ($("#SecondDiv").css('display') == 'none') {
      $("#SecondDiv").slideToggle(800, this.resizeParentDiv);
    } else {
      $("#SecondDiv").slideToggle(800).slideToggle(800, this.resizeParentDiv);
    }
    switch (element) {
      case 'QuienesSomos':
        this.setState(prevState => ({
          ...prevState,
          selectedLi: "quienes",
        }));
        setTimeout(function() {
          $("#SecondDiv").html($("#QuienesSomosDiv").html());
        }, 800);
        break;
      case 'Directorio':
        this.setState(prevState => ({
          ...prevState,
          selectedLi: "directorio",
        }));
        setTimeout(function() {
          $("#SecondDiv").html($("#DirectorioDiv").html());
        }, 800);
        break;
      case 'NuestrosProyectos':
        this.setState(prevState => ({
          ...prevState,
          selectedLi: "nuestros",
        }));
        setTimeout(function () {
          $("#SecondDiv").html($("#NuestrosProyectos").html());
        }, 800);
        break;
      case 'Contactenos':
        this.setState(prevState => ({
          ...prevState,
          selectedLi: "contactenos",
        }));
        setTimeout(function () {
          $("#SecondDiv").html($("#Contactenos").html());
        }, 800);
        break;
      case 'MapaWeb':
        this.setState(prevState => ({
          ...prevState,
          selectedLi: "mapa",
        }));
        setTimeout(function () {
          $("#SecondDiv").html($("#MapaWeb").html());
        }, 800);
        break;
      default:
        break;
    }
  }

  hideShowMobile = (element) => {
    this.handleResponsiveMenuToggle();
    setTimeout(function () {
      $("#ParentDiv").height($("#SecondDiv").height());
    }, 1800);
    if ($("#SecondDiv").css('display') == 'none') {
      $("#SecondDiv").slideToggle(800, () => {
        const parentDiv = $("#ParentDiv");
        if (parentDiv.offset()) {
          $("html, body").animate({
            scrollTop: $("#ParentDiv").offset().top - 80
          }, 1100);
        }
      });
    } else {
      $("#SecondDiv").slideToggle(800).slideToggle(800, () => {
        const parentDiv = $("#ParentDiv");
        if (parentDiv.offset()) {
          $("html, body").animate({
            scrollTop: $("#ParentDiv").offset().top - 80
          }, 1100);
        }
      });
    }
    switch (element) {
      case 'QuienesSomos':
        this.setState(prevState => ({
          ...prevState,
          selectedLi: "quienes",
        }));
        setTimeout(function () {
          $("#SecondDiv").html($("#QuienesSomosDiv").html());
        }, 800);
        break;
      case 'NuestrosProyectos':
        this.setState(prevState => ({
          ...prevState,
          selectedLi: "nuestros",
        }));
        setTimeout(function () {
          $("#SecondDiv").html($("#NuestrosProyectos").html());
        }, 800);
        break;
      case 'Contactenos':
        this.setState(prevState => ({
          ...prevState,
          selectedLi: "contactenos",
        }));
        setTimeout(function () {
          $("#SecondDiv").html($("#Contactenos").html());
        }, 800);
        break;
      case 'MapaWeb':
        this.setState(prevState => ({
          ...prevState,
          selectedLi: "mapa",
        }));
        setTimeout(function () {
          $("#SecondDiv").html($("#MapaWeb").html());
        }, 800);
        break;
      default:
        break;
    }
  }

  handleTabChange = (value) => {
    this.setState(prevState => ({
      ...prevState,
      selectedTab: value,
    }));
  }

  tabContent = (tab) => {
    switch (tab) {
      case "Ingenio":
        return <div id="Ingenio" className="tab-pane active">
          <p>
            Alaska Capital SAC está desarrollando un proyecto destinado a construir y operar un
            ingenio azucarero en Perú. La visión sostenible de este proyecto consiste en que el
            ingenio funcione como una máquina solar que produce azúcar para la energía humana,
            bagazo para la energía eléctrica, y etanol para la sustitución de combustibles fósiles.
          </p>
          <p>
            La caña de azúcar se caracteriza por su eficiencia fotosintética de 7% a 8%, que es muy
            superior a la de otras plantas en general (entre 0.2% y 2%) y a la de plantas cultivadas
            (entre 1% y 2%). La eficiencia fotosintética es la fracción de la energía solar que la
            fotosíntesis convierte en energía química. En colaboración con una empresa peruana de
            consultoría azucarera, Alaska Capital SAC está solicitando cotizaciones para la
            construcción de un ingenio que procesará caña de azúcar y tendrá una huella de carbón
            negativa.
          </p>
          <p>
            Esto significa cero consumo de combustibles fósiles, una producción relevante de energía
            eléctrica, y la generación de etanol para ayudar a terceros a disminuir el consumo
            mundial de combustibles fósiles.
          </p>
          <p>
            Al separar el bagazo y el jarabe que contiene sacarosa y otros azúcares, el ingenio
            quemará el bagazo para generar vapor. El vapor se usará para separar los azúcares del
            jarabe sin usar ningún proceso químico, y para operar una planta generadora de
            electricidad biomasa. Parte de los azúcares se usará para consumo humano y parte para
            producir etanol. A su vez, la electricidad generada estará disponible para el
            funcionamiento de pozos que eleven agua subterránea a la superficie con el fin de
            irrigar los cañaverales de agricultores particulares marginales.
          </p>
          <p>
            De esta forma se anticipa que el ingenio, construido con equipos de fabricación nueva y
            eficiente, servirá como modelo para otros proyectos sostenibles y socialmente
            responsables.
          </p>
          <h3>Anuncios</h3>
          <p>Click en los links de abajo para descargar la información</p>
          <ul>
            <li>
              <a href="https://firebasestorage.googleapis.com/v0/b/alaskacapital-ea665.appspot.com/o/resolucion.pdf?alt=media&token=b4f7da1a-f1ef-405b-9df7-428f879d2508"
                 target="_blank" style={{color: "#000000"}} rel="noopener noreferrer">Permiso Ambiental Recibido
                <img
                  src={pdfIcon}
                  alt="pdficon" width="25" height="25"
                  className="aligncenter size-thumbnail wp-image-41"/></a></li>
            <li>
              <a
                 target="_blank" style={{color: "#000000"}} rel="noopener noreferrer">Convocatoria pública a taller
                participativo
                <img
                  src={pdfIcon}
                  alt="pdficon" width="25" height="25"
                  className="aligncenter size-thumbnail wp-image-41"/></a></li>
          </ul>
        </div>;
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="row paddingLeft10">
                        <span>
                            {
                              this.state.language === "sp" ? "Idioma:" : "Language:"
                            }
                        </span>
                  <img className="flag" src={flag} alt="..."
                       onClick={this.handleLanguageChange.bind(this, "en")}/>
                  <img className="flag" src={flag2} alt="..."
                       onClick={this.handleLanguageChange.bind(this, "sp")}/>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-right socialIcons">
                <div className="row paddingRight10">
                  <img className="" src={sn1} alt="..."/>
                  <img className="" src={sn2} />
                  <img className="" src={sn3} alt="..."/>
                  <img className="" src={sn4} alt="..."/>
                </div>
              </div>
            </div>
            <div className="row hidden">
              <div className="mainSearchBlock">
                <div className="row">
                  <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-right">
                    {
                      this.state.language === "sp" ? "Buscar:" : "Search:"
                    }
                  </div>
                  <div className="col-xs-14 col-sm-14 col-md-14 col-lg-14">
                    {
                      this.state.language === "sp" ?
                        <input type="text" placeholder="Introduzca Texto Aqui"/> :
                        <input type="text" placeholder="Enter your text here"/>
                    }
                  </div>
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <img className="img-responsive" src={searchButton} alt="..."/>
                  </div>
                </div>
              </div>
            </div>
            <div className="row hidden-xs">
              <div className="mainLeftMenu">
                <ul className="nav nav-pills nav-stacked">
                  <li onClick={this.scrollIndex} className={this.state.selectedLi === "inicio" ? "active" : ""} ><a>
                    {
                      this.state.language === "sp" ? "Inicio" : "Home"
                    }
                  </a>
                    <div className="inicio"></div>
                  </li>
                  <li className={this.state.selectedLi === "quienes" ? "active" : ""}><a onClick={this.hideShow.bind(this,'QuienesSomos')}>
                    {
                      this.state.language === "sp" ? "Quiénes Somos" : "Who We Are"
                    }
                  </a>
                    <div className="quienes"></div>
                  </li>
                  <li onClick={this.hideShow.bind(this, 'Directorio')} className={this.state.selectedLi === "directorio" ? "active" : ""}><a>
                    {
                      this.state.language === "sp" ? "Directorio" : "Board"
                    }
                  </a>
                    <div className="directorio"></div>
                  </li>
                  <li onClick={this.hideShow.bind(this,'NuestrosProyectos')} className={this.state.selectedLi === "nuestros" ? "active" : ""}><a>
                    {
                      this.state.language === "sp" ? "Nuestros Proyectos" : "Our Projects"
                    }
                  </a>
                    <div className="nuestros"></div>
                  </li>
                  <li onClick={this.hideShow.bind(this,'Contactenos')} className={this.state.selectedLi === "contactenos" ? "active" : ""}><a>
                    {
                      this.state.language === "sp" ? "Contáctenos" : "Contact"
                    }
                  </a>
                    <div className="contactenos"></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-inverse navbar-fixed-top hidden-sm hidden-md hidden-lg marginTop30"
             role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" onClick={this.handleResponsiveMenuToggle}>
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">
                {
                  this.state.language === "sp" ? "Menu Principal" : "Main Menu"
                }
              </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li onClick={this.scrollIndex} className={this.state.selectedLi === "inicio" ? "active" : ""}><a>
                  {
                    this.state.language === "sp" ? "Inicio" : "Home"
                  }
                </a>
                  <div className="inicio"></div>
                </li>
                <li onClick={this.hideShowMobile.bind(this,'QuienesSomos')} className={this.state.selectedLi === "quienes" ? "active" : ""}><a>
                  {
                    this.state.language === "sp" ? "Quiénes Somos" : "Who We Are"
                  }
                </a>
                  <div className="quienes"></div>
                </li>
                <li onClick={this.hideShowMobile.bind(this,'NuestrosProyectos')} className={this.state.selectedLi === "nuestros" ? "active" : ""}><a>
                  {
                    this.state.language === "sp" ? "Nuestros Proyectos" : "Our Projects"
                  }
                </a>
                  <div className="nuestros"></div>
                </li>
                <li onClick={this.hideShowMobile.bind(this,'Contactenos')} className={this.state.selectedLi === "contactenos" ? "active" : ""}><a>
                  {
                    this.state.language === "sp" ? "Contáctenos" : "Contact"
                  }
                </a>
                  <div className="contactenos"></div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid" id="HomeDiv">
          <div className="row mainResponsiveMarginTop">
            <div className="col-xs-24 col-sm-24 col-md-24 col-lg-24">
              <div className="row">
                <div id="main-carousel" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner marginTop20noMarginMobile">
                    <div className="item active">
                      <img src={mainBanner} className="img-responsive" alt="..." />
                      <div className="carousel-caption">
                                    <span>
                                      {
                                        this.state.language === "sp" ? "Desarrollamos" : "We Develop"
                                      }
                                    </span>
                        <span>
                          {
                            this.state.language === "sp" ? "Proyectos" : "Investment"
                          }
                                    </span>
                        <span>
                          {
                            this.state.language === "sp" ? "de Inversión" : "Projects"
                          }
                                    </span>
                      </div>
                    </div>
                    <div className="item">
                      <img src={mainBanner2} className="img-responsive" alt="..." />
                      <div className="carousel-caption">
                                    <span>
                                       {
                                         this.state.language === "sp" ? "Desarrollamos" : "We Develop"
                                       }
                                    </span>
                        <span>
                                        {
                                          this.state.language === "sp" ? "Proyectos" : "Investment"
                                        }
                                    </span>
                        <span>
                                       {
                                         this.state.language === "sp" ? "de Inversión" : "Projects"
                                       }
                                    </span>
                      </div>
                    </div>
                    <div className="item">
                      <img src={mainBanner3} className="img-responsive" alt="..." />
                      <div className="carousel-caption">
                                    <span>
                                        {
                                          this.state.language === "sp" ? "Desarrollamos" : "We Develop"
                                        }
                                    </span>
                        <span>
                                        {
                                          this.state.language === "sp" ? "Proyectos" : "Investment"
                                        }
                                    </span>
                        <span>
                                        {
                                          this.state.language === "sp" ? "de Inversión" : "Projects"
                                        }
                                    </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mainCarouselCover"></div>
              <div className="mainQuotationText hidden-xs">
                <div className="row">
                  <div className="col-xs-24 col-sm-24 col-md-24 col-lg-24 italic bold">
                    <img src={comillas1} alt="..."/>
                    {
                      this.state.language === "sp" ?
                        "La sostenibilidad consiste en satisfacer las necesidades de la actual generación sin sacrificar la capacidad de futuras generaciones de satisfacer sus propias necesidades." :
                        "Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs."
                    }
                    <img src={comillas2} alt="..."/>
                    <p>
                      {
                        this.state.language === "sp" ?
                          "Informe de la Comisión Brundtland, Naciones Unidas, 20 de marzo 1987" :
                          "Brundtland Commission Report, United Nations, 20 March 1987"
                      }
                    </p>
                  </div>
                </div>
              </div>
              <div className="mainQuotationTextCover hidden-xs">
                <div className="row">
                  <div className="col-xs-24 col-sm-24 col-md-24 col-lg-24 italic bold invisible">
                    <img src={comillas1} alt="..."/>
                    {
                      this.state.language === "sp" ?
                        "La sostenibilidad consiste en satisfacer las necesidades de la actual generación sin sacrificar la capacidad de futuras generaciones de satisfacer sus propias necesidades." :
                        "Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs."
                    }
                    <img src={comillas2} alt="..."/>
                    <p>
                      {
                        this.state.language === "sp" ?
                          "Informe de la Comisión Brundtland, Naciones Unidas, 20 de marzo 1987" :
                          "Brundtland Commission Report, United Nations, 20 March 1987"
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="ParentDiv" className="container-fluid">
          <div id="SecondDiv"></div>
        </div>
        <div className="container-fluid slideElement hidden" id="QuienesSomosDiv">
          <div className="row">
            <div className="col-xs-24 col-sm-24 col-md-24 col-lg-24">
              <div className="row">
                <div className="col-xs-24 col-sm-16 col-md-16 col-lg-16">
                  <div className="row">
                    <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 marginTop60 paddingLeft20">
                      <img className="img-responsive" src={logo} />
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className="col-xs-24 col-sm-17 col-md-17 col-lg-17 col-sm-offset-7 col-md-offset-7 col-lg-offset-7 paddingLeft20 marginTopResponsive">
                      <div className="row mainBody">
                        <div className="col-xs-24 col-sm-24 col-md-24 col-lg-24">
                          <div className="flechaTitulo"></div>
                          <h1 className="pull-left">
                            {
                              this.state.language === "sp" ? "Quiénes Somos" : "Who We Are"
                            }
                          </h1>
                        </div>
                        <div className="col-xs-24 col-sm-24 col-md-24 col-lg-24 text-justify paddingRight20">
                          <p>
                            {
                              this.state.language === "sp" ?
                                "Alaska Capital SAC fue constituida en Perú el 21 de mayo 2014 para desarrollar proyectos de inversión sostenibles. Tiene como propósito desarrollar a beneficio propio proyectos de inversión en diferentes sectores (p.e.: agroindustrial, inmobiliario, energético, ambiental) mediante el financiamiento y la gestión de proyectos de acuerdo con su visión. La empresa tiene un fuerte compromiso con la responsabilidad social y el medio ambiente, por lo que se dedica a proyectos en armonía con su visión. El director general de Alaska Capital SAC, Michael Socarrás, tiene mas de 20 años de experiencia internacional en varios aspectos de infraestructura, inversión, desarrollo, cumplimiento y responsabilidad social. La empresa percibe importantes oportunidades en Perú y se dedica principalmente al desarrollo sostenible de proyectos peruanos." :
                                "Alaska Capital SAC was incorporated in Peru on May 21, 2014 to develop sustainable investment projects. The company’s objective is to profit from the development of investment projects in various sectors (currently agroindustrial, energy and real estate) through project finance and project management in accordance with the company’s vision. The company is strongly committed to social responsibility and the environment, and focuses on projects that are in harmony with its principles. Alaska Capital SAC’s managing director, Michael Socarras, has more than 20 years of international experience in various aspects of infrastructure, investment, development, compliance and social responsibility. The company sees important opportunities in Peru and focuses mainly on sustainable project development in Peru."
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8 col-md-8 col-lg-8 hidden-xs">
                  <img className="customImgResponsive" src={nosotros}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid slideElement hidden" id="DirectorioDiv">
          <div className="row">
            <div className="col-xs-24 col-sm-24 col-md-24 col-lg-24">
              <div className="row">
                <div className="col-xs-24 col-sm-16 col-md-16 col-lg-16">
                  <div className="row">
                    <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 marginTop60 paddingLeft20">
                      <img className="img-responsive" src={logo}/>
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className="col-xs-24 col-sm-17 col-md-17 col-lg-17 col-sm-offset-7 col-md-offset-7 col-lg-offset-7 paddingLeft20 marginTopResponsive">
                      <div className="row mainBody">
                        <div className="col-xs-24 col-sm-24 col-md-24 col-lg-24">
                          <div className="flechaTitulo"></div>
                          <h1 className="pull-left">
                            {
                              this.state.language === "sp" ? "Directorio" : "Board"
                            }
                          </h1>
                        </div>
                        <div className="col-xs-24 col-sm-24 col-md-24 col-lg-24 text-justify" style={{marginBottom: 20}}>
                          <div className="row" style={{backgroundColor: "#F6F9F1"}}>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" style={{padding: "0 40px"}}>
                              <h3>Michael P. Socarras</h3>
                            </div>
                            <div className="col-xs-16 col-sm-16 col-md-16 col-lg-16" style={{padding: 15}}>
                              El doctor Socarras es egresado en derecho, diploma Juris Doctor, de la Universidad de Yale,
                              y abogado internacional con 31 años de experiencia en negocios, comercio internacional y
                              cumplimiento legal. El doctor Socarras es CEO y Director Ejecutivo de Alaska Capital SAC.
                            </div>
                          </div>
                          <div className="row" style={{backgroundColor: "#EAF1DD"}}>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" style={{padding: "0 40px"}}>
                              <h3>Joseph E. Schmitz</h3>
                            </div>
                            <div className="col-xs-16 col-sm-16 col-md-16 col-lg-16" style={{padding: 15}}>
                              Egresado en ingeniería de la Academia Naval de Annapolis, Maryland, y en derecho de la
                              Universidad de Stanford. El doctor Schmitz fue Inspector General del Departamento de Defensa
                              de EEUU responsable de la disciplina, investigaciones, contabilidad y policía militar de las
                              Fuerzas Armadas. Alcanzó rango de Capitán de Marina (retirado) luego de servir por
                              designación de la OTAN en la Bundesmarine, República Federal Alemana.
                            </div>
                          </div>
                          <div className="row" style={{backgroundColor: "#F6F9F1"}}>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" style={{padding: "0 40px"}}>
                              <h3>Ing. José Manuel Gómez Smith</h3>
                            </div>
                            <div className="col-xs-16 col-sm-16 col-md-16 col-lg-16" style={{padding: 15}}>
                              El ingeniero Gómez, consultor principal del Proyecto Campoverde de Alaska Capital SAC, pone
                              a la disposición de Alaska Capital SAC su larga y distinguida experiencia en los sectores
                              azucareros e industriales del Perú y Brasil. En su capacidad de ingeniero mecánico, ha
                              participado en más de 40 proyectos en varias industrias, incluyendo la expansión de
                              capacidad de los ingenios Andahuasi y Tumán en Perú.
                            </div>
                          </div>
                          <div className="row" style={{backgroundColor: "#EAF1DD"}}>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" style={{padding: "0 40px"}}>
                              <h3>Ing. Alejandro Ramírez Sime</h3>
                            </div>
                            <div className="col-xs-16 col-sm-16 col-md-16 col-lg-16" style={{padding: 15}}>
                              El ingeniero Ramírez se distingue como consultor de alto nivel en el sector agrícola y
                              bancario del Perú por su distinguida trayectoria y experiencia. Fue promotor de proyectos y
                              alto responsable del Banco Agrario del Perú, administrador de empresas y perito valuador
                              bancario.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid slideElement hidden" id="NuestrosProyectos">
          <div className="row">
            <div className="col-xs-24 col-sm-24 col-md-24 col-lg-24">
              <div className="row">
                <div className="col-xs-24 col-sm-16 col-md-16 col-lg-16">
                  <div className="row">
                    <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 marginTop60 paddingLeft20">
                      <img className="img-responsive" src={logo}/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-7 col-md-7 col-lg-7 hidden-xs marginTopResponsive">
                      <img src={reg} alt="line" className="customImgResponsive"/>
                    </div>
                    <div className="col-xs-24 col-sm-17 col-md-17 col-lg-17 paddingLeft20 marginTopResponsive">
                      <div className="row mainBody">
                        <div className="col-xs-24 col-sm-24 col-md-24 col-lg-24">
                          <div className="flechaTitulo"></div>
                          <h1 className="pull-left">
                            {
                              this.state.language === "sp" ? "Nuestros Proyectos" : "Our Projects"
                            }
                          </h1>
                        </div>
                        <div className="col-xs-24 col-sm-24 col-md-24 col-lg-24 text-justify paddingRight20">
                          <div className="col-xs-24 col-sm-24 col-md-24 col-lg-24 text-justify paddingRight20">
                            <ul id="ProyectosUl" className="nav nav-tabs" role="tablist">

                            <li role="presentation" className='active'>
                              <a href="tab-content" role="tab" data-toggle="tab"><img src={arrow} />
                              Ingenio
                            </a></li>

                            </ul>
                            <div className="tab-content">
                              {
                                this.tabContent(this.state.selectedTab)
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8 col-md-8 col-lg-8 hidden-xs">
                  <img className="customImgResponsive" src={side} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid slideElement hidden" id="Contactenos">
          <div className="row">
            <div className="col-xs-24 col-sm-24 col-md-24 col-lg-24">
              <div className="row">
                <div className="col-xs-24 col-sm-16 col-md-16 col-lg-16">
                  <div className="row">
                    <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 marginTop60 paddingLeft20">
                      <img className="img-responsive" src={logo}/>
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className="col-xs-24 col-sm-17 col-md-17 col-lg-17 col-sm-offset-7 col-md-offset-7 col-lg-offset-7 paddingLeft20 marginTopResponsive">
                      <div className="row mainBody">
                        <div className="col-xs-24 col-sm-24 col-md-24 col-lg-24">
                          <div className="flechaTitulo"></div>
                          <h1 className="pull-left">
                            {
                              this.state.language === "sp" ? "Contáctenos" : "Contact"
                            }
                          </h1>
                        </div>
                        <div className="col-xs-24 col-sm-24 col-md-24 col-lg-24 text-justify paddingRight20 alaskaLinks">
                          <div className="row">
                            <div className="col-xs-24 col-sm-24 col-md-24 col-lg-24 text-center">
                              <p>
                                {
                                  this.state.language === "sp" ?
                                    "Dirección: Av. Manuel Olguín N° 211 oficina 502, Surco – Lima" :
                                    "Address: 211 Manuel Olguín Av office 502, Surco – Lima"
                                }
                              </p>
                              <p>Tel: (511) 644-0146</p>
                              <p>Email: <a href="mailto:info@alaskacapitalsac.com">info@alaskacapitalsac.com</a></p>
                            </div>
                          </div>
                          <br/>
                          <div className="row">
                            <div className="col-xs-24 col-sm-12 col-md-12 col-lg-12 text-center">
                              <p>Michael Socarrás</p>
                              <p>Managing Director</p>
                              <p>Tel: +1-202-361-9231</p>
                              <p>Email: <a href="mailto:msocarras@alaskacapitalsac.com">msocarras@alaskacapitalsac.com</a>
                              </p>
                            </div>
                            <div className="col-xs-24 col-sm-12 col-md-12 col-lg-12 text-center">
                              <p>Xiomara Tamayo</p>
                              <p>
                                {
                                  this.state.language === "sp" ? "Gerente General" : "General Manager"
                                }
                              </p>
                              <p>
                                {
                                  this.state.language === "sp" ? "Cel: +51-961-225-305" : "Mobile: +51-989-410-824"
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8 col-md-8 col-lg-8 hidden-xs">
                  <img className="customImgResponsive" src={sideImage} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid slideElement hidden" id="MapaWeb">
          <div className="row">
            <div className="col-xs-24 col-sm-24 col-md-24 col-lg-24">
              <div className="row">
                <div className="col-xs-24 col-sm-16 col-md-16 col-lg-16">
                  <div className="row">
                    <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 marginTop60 paddingLeft20">
                      <img className="img-responsive" src={logo}/>
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className="col-xs-24 col-sm-17 col-md-17 col-lg-17 col-sm-offset-7 col-md-offset-7 col-lg-offset-7 paddingLeft20 marginTopResponsive">
                      <div className="row mainBody">
                        <div className="col-xs-24 col-sm-24 col-md-24 col-lg-24">
                          <div className="flechaTitulo"></div>
                          <h1 className="pull-left">Mapa Web</h1>
                        </div>
                        <div className="col-xs-24 col-sm-24 col-md-24 col-lg-24 text-justify paddingRight20">
                          <p>

                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8 col-md-8 col-lg-8 hidden-xs">
                  <img className="customImgResponsive" src={sideMap} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="text-center">
        <span>
          {
            this.state.language === "sp" ? "Propiedad de Alaska Capital SAC - Todos los derechos reservados 2014" : "Property of Alaska Capital SAC - All Rights Reserved 2014"
          }
        </span>
        </footer>
        <div id="Confirmation" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel"
             aria-hidden="true">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span
                  className="sr-only">Close</span></button>
                <h4 className="modal-title" id="myModalLabel">
                  {
                    this.state.language === "sp" ? "Atención:" : "Attention:"
                  }
                </h4>
              </div>
              <div className="modal-body">
                {
                  this.state.language === "sp" ? "Su mensaje fue correctamente enviado!" : "Your message was sent!"
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
