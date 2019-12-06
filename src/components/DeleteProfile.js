import React, { Component } from "react";
import axios from "axios";

class DeleteProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: []
    };
    this.deleteProfile = this.deleteProfile.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  refreshPage() {
    window.location.reload(false);
  }

  async getProfile() {
    const apiData = await axios(`${this.props.baseURL}/profiles`);
    const data = apiData.data;

    this.setState({
      profile: data
    });
  }

  async deleteProfile(id) {
    console.log("delete clicked");
    await axios.delete(`${this.props.baseURL}/profiles/${id}`);
    const filteredProfiles = this.state.profiles.filter(profile => {
      return profile._id !== id;
    });
    this.setState({
      profiles: filteredProfiles
    });
    this.props.getProfiles();
    this.props.update();
  }

  render() {
    return (
      <button
        className="button is-outlined is-small"
        onClick={() => this.deleteProfile(this.props.profile._id)}
      >
        Delete
      </button>
    );
  }
}

export default DeleteProfile;
