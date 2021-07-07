import React from "react";
import ProfilePhoto from "./profilePhoto.jpg";
import "./Setting.css";
import { MdEdit } from "react-icons/md";
import { useAuth } from "../../Authentication/Auth0";

export default function Home () {
  let Auth =  useAuth()
  
  
      const [ProfilePhoto, setProfilePhoto] = React.useState(ProfilePhoto)
      const [adminName, setadminName]  = React.useState("Oluwasegun Are")
      const [adminEmail, setadminEmail] = React.useState(" Oluwasegunare@atata57.com")
      const [newPassword, setNewPassword] = React.useState("")
      const [retypePassword, setPassword] = React.useState("")
      const [disabled, setDisabled] = React.useState(false)
      const [role, setRole] = React.useState("Top Level")
      const [department, setDept] = React.useState("Information Technology")

    return (
      <div className="container">
        <div className="image-container">
          <div className="user-details">
            <p>{adminName}</p>
            <span>{adminEmail}</span>
            <span>{department}</span>
            <span>{role} Admin</span>
          </div>
          <div className="profile-photo">
            <img src={ProfilePhoto} alt="profilePhoto" />
          </div>
        </div>
        <div className="password">
            <p>Password Reset</p>
            <div className="password-input">
              <div className="input-group">
                <input
                  type="password"
                  name="newPassword"
                  disabled={disabled ? "" : "disabled"}
                  value={newPassword}
                  placeholder="Enter New Password"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <span>
                  <MdEdit
                  // onClick={this.handleEnable}
                   />
                </span>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="retypePassword"
                  value={retypePassword}
                  disabled={disabled ? "" : "disabled"}
                  placeholder="retype New Password"
                  // onChange={(e) => }
                />
                <span>
                  <MdEdit
                  // onClick={this.handleEnable}
                  />
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
