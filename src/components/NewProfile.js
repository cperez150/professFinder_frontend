import React, { Component } from "react";
import axios from "axios";
import "bulma/css/bulma.css";

class NewProfile extends Component {
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
      availableToMeet: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleIndustryChange = this.handleIndustryChange.bind(this);
    this.handleYearsOfExperienceChange = this.handleYearsOfExperienceChange.bind(
      this
    );
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleLikesChange = this.handleLikesChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSpecialtiesChange = this.handleSpecialtiesChange.bind(this);
    this.handleAvailableChange = this.handleAvailableChange.bind(this);
    console.log(this.state.name);
    console.log(this.state.availableToMeet);
  }

  handleNameChange(event) {
    this.setState({ name: event.currentTarget.value });
  }
  handleCityChange(event) {
    this.setState({ city: event.currentTarget.value });
  }
  handleIndustryChange(event) {
    this.setState({ industry: event.currentTarget.value });
  }
  handleYearsOfExperienceChange(event) {
    this.setState({ yearsOfExperience: event.currentTarget.value });
  }
  handleImageChange(event) {
    this.setState({ image: event.currentTarget.value });
  }
  handleLikesChange(event) {
    this.setState({ likes: event.currentTarget.value });
  }
  handlePhoneChange(event) {
    this.setState({ phone: event.currentTarget.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.currentTarget.value });
  }
  handleSpecialtiesChange(event) {
    this.setState({ specialties: event.currentTarget.value });
  }
  handleAvailableChange(event) {
    this.setState({ availableToMeet: event.currentTarget.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const response = await axios.post(`${this.props.baseURL}/profiles`, {
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
    this.setState({
      name: "",
      city: "",
      industry: "",
      yearsOfExperience: 0,
      image: "",
      likes: 0,
      contactInfo: {
        phone: "",
        email: ""
      },
      specialties: [],
      availableToMeet: true
    });
    this.props.handleAddProfile(response.data);
    window.location.reload(false);
    this.props.togglePopUp();
  }

  render() {
    return (
      <div>
        <div className="newProfileInfo">
          <form className="newProfile" onSubmit={this.handleSubmit}>
            <img
              className="newProfileLogo"
              src="./images/professLogoTeal.png"
              alt="ProfessFinder Logo"
            />
            <h4 className="newProfileH4">
              Create your profile for potential customers to find you!
            </h4>
            <div className="field">
              <label htmlFor="name">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="name"
                  name="name"
                  onChange={this.handleNameChange}
                  value={this.state.name}
                  placeholder="add name"
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
                  onChange={this.handleCityChange}
                  value={this.state.city}
                  placeholder="add city"
                />{" "}
              </div>
            </div>
            <div className="field">
              <label htmlFor="state" className="inline">
                Industry
              </label>
              <div className="control">
                {/* <input
                  className="input"
                  type="text"
                  id="industry"
                  name="industry"
                  onChange={this.handleIndustryChange}
                  value={this.state.industry}
                  placeholder="add industry"
                />
              </div> */}

                <select
                  className="select"
                  value={this.state.value}
                  onChange={this.handleIndustryChange}
                  name="industry"
                  id="industry"
                  form="newProfile"
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
                  <option value="Aviation/Aerospace">Aviation/Aerospace</option>
                  <option value="Banking/Mortgage">Banking/Mortgage</option>
                  <option value="Biotechnology/Greentech">
                    Biotechnology/Greentech
                  </option>
                  <option value="Broadcast Media">Broadcast Media</option>
                  <option value="Building Materials">Building Materials</option>
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
                  <option value="Financial Services">Financial Services</option>
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
                  <option value="Human Resources/HR">Human Resources/HR</option>
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
                  <option value="Legislative Office">Legislative Office</option>
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
                  <option value="Mental Health Care">Mental Health Care</option>
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
                  <option value="Telecommunications">Telecommunications</option>
                  <option value="Textiles">Textiles</option>
                  <option value="Think Tanks">Think Tanks</option>
                  <option value="Tobacco">Tobacco</option>
                  <option value="Translation/Localization">
                    Translation/Localization
                  </option>
                  <option value="Transportation">Transportation</option>
                  <option value="Utilities">Utilities</option>
                  <option value="Venture Capital/VC">Venture Capital/VC</option>
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
                onChange={this.handleYearsOfExperienceChange}
                value={this.state.yearsOfExperience}
                placeholder="add years of experience in industry"
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
                onChange={this.handleImageChange}
                value={this.state.image}
                placeholder="add profile picture url"
              />
            </div>
            <div className="field">
              <label htmlFor="likes" className="inline">
                Rating (1-5 stars):
              </label>
              <input
                className="input"
                type="number"
                id="likes"
                name="likes"
                onChange={this.handleLikesChange}
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
                onChange={this.handlePhoneChange}
                value={this.state.phone}
                placeholder="Phone number"
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
                onChange={this.handleEmailChange}
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
                    onChange={this.handleSpecialtiesChange}
                    value={this.state.specialties}
                    placeholder="specialties"
                  />
                </div>
              </div>
            </div>
            <div className="field">
              Available To Meet?
              <div className="control">
                <label className="switch">
                  <input
                    type="checkbox"
                    id="availableToMeet"
                    name="availableToMeet"
                    onChange={this.handleAvailableChange}
                    value={this.state.availableToMeet}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
            <input
              className="button is-dark"
              type="submit"
              value="Add Profile"
            />
          </form>
          <br />
        </div>
      </div>
    );
  }
}

export default NewProfile;
