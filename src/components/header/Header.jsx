import React, { Component } from "react"
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa"
import { FiX, FiMenu } from "react-icons/fi"
import Scrollspy from "react-scrollspy"
import logo from "../../assets/images/logo/logo.svg"

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/iothmanosx" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/othmanosx" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/othmanosx" },
  { Social: <FaTwitter />, link: "https://twitter.com/othmanosx" },
  { Social: <FaGithub />, link: "https://github.com/othmanosx" },
]
class Header extends Component {
  constructor(props) {
    super(props)
    this.menuTrigger = this.menuTrigger.bind(this)
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this)
    this.stickyHeader = this.stickyHeader.bind(this)

    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {})
  }
  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open")
  }

  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open")
  }

  stickyHeader() {}

  render() {
    window.addEventListener("scroll", function () {
      var value = window.scrollY
      if (value > 100) {
        document.querySelector(".header--fixed").classList.add("sticky")
      } else {
        document.querySelector(".header--fixed").classList.remove("sticky")
      }
    })

    var elements = document.querySelectorAll(".has-droupdown > a")
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active")
          this.classList.toggle("open")
        }
      }
    }
    const { color = "default-color" } = this.props
    let logoUrl = (
      <img style={{ width: "30px", opacity: 0.8 }} src={logo} alt="Ghost" />
    )

    return (
      <header className={`header-area header-style-two header--fixed ${color}`}>
        <div className="header-wrapper">
          <div className="header-left d-flex align-items-center">
            <div className="logo">
              <a href={this.props.homeLink}>{logoUrl}</a>
            </div>
            <nav className="mainmenunav d-lg-block ml--50">
              <Scrollspy
                className="mainmenu"
                items={[
                  "home",
                  "about",
                  "service",
                  "portfolio",
                  "blog",
                  "contact",
                ]}
                currentClassName="is-current"
                offset={-200}
              >
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#service">Service</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </Scrollspy>
            </nav>
          </div>
          <div className="header-right">
            <div className="social-share-inner">
              <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`}>{val.Social}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="header-btn">
              <a className="rn-btn" href="#contact">
                <span>Contact me</span>
              </a>
            </div> */}
            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
export default Header
