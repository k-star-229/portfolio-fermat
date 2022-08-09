import React from "react"
import ScrollToTop from "react-scroll-up"
import { FiChevronUp } from "react-icons/fi"
import Helmet from "./components/common/Helmet"
import TextLoop from "react-text-loop"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Tab from "./elements/tab/Tab"
import Contact from "./elements/contact/Contact"
import PortfolioList from "./elements/portfolio/PortfolioList"
import ServiceList from "./elements/service/ServiceList"
import Particles from "react-particles-js"
import Brand from "./components/brands/Brands"
import avatar from "./assets/images/about/avatar.jpg"
import myPDF from "./assets/Othman_CV.pdf"

const SlideList = [
  {
    textPosition: "text-left",
    category: "Welcome to my World",
    description: "",
    buttonText: "",
    buttonLink: "",
  },
]
const PortfolioLanding = () => {
  let title = "About Me",
    description =
      "Since beginning my journey nearly 5 years ago, I've done remote work for agencies and collaborated with talented people to create digital content for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one problem at a time."
  // const PostList = BlogContent.slice(0, 3);
  return (
    <div className="active-dark">
      <Helmet pageTitle="Othman" />

      <Header homeLink="/" logo="symbol-dark" color="color-black" />

      {/* Start Slider Area   */}
      <div id="home" className="fix">
        <div className="slider-wrapper">
          {/* Start Single Slide */}
          {SlideList.map((value, index) => (
            <div
              className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25"
              key={index}
            >
              <Particles
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: "0",
                  left: "0",
                }}
                params={{
                  particles: {
                    number: {
                      value: 200,
                      density: {
                        enable: false,
                      },
                    },
                    size: {
                      value: 2.5,
                      random: true,
                      anim: {
                        speed: 4,
                        size_min: 0.3,
                      },
                    },
                    line_linked: {
                      enable: false,
                    },
                    move: {
                      random: true,
                      speed: 0.5,
                      direction: "top",
                      out_mode: "out",
                    },
                  },
                  interactivity: {
                    detect_on: "canvas",
                    events: {
                      onhover: {
                        enable: true,
                        mode: "repulse",
                      },
                      onclick: {
                        enable: true,
                        mode: "repulse",
                      },
                    },
                    modes: {
                      bubble: {
                        distance: 250,
                        duration: 2,
                        size: 0,
                        opacity: 0,
                      },
                      repulse: {
                        distance: 150,
                        duration: 4,
                      },
                    },
                  },
                }}
              />
              <div
                className="container"
                style={{
                  pointerEvents: "none",
                }}
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category ? <span>{value.category}</span> : ""}
                      <h1 className="title">
                        Hi, I’m Othman <br />
                        <TextLoop interval={1500}>
                          <span> Web Developer.</span>
                          <span> Engineer.</span>
                          <span> Content Writter.</span>
                          <span> Blogger.</span>
                          <span> Designer.</span>
                        </TextLoop>{" "}
                      </h1>
                      <button
                        style={{
                          color: "white",
                          border: "2px solid white",
                          marginTop: "12px",
                          marginBottom: "50px",
                          pointerEvents: "all",
                        }}
                        class="rn-btn btn-solid"
                      >
                        <a
                          style={{
                            color: "white",
                          }}
                          href={myPDF}
                          download="Othman_CV.pdf"
                        >
                          Download CV
                        </a>
                      </button>
                      {value.description ? (
                        <p className="description">{value.description}</p>
                      ) : (
                        ""
                      )}
                      {value.buttonText ? (
                        <div className="slide-btn">
                          <a
                            className="rn-button-style--2 btn-primary-color"
                            href={`${value.buttonLink}`}
                          >
                            {value.buttonText}
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* End Single Slide */}
        </div>
      </div>
      {/* End Slider Area   */}

      {/* Start About Area */}
      <div id="about" className="fix">
        <div className="about-area ptb--120  bg_color--1">
          <div className="about-wrapper">
            <div className="container about-container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-12">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <div>
                        <div className="row row--35 align-items-center">
                          <div className="col-md-3">
                            <div className="thumbnail">
                              <img
                                className="w-100"
                                src={avatar}
                                alt="About Images"
                              />
                            </div>
                          </div>
                          <div className="col-md-9">
                            <p className="description">{description}</p>
                          </div>
                        </div>

                        <div className="row mt--30">
                          <Tab tabStyle="tab-style--1" />
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

      {/* End About Area */}

      {/* Start Service Area  */}
      <div id="service" className="fix">
        <div className="service-area creative-service-wrapper ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">Services</h2>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                <ServiceList
                  item="3"
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Area  */}

      {/* Start Portfolio Area */}
      <div id="portfolio" className="fix">
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                    <h2 className="title">My Latest Projects</h2>
                    <p>Here are a few projects I've worked on recently.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <PortfolioList
                  styevariation="text-center mt--40"
                  column="col-lg-4 col-md-6 col-sm-6 col-12"
                  item="6"
                />
              </div>
              {/* <div className="row">
                <div className="col-lg-12">
                  <div className="view-more-btn mt--60 mt_sm--30 text-center">
                    <a className="rn-button-style--2 btn-solid" href="/blog">
                      <span>View More</span>
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}

      {/* Start Blog Area */}
      {/* <div id="blog" className="fix">
        <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="section-title text-center">
                  <h2>Latest News</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, <br />
                    but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt--60 mt_sm--40">
              {PostList.map((value, i) => (
                <div className="col-lg-4 col-md-6 col-12" key={i}>
                  <div className="blog blog-style--1">
                    <div className="thumbnail">
                      <a href="/blog-details">
                        <img
                          className="w-100"
                          src={`/assets/images/blog/blog-${value.images}.jpg`}
                          alt="Blog Images"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <p className="blogtype">{value.category}</p>
                      <h4 className="title">
                        <a href="/blog-details">{value.title}</a>
                      </h4>
                      <div className="blog-btn">
                        <a className="rn-btn text-white" href="/blog-details">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      {/* End Blog Area */}

      {/* Start Brand Area */}

      <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Brand />
            </div>
          </div>
        </div>
      </div>
      {/* End Brand Area */}

      {/* Start COntact Area */}
      <div id="contact" className="fix">
        <div className="rn-contact-area ptb--120 bg_color--1">
          <Contact
            contactImages="/assets/images/about/about-9.jpg"
            contactTitle="Let's Talk."
          />
        </div>
      </div>
      {/* End COntact Area */}

      <Footer />
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  )
}

export default PortfolioLanding
