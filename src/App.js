import React, { Component } from "react";
import Particles from "react-particles-js";
import Main from "./components/Main";
import NewProfile from "./components/NewProfile";
import "bulma/css/bulma.css";

//ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBinoculars } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
const link = <FontAwesomeIcon icon={faLink} />;
const userPlus = <FontAwesomeIcon icon={faUserPlus} />;
const binoculars = <FontAwesomeIcon icon={faBinoculars} />;

//URL
let baseURL = process.env.REACT_APP_BASEURL;
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "https://professfinder.herokuapp.com/";
}

console.log("current base URL:", baseURL);

//PARTICLE BACKGROUND
const particleOpt = {
  particles: {
    number: {
      value: 123,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 142.0465754938091,
      color: "#ffffff",
      opacity: 0.4,
      width: 3
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  canvas: {
    w: 100,
    h: 50
  },
  retina_detect: true
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      showNew: false
    };
    this.togglePopUp = this.togglePopUp.bind(this);
    this.handleAddProfile = this.handleAddProfile.bind(this);
  }

  handleAddProfile(NewProfile) {
    console.log(NewProfile);
    this.setState({
      profiles: [...this.state.profiles, NewProfile]
    });
  }

  togglePopUp() {
    this.setState({
      showNew: !this.state.showNew
    });
  }

  render() {
    return (
      <div className="Main">
        <header className="header">
          <img
            className="logo"
            src="/public/images/professFinder.png"
            alt="logo"
          ></img>
          {this.state.showNew ? (
            <div className="modalBackground">
              <div className="newRentalPopUp">
                <div className="newProfileFieldsInner">
                  <NewProfile
                    handleAddProfile={this.handleAddProfile}
                    baseURL={baseURL}
                    togglePopUp={this.togglePopUp}
                  />
                </div>
                <button
                  className="button is-white"
                  onClick={this.togglePopUp}
                  id="exitBtn"
                >
                  X
                </button>
              </div>
            </div>
          ) : null}
          <button className="button addProfilebtn" onClick={this.togglePopUp}>
            Add Your Profile
          </button>
        </header>
        <div className="canvas">
          <div className="particlesOverlay">
            <h1 className="particlesH1">Discover. Create. Connect.</h1>
          </div>
          <Particles params={particleOpt} />
        </div>

        <div className="hero">
          <div className="hero-body">
            <div className="columns is-centered">
              <div className="column ">
                <div className="homeCard">{binoculars} Search.</div>
                <p> Search hundreds of professional listinings in your area</p>
              </div>
              <div className="column">
                <div className="homeCard">{link} Connect.</div>
                <p>
                  {" "}
                  Connect directly with a service professional for all of your
                  needs
                </p>
              </div>
              <div className="column">
                <div className="homeCard">{userPlus} Create.</div>
                <p>
                  {" "}
                  Offer a professional service? Have a business? List your
                  services for free!
                </p>
              </div>
            </div>
            <h1 className="slogan">Service Provider Marketplace</h1>
            <Main baseURL={baseURL} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
