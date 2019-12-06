import React, { Component } from "react";
import DeleteProfile from "./DeleteProfile.js";
import EditProfile from "./EditProfile";
import "bulma/css/bulma.css";

//ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
const thumbsUp = <FontAwesomeIcon icon={faThumbsUp} />;

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      likes: this.props.profile.likes
    };
    console.log(this.props.profile.availableToMeet);
    this.doMail = this.doMail.bind(this);
    this.addLike = this.addLike.bind(this);
  }

  doMail() {
    console.log("clicked");
    window.location.href = `mailto:${this.props.profile.email}?Subject=ProfessFinder%20Inquiry for a ${this.props.profile.industry}`;
  }

  addLike() {
    this.setState({
      likes: this.state.likes + 1
    });
  }

  render() {
    const available = this.props.profile.availableToMeet;
    return (
      <div className="modal is-active id-clipped">
        <div className="modal-background has-background-grey-darker"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{this.props.profile.industry}</p>
            <button className="delete" onClick={this.props.update}>
              CLOSE BUTTON
            </button>
          </header>
          <section className="modal-card-body">
            <div className="columns profileShow">
              <div className="column showImage profileShow">
                <img
                  className="profileShowImage"
                  src={this.props.profile.image}
                  alt="profilePic"
                />
                <div>Likes: {this.state.likes}</div>
                <button className="likes" onClick={this.addLike}>
                  {thumbsUp}LIKE ME
                </button>
              </div>
              <div className="column aboutMe">
                <div className="profileInfoPop">
                  <strong>About Me</strong> <br />
                  <p>
                    {" "}
                    Hi, my name is {this.props.profile.name} and I have{" "}
                    {this.props.profile.yearsOfExperience} years of experience
                    as a {this.props.profile.industry}. <br />
                  </p>
                  <br />
                  <strong>My specialities include :</strong>
                  <ul>{this.props.profile.specialties}</ul>
                  <br />
                  <p>
                    I am located in <strong>{this.props.profile.city}</strong>
                  </p>
                  <br />
                  Available To Meet?
                  <div className="controlToggle">
                    <label className="switch">
                      {available ? (
                        <input type="checkbox" checked />
                      ) : (
                        <input type="checkbox" />
                      )}
                      <span className="slider"></span>
                    </label>
                  </div>
                  {available ? <strong>Yes, I am</strong> : null}
                  <br />
                </div>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <p>Want to work with me?&nbsp;&nbsp;</p>
            <button className="button is-black" onClick={this.doMail}>
              Email Me
            </button>
            <div className="is-grouped editDelete">
              <div className="">
                <EditProfile
                  baseURL={this.props.baseURL}
                  profile={this.props.profile}
                  getProfiles={this.props.getProfiles}
                  update={this.props.update}
                />
              </div>
              &nbsp;&nbsp;
              <div className="">
                <DeleteProfile
                  baseURL={this.props.baseURL}
                  profile={this.props.profile}
                  getProfiles={this.props.getProfiles}
                  update={this.props.update}
                />
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Show;
