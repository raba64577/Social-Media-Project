import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBell,
  faLock,
  faComments,
  faSearch,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo-area">
          <a href="index.html">Logo</a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="chloe.html">Chloe</a>
            </li>
            <li>
              <a href="chloe.html">Home</a>
            </li>
          </ul>
        </div>
        <div className="icon-links">
          <ul className="quick-options">
            <li>
              <a href="chloe.html">
                <FontAwesomeIcon className="fas" icon={faUsers} />
              </a>
            </li>
            <li>
              <a href="chloe.html">
                <FontAwesomeIcon className="fas" icon={faComments} />
              </a>
            </li>
            <li>
              <a href="chloe.html">
                <FontAwesomeIcon className="fas" icon={faBell} />
              </a>
            </li>
          </ul>
          <div className="privacy">
            <FontAwesomeIcon className="fas" icon={faLock} />
          </div>
        </div>
        <div className="search-area">
          <ul>
            <li>
              <FontAwesomeIcon className="fas" icon={faSearch} />
            </li>
            <li>
              <input type="text" name="search" />
            </li>
            <li>
              <FontAwesomeIcon className="fas" icon={faTimes} />
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
