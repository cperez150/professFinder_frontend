import React, { Component } from "react";
import axios from "axios";
import Show from "./Show.js";
import "../App.css";
import "bulma/css/bulma.css";

//ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const star = <FontAwesomeIcon icon={faStar} />;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPop: null,
      bool: false,
      city: null,
      industry: null,
      results: [],
      match: [],
      filtered: [],
      profileToShow: {},
      search: "",
      text: ""
    };
    this.getProfiles = this.getProfiles.bind(this);
    this.update = this.update.bind(this);
    this.getSearchedProfiles = this.getSearchedProfiles.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.onMouseover = this.onMouseover.bind(this);
    // this.onMouseout = this.onMouseout.bind(this);
    this.togglePopUp = this.togglePopUp.bind(this);
  }

  componentDidMount() {
    this.getProfiles();
  }

  //TOGGLEPOP
  togglePopUp(event) {
    console.log(event.currentTarget.id);
    const selected = this.state.match.filter(selected => {
      return selected._id === event.currentTarget.id;
    });
    this.setState({
      currentPop: selected,
      show: !this.state.show
    });
  }

  update() {
    this.setState({
      show: !this.state.show
    });
  }

  //ALL PROFILES
  async getProfiles() {
    const response = await axios.get(`${this.props.baseURL}/profiles`);
    const data = response.data.foundProfiles;
    this.setState({
      match: data
    });
  }

  //SEARCH PROFILES
  async getSearchedProfiles() {
    const response = await axios.get(`${this.props.baseURL}/profiles`);
    const data = response.data.foundProfiles;
    this.setState({
      filtered: [],
      results: data
    });
    console.log(this.state.results);

    this.state.results.forEach(result => {
      if (
        result.city.toLowerCase() === this.state.city ||
        result.industry.toLowerCase() === this.state.industry
      ) {
        this.state.filtered.push(result);
        this.setState({
          match: this.state.filtered
        });
        console.log(this.state.match);
      }
    });
  }

  //HANDLE SUBMIT
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    if (event.target.value === "" || event.target.value === null) {
      this.setState({
        bool: false
      });
    } else {
      this.setState({
        bool: true,
        city: event.target.value.toLowerCase(),
        industry: event.target.value.toLowerCase()
      });
    }
  }

  //set the text
  onMouseover(e) {
    console.log(e.currentTarget);
    // this.setState({
    //   text: "View Profile"
    // });
  }
  //clear the text
  onMouseout(e) {
    this.setState({ text: "" });
  }

  render() {
    return (
      <div>
        <div className="searchParent">
          <div className="searchContainer">
            <div className="searchLabel">
              {" "}
              <label> SEARCH:</label>
            </div>
            <div className="searchChild1">
              <input
                type="text"
                placeholder="Seach by city or industry"
                onChange={this.handleChange}
                className="input searchBar"
                id="searchBar"
                value={this.state.search}
                name="search"
              ></input>
            </div>
            <div className="searchChild2">
              <input
                type="submit"
                placeholder="Search"
                className="button"
                onClick={() => {
                  this.state.bool === false
                    ? this.getProfiles()
                    : this.getSearchedProfiles();
                }}
              ></input>
              &nbsp;
              <button
                className="button"
                onClick={() => {
                  this.getProfiles();
                  this.setState({
                    search: ""
                  });
                }}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
        <div className="profileCardParent">
          {this.state.match.map(match => {
            return (
              <div className="profileCard showProfile" key={match._id}>
                <div className="profileCardGrand1 grandchild">
                  {this.state.currentPop && this.state.show ? (
                    <Show
                      profile={this.state.currentPop[0]}
                      likes={this.state.currentPop[0].likes}
                      baseURL={this.props.baseURL}
                      getProfiles={this.getProfiles}
                      update={this.update}
                    />
                  ) : null}
                  <div id={match._id} onClick={this.togglePopUp}>
                    <img
                      className="profileImage"
                      src={match.image}
                      alt="profileImage"
                    ></img>
                    <br />
                    <span className="viewProfile">{this.state.text}</span>
                    <p>Hi, my name is</p>
                    <h4>
                      {" "}
                      <strong>{match.name}</strong>
                    </h4>
                  </div>{" "}
                </div>
                <div className="profileCardGrand2">
                  <p>Industry: {match.industry}</p>
                  <p>Years of Experience: {match.yearsOfExperience}</p>
                  <p>
                    {star} &nbsp;
                    {match.likes} / 5 rating
                  </p>
                  <strong>
                    <p id={match._id} onClick={this.togglePopUp}>
                      View Profile
                    </p>
                  </strong>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Main;
