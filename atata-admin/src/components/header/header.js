import "./header.css";
import Logo from "../../Logo.png";
import { Component } from "react";
import { menuitem } from "../../Data.json";
import { Link } from "react-router-dom";
import { BsGrid3X3Gap } from "react-icons/bs";
import { IoChevronDownSharp } from "react-icons/io5";
import ProfilePhoto from "./profilePhoto.jpg";
import data from "../../Data.json"

class Header extends Component {
  constructor() {
    super();
    this.state = {
      admin: data.user,
      selectValue: "",
      searchContent: "",
      menuItems: menuitem,
      getScreenSize: window.screen.width,
      remainedMenu: [],
      show: false,
      clicked: false,
      dropDown: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleClick() {
    if (this.state.clicked === false) {
      this.setState({
        clicked: true,
      });
    } else {
      this.setState({
        clicked: false,
      });
    }
  }
  handleDropdown() {
    if (this.state.dropDown === false) {
      this.setState({
        dropDown: true,
      });
    } else {
      this.setState({
        dropDown: false,
      });
    }
  }
  componentDidMount() {
    if (this.state.getScreenSize <= 580) {
      this.setState({
        menuItems: menuitem.slice(0, 3),
        remainedMenu: menuitem.slice(3, 7),
        show: true,
      });
    } else if (
      this.state.getScreenSize <= 770 &&
      this.state.getScreenSize > 580
    ) {
      this.setState({
        menuItems: menuitem.slice(0, 4),
        remainedMenu: menuitem.slice(4, 7),
        show: true,
      });
    }
  }

  render() {

    return (
      <header>
       
        <div className="header-center">
          <div className="Logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="search">
            <select
              name="selectValue"
              onChange={this.handleChange}
              value={this.state.selectValue}
            >
              <option value="All">All</option>
              <option value="CustomerId">Customer Id</option>
              <option value="CustomerName">Customer Name</option>
              <option value="ItemId">Item Id</option>
              <option value="ItemName">Item Name</option>
            </select>
            <input
              value={this.state.searchContent}
              name="searchContent"
              onChange={this.handleChange}
              placeholder="Search"
            />
          </div>
          <div className="account">
            <div className="profile" onClick={this.handleDropdown}>
              <div className="profile-img">
                <img src={ProfilePhoto} alt="profilephoto" />
              </div>
              <div className="profile-name">
                <p>{this.state.admin[0].adminName}</p>
                <span>
                  <IoChevronDownSharp />
                </span>
              </div>
            </div>
            <div className={this.state.dropDown ? "account-dropdown" :  "hidden"}>
             <p> {this.state.admin[0].adminName} </p>
             <span>Role: {this.state.admin[0].role} </span>
              <div className="link">
                <Link to="/setting">
                  Setting
                </Link>
                <Link to="/logout">
                  Logout
                </Link>
              </div>
             
            </div>
          </div>
        </div>
        <nav>
          <p>
            <BsGrid3X3Gap />
          </p>
          {this.state.menuItems.map((navItem) => (
            <li key={navItem.id}>
              <Link to={navItem.menuLink}>{navItem.menuTitle}</Link>
            </li>
          ))}
          <li
            className={this.state.show ? "more" : "hidden"}
            onClick={this.handleClick}
          >
            Menu <IoChevronDownSharp />
          </li>
          <div className={this.state.clicked ? "dropdown" : "hidden"}>
            {this.state.remainedMenu.map((menu) => (
              <li key={menu.id}>
                <Link to={menu.menuLink}>{menu.menuTitle}</Link>
              </li>
            ))}
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
