import React, { Component } from "react";
import ProfilePhoto from "./profilePhoto.jpg";
import "./Setting.css";
import { MdEdit } from "react-icons/md";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      ProfilePhoto: ProfilePhoto,
      adminName: " Oluwasegun Are",
      adminEmail: " Oluwasegunare@atata57.com",
      newPassword: "",
      retypePassword: "",
      disabled: false,
      role: "Top Level",
      department: "Information Technology",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEnable = this.handleEnable.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleEnable() {
    this.setState({
      disabled: !this.state.disabled,
    });
  }
  render() {
    return (
      <div className="container">
        <div className="image-container">
          <div className="user-details">
            <p>{this.state.adminName}</p>
            <span>{this.state.adminEmail}</span>
            <span>{this.state.department}</span>
            <span>{this.state.role} Admin</span>
          </div>
          <div className="profile-photo">
            <img src={this.state.ProfilePhoto} alt="profilePhoto" />
          </div>
        </div>
        <div className="password">
            <p>Password Reset</p>
            <div className="password-input">
              <div className="input-group">
                <input
                  type="password"
                  name="newPassword"
                  disabled={this.state.disabled ? "" : "disabled"}
                  value={this.state.newPassword}
                  placeholder="Enter New Password"
                  onChange={this.handleChange}
                />
                <span>
                  <MdEdit onClick={this.handleEnable} />
                </span>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="retypePassword"
                  value={this.state.retypePassword}
                  disabled={this.state.disabled ? "" : "disabled"}
                  placeholder="retype New Password"
                  onChange={this.handleChange}
                />
                <span>
                  <MdEdit onClick={this.handleEnable} />
                </span>
              </div>
              <div className="input-group">
                <button>Save</button>
              </div>
            </div>
            </div>
      </div>
    );
  }
}
