import "./header.css";
import Logo from "../../Logo.png";
import { menuitem } from "../../Data.json";
import { Link } from "react-router-dom";
import { BsGrid3X3Gap } from "react-icons/bs";
import { IoChevronDownSharp } from "react-icons/io5";
import ProfilePhoto from "./profilePhoto.jpg";
import data from "../../Data.json"
import { useState, useEffect } from "react";
import { useAuth } from "../../Authentication/Auth0";
import {getStorageData} from "../../Authentication/auth_data"

function Header() {

  let auth = useAuth()

  useEffect(() => {
    setAdmin(getStorageData("user"))
  },[])
  const [admin, setAdmin] = useState()
  const [selectValue, setSelectValue] = useState("")
  const [searchContent, setSearchContent] = useState("")
  const [menuItems, setMenuItems] = useState(menuitem)
  const [getScreenSize, setGetScreenSize] = useState(window.screen.width)
  const [remainedMenu, setRemainMenu] = useState([])
  const [show, setShow] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [dropDown, setDropDown] = useState(false)

console.log(admin)
const handleClick = () => {
  setClicked(!clicked)
}
const handleDropdown = () => {
  setDropDown(!dropDown)
}
const handleLogout = () => {
  auth.logout()
}

return (
  <header>
    <div className="header-center">
      <div className="Logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="search">
        <select
          name="selectValue"
          onChange={(e) => setSelectValue(e.target.value)}
          value={selectValue}
        >
          <option value="All">All</option>
          <option value="CustomerId">Customer Id</option>
          <option value="CustomerName">Customer Name</option>
          <option value="ItemId">Item Id</option>
          <option value="ItemName">Item Name</option>
        </select>
        <input
          value={searchContent}
          name="searchContent"
          onChange={(e) => setSearchContent(e.target.value)}
          placeholder="Search"
        />
      </div>
      <div className="account">
        <div className="profile" onClick={handleDropdown}>
          <div className="profile-img">
            <img src={ProfilePhoto} alt="profilephoto" />
          </div>
          <div className="profile-name">
            <p>{admin.first_name} {admin.last_name}</p>
            <span>
              <IoChevronDownSharp />
            </span>
          </div>
        </div>
        <div className={dropDown ? "account-dropdown" : "hidden"}>
        <p>{admin.first_name} {admin.last_name}</p>
          <span>Role: {admin.role} </span>
          <div className="link">
            <Link to="/setting">
              Setting
            </Link>
            <Link onClick={handleLogout}>
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
      {menuItems.map((navItem) => (
        <li key={navItem.id}>
          <Link to={navItem.menuLink}>{navItem.menuTitle}</Link>
        </li>
      ))}
      <li
        className={show ? "more" : "hidden"}
        onClick={handleClick}
      >
        Menu <IoChevronDownSharp />
      </li>
      <div className={clicked ? "dropdown" : "hidden"}>
        {remainedMenu.map((menu) => (
          <li key={menu.id}>
            <Link to={menu.menuLink}>{menu.menuTitle}</Link>
          </li>
        ))}
      </div>
    </nav>
  </header>
);
}
export default Header;
