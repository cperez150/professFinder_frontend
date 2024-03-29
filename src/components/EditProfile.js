import React, { Component } from "react";
import axios from "axios";
import "bulma/css/bulma.css";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      city: "",
      industry: "",
      yearsOfExperience: 0,
      image: "",
      likes: 0,
      phone: "",
      email: "",
      specialties: [],
      availableToMeet: true,
      showEdit: false,
      profile: this.props.profile
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({
      name: this.props.profile.name,
      city: this.props.profile.city,
      industry: this.props.profile.industry,
      yearsOfExperience: this.props.profile.yearsOfExperience,
      image: this.props.profile.image,
      likes: this.props.profile.likes,
      phone: this.props.profile.phone,
      email: this.props.profile.email,
      specialties: this.props.profile.specialties,
      availableToMeet: this.props.profile.availableToMeet
    });
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  async handleEditSubmit(event) {
    console.log("clicked Submit");
    try {
      event.preventDefault();
      const url = `${this.props.baseURL}/profiles/${this.props.profile._id}`;
      console.log(url);
      const reload = {
        name: this.state.name,
        city: this.state.city,
        industry: this.state.industry,
        yearsOfExperience: this.state.yearsOfExperience,
        image: this.state.image,
        likes: this.state.likes,
        phone: this.state.phone,
        email: this.state.email,
        specialties: this.state.specialties,
        availableToMeet: this.state.availableToMeet
      };
      const updatedProfile = await axios.put(url, reload);
      console.log(updatedProfile.profile.name);
      this.setState({
        name: this.state.name,
        city: this.state.city,
        industry: this.state.industry,
        yearsOfExperience: this.state.yearsOfExperience,
        image: this.state.image,
        likes: this.state.likes,
        phone: this.state.phone,
        email: this.state.email,
        specialties: this.state.specialties,
        availableToMeet: this.state.availableToMeet
      });
    } catch (err) {}
    this.setState({
      showEdit: false
    });
    this.props.getProfiles();
    this.props.update();
  }

  togglePopUp() {
    this.setState({
      showEdit: !this.state.showEdit
    });
  }

  edit() {
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Edit Profile</p>
            <button
              className="delete"
              aria-label="close"
              onClick={this.props.update}
            ></button>
          </header>
          <section className="modal-card-body">
            <form onSubmit={this.handleEditSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    id="name"
                    name="name"
                    onChange={this.handleOnChange}
                    value={this.state.name}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="city" className="inline">
                  City
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    id="city"
                    name="city"
                    onChange={this.handleOnChange}
                    value={this.state.city}
                  />{" "}
                </div>
              </div>
              <div className="field">
                <label htmlFor="state" className="inline">
                  Industry <br />
                </label>
                <div className="control select">
                  <select
                    className="select"
                    value={this.state.value}
                    onChange={this.handleOnChange}
                    name="industry"
                    id="industry"
                    form="editProfile"
                  >
                    <option value="Accounting">Accounting</option>
                    <option value="Airlines/Aviation">Airlines/Aviation</option>
                    <option value="Alternative Dispute Resolution">
                      Alternative Dispute Resolution
                    </option>
                    <option value="Alternative Medicine">
                      Alternative Medicine
                    </option>
                    <option value="Animation">Animation</option>
                    <option value="Apparel/Fashion">Apparel/Fashion</option>
                    <option value="Architecture/Planning">
                      Architecture/Planning
                    </option>
                    <option value="Arts/Crafts">Arts/Crafts</option>
                    <option value="Automotive">Automotive</option>
                    <option value="Aviation/Aerospace">
                      Aviation/Aerospace
                    </option>
                    <option value="Banking/Mortgage">Banking/Mortgage</option>
                    <option value="Biotechnology/Greentech">
                      Biotechnology/Greentech
                    </option>
                    <option value="Broadcast Media">Broadcast Media</option>
                    <option value="Building Materials">
                      Building Materials
                    </option>
                    <option value="Business Supplies/Equipment">
                      Business Supplies/Equipment
                    </option>
                    <option value="Capital Markets/Hedge Fund/Private Equity">
                      Capital Markets/Hedge Fund/Private Equity
                    </option>
                    <option value="Chemicals">Chemicals</option>
                    <option value="Civic/Social Organization">
                      Civic/Social Organization
                    </option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Commercial Real Estate">
                      Commercial Real Estate
                    </option>
                    <option value="Computer Games">Computer Games</option>
                    <option value="Computer Hardware">Computer Hardware</option>
                    <option value="Computer Networking">
                      Computer Networking
                    </option>
                    <option value="Computer Software/Engineering">
                      Computer Software/Engineering
                    </option>
                    <option value="Computer/Network Security">
                      Computer/Network Security
                    </option>
                    <option value="Construction">Construction</option>
                    <option value="Consumer Electronics">
                      Consumer Electronics
                    </option>
                    <option value="Consumer Goods">Consumer Goods</option>
                    <option value="Consumer Services">Consumer Services</option>
                    <option value="Cosmetics">Cosmetics</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Defense/Space">Defense/Space</option>
                    <option value="Design">Design</option>
                    <option value="E-Learning">E-Learning</option>
                    <option value="Education Management">
                      Education Management
                    </option>
                    <option value="Electrical/Electronic Manufacturing">
                      Electrical/Electronic Manufacturing
                    </option>
                    <option value="Entertainment/Movie Production">
                      Entertainment/Movie Production
                    </option>
                    <option value="Environmental Services">
                      Environmental Services
                    </option>
                    <option value="Events Services">Events Services</option>
                    <option value="Executive Office">Executive Office</option>
                    <option value="Facilities Services">
                      Facilities Services
                    </option>
                    <option value="Farming">Farming</option>
                    <option value="Financial Services">
                      Financial Services
                    </option>
                    <option value="Fine Art">Fine Art</option>
                    <option value="Fishery">Fishery</option>
                    <option value="Food Production">Food Production</option>
                    <option value="Food/Beverages">Food/Beverages</option>
                    <option value="Fundraising">Fundraising</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Gambling/Casinos">Gambling/Casinos</option>
                    <option value="Glass/Ceramics/Concrete">
                      Glass/Ceramics/Concrete
                    </option>
                    <option value="Government Administration">
                      Government Administration
                    </option>
                    <option value="Government Relations">
                      Government Relations
                    </option>
                    <option value="Graphic Design/Web Design">
                      Graphic Design/Web Design
                    </option>
                    <option value="Health/Fitness">Health/Fitness</option>
                    <option value="Higher Education/Acadamia">
                      Higher Education/Acadamia
                    </option>
                    <option value="Hospital/Health Care">
                      Hospital/Health Care
                    </option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Human Resources/HR">
                      Human Resources/HR
                    </option>
                    <option value="Import/Export">Import/Export</option>
                    <option value="Individual/Family Services">
                      Individual/Family Services
                    </option>
                    <option value="Industrial Automation">
                      Industrial Automation
                    </option>
                    <option value="Information Services">
                      Information Services
                    </option>
                    <option value="Information Technology/IT">
                      Information Technology/IT
                    </option>
                    <option value="Insurance">Insurance</option>
                    <option value="International Affairs">
                      International Affairs
                    </option>
                    <option value="International Trade/Development">
                      International Trade/Development
                    </option>
                    <option value="Internet">Internet</option>
                    <option value="Investment Banking/Venture">
                      Investment Banking/Venture
                    </option>
                    <option value="Investment Management/Hedge Fund/Private Equity">
                      Investment Management/Hedge Fund/Private Equity
                    </option>
                    <option value="Judiciary">Judiciary</option>
                    <option value="Law Enforcement">Law Enforcement</option>
                    <option value="Law Practice/Law Firms">
                      Law Practice/Law Firms
                    </option>
                    <option value="Legal Services">Legal Services</option>
                    <option value="Legislative Office">
                      Legislative Office
                    </option>
                    <option value="Leisure/Travel">Leisure/Travel</option>
                    <option value="Library">Library</option>
                    <option value="Logistics/Procurement">
                      Logistics/Procurement
                    </option>
                    <option value="Luxury Goods/Jewelry">
                      Luxury Goods/Jewelry
                    </option>
                    <option value="Machinery">Machinery</option>
                    <option value="Management Consulting">
                      Management Consulting
                    </option>
                    <option value="Maritime">Maritime</option>
                    <option value="Market Research">Market Research</option>
                    <option value="Marketing/Advertising/Sales">
                      Marketing/Advertising/Sales
                    </option>
                    <option value="Mechanical or Industrial Engineering">
                      Mechanical or Industrial Engineering
                    </option>
                    <option value="Media Production">Media Production</option>
                    <option value="Medical Equipment">Medical Equipment</option>
                    <option value="Medical Practice">Medical Practice</option>
                    <option value="Mental Health Care">
                      Mental Health Care
                    </option>
                    <option value="Military Industry">Military Industry</option>
                    <option value="Mining/Metals">Mining/Metals</option>
                    <option value="Motion Pictures/Film">
                      Motion Pictures/Film
                    </option>
                    <option value="Museums/Institutions">
                      Museums/Institutions
                    </option>
                    <option value="Music">Music</option>
                    <option value="Nanotechnology">Nanotechnology</option>
                    <option value="Newspapers/Journalism">
                      Newspapers/Journalism
                    </option>
                    <option value="Non-Profit/Volunteering">
                      Non-Profit/Volunteering
                    </option>
                    <option value="Oil/Energy/Solar/Greentech">
                      Oil/Energy/Solar/Greentech
                    </option>
                    <option value="Online Publishing">Online Publishing</option>
                    <option value="Other Industry">Other Industry</option>
                    <option value="Outsourcing/Offshoring">
                      Outsourcing/Offshoring
                    </option>
                    <option value="Package/Freight Delivery">
                      Package/Freight Delivery
                    </option>
                    <option value="Packaging/Containers">
                      Packaging/Containers
                    </option>
                    <option value="Paper/Forest Products">
                      Paper/Forest Products
                    </option>
                    <option value="Performing Arts">Performing Arts</option>
                    <option value="Pharmaceuticals">Pharmaceuticals</option>
                    <option value="Philanthropy">Philanthropy</option>
                    <option value="Photography">Photography</option>
                    <option value="Plastics">Plastics</option>
                    <option value="Political Organization">
                      Political Organization
                    </option>
                    <option value="Primary/Secondary Education">
                      Primary/Secondary Education
                    </option>
                    <option value="Printing">Printing</option>
                    <option value="Professional Training">
                      Professional Training
                    </option>
                    <option value="Program Development">
                      Program Development
                    </option>
                    <option value="Public Relations/PR">
                      Public Relations/PR
                    </option>
                    <option value="Public Safety">Public Safety</option>
                    <option value="Publishing Industry">
                      Publishing Industry
                    </option>
                    <option value="Railroad Manufacture">
                      Railroad Manufacture
                    </option>
                    <option value="Ranching">Ranching</option>
                    <option value="Real Estate/Mortgage">
                      Real Estate/Mortgage
                    </option>
                    <option value="Recreational Facilities/Services">
                      Recreational Facilities/Services
                    </option>
                    <option value="Religious Institutions">
                      Religious Institutions
                    </option>
                    <option value="Renewables/Environment">
                      Renewables/Environment
                    </option>
                    <option value="Research Industry">Research Industry</option>
                    <option value="Restaurants">Restaurants</option>
                    <option value="Retail Industry">Retail Industry</option>
                    <option value="Security/Investigations">
                      Security/Investigations
                    </option>
                    <option value="Semiconductors">Semiconductors</option>
                    <option value="Shipbuilding">Shipbuilding</option>
                    <option value="Sporting Goods">Sporting Goods</option>
                    <option value="Sports">Sports</option>
                    <option value="Staffing/Recruiting">
                      Staffing/Recruiting
                    </option>
                    <option value="Supermarkets">Supermarkets</option>
                    <option value="Telecommunications">
                      Telecommunications
                    </option>
                    <option value="Textiles">Textiles</option>
                    <option value="Think Tanks">Think Tanks</option>
                    <option value="Tobacco">Tobacco</option>
                    <option value="Translation/Localization">
                      Translation/Localization
                    </option>
                    <option value="Transportation">Transportation</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Venture Capital/VC">
                      Venture Capital/VC
                    </option>
                    <option value="Veterinary">Veterinary</option>
                    <option value="Warehousing">Warehousing</option>
                    <option value="Wholesale">Wholesale</option>
                    <option value="Wine/Spirits">Wine/Spirits</option>
                    <option value="Wireless">Wireless</option>
                    <option value="Writing/Editing">Writing/Editing</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="yearsOfExperience" className="inline">
                  Years of Experience
                </label>
                <input
                  className="input"
                  type="text"
                  id="yearsOfExperience"
                  name="yearsOfExperience"
                  onChange={this.handleOnChange}
                  value={this.state.yearsOfExperience}
                />
              </div>
              <div className="field">
                <label htmlFor="image" className="inline">
                  Profile Image Url:
                </label>
                <input
                  className="input"
                  type="text"
                  id="image"
                  name="image"
                  onChange={this.handleOnChange}
                  value={this.state.image}
                />
              </div>
              <div className="field">
                <label htmlFor="likes" className="inline">
                  Likes:
                </label>
                <input
                  className="input"
                  type="number"
                  id="likes"
                  name="likes"
                  onChange={this.handleOnChange}
                  value={this.state.likes}
                />
              </div>
              <div className="field">
                <label htmlFor="phone" className="inline">
                  Phone:
                </label>
                <input
                  className="input"
                  type="text"
                  id="phone"
                  name="phone"
                  onChange={this.handleOnChange}
                  value={this.state.phone}
                />
              </div>
              <div className="field">
                <label htmlFor="email" className="inline">
                  Email:
                </label>
                <input
                  className="input"
                  type="text"
                  id="email"
                  name="email"
                  onChange={this.handleOnChange}
                  value={this.state.email}
                />
              </div>
              <div className="field">
                <label htmlFor="specialties" className="inline">
                  Specialties
                </label>
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      id="specialties"
                      name="specialties"
                      onChange={this.handleOnChange}
                      value={this.state.specialties}
                    />
                  </div>
                </div>
              </div>
              <div className="field">
                Available To Meet?
                <div className="controlToggle">
                  <label className="switch">
                    <input
                      type="checkbox"
                      id="availableToMeet"
                      name="availableToMeet"
                      onChange={this.handleOnChange}
                      value={this.state.availableToMeet}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              <footer className="modal-card-foot">
                <input
                  className="button is-dark"
                  type="submit"
                  value="Submit"
                />
              </footer>
            </form>
          </section>
        </div>
      </div>
    );
  }

  render() {
    const showEditForm = this.state.showEdit ? this.edit() : null;
    return (
      <div>
        <button
          className="button is-outlined is-small"
          onClick={() => {
            this.togglePopUp();
          }}
        >
          Edit
        </button>
        {showEditForm}
      </div>
    );
  }
}
export default EditProfile;
