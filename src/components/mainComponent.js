import React, { Component } from "react";
import Header from "./headerComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAmericas,
  faClock,
  faAddressCard,
  faUsers,
  faCamera,
  faEllipsisV,
  faShare,
  faComment,
  faLaughBeam,
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import Meme from '../assets/images/meme.webp';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <section id="top-area">
          <div className="profile-info">
            <div className="user-img">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" />
            </div>
            <div className="user-details">
              <h3>Chloe Grace Moretz</h3>
              <a href="update.html">Update info</a>
              <a href="view.html">View Activity</a>
            </div>
          </div>
        </section>

        <section id="content-area">
          <div className="side-column">
            <div className="widget-box intro">
              <div className="head">
                <div className="widget-icon-container">
                  <div className="widget-icon">
                    {" "}
                    <FontAwesomeIcon
                      className="fas"
                      icon={faGlobeAmericas}
                    />{" "}
                  </div>
                </div>
                <div className="widget-title"> Intro </div>
              </div>
              <div className="body">
                <h6></h6>
                <p></p>
                <p></p>
                <a href="#"> Update info</a>
              </div>
            </div>
            <div className="widget-box photos">
              <div className="head">
                <div className="widget-icon-container">
                  <div className="widget-icon">
                    {" "}
                    <FontAwesomeIcon
                      className="fas"
                      icon={faGlobeAmericas}
                    />{" "}
                  </div>
                </div>
                <div className="widget-title"> Intro </div>
              </div>
              <div className="body">
                <div className="pictures"></div>
                <div className="pictures"></div>
                <div className="pictures"></div>
                <div className="pictures"></div>
                <div className="pictures"></div>
                <div className="pictures"></div>
                <div className="pictures"></div>
                <div className="pictures"></div>
                <div className="pictures"></div>
              </div>
            </div>

            <div className="widget-box photos">
              <div className="head">
                <div className="widget-icon-container">
                  <div className="widget-icon">
                    {" "}
                    <FontAwesomeIcon
                      className="fas"
                      icon={faGlobeAmericas}
                    />{" "}
                  </div>
                </div>
                <div className="widget-title"> Intro </div>
              </div>
              <div className="body">
                <div className="pictures"></div>
                <div className="pictures"></div>
                <div className="pictures"></div>
                <div className="pictures"></div>
                <div className="pictures"></div>
                <div className="pictures"></div>
                <div className="pictures"></div>
                <div className="pictures"></div>
                <div className="pictures"></div>
              </div>
            </div>
          </div>
          <div className="main-area">
            <div className="widget-box submenu">
              <ul>
                <li>
                  <FontAwesomeIcon className="fas" icon={faClock} />
                  <span>Timeline</span>
                </li>
                <li>
                  <FontAwesomeIcon className="fas" icon={faAddressCard} />
                  <span>About</span>
                </li>
                <li>
                  <FontAwesomeIcon className="fas" icon={faUsers} />
                  <span>Friends</span>
                </li>
                <li>
                  <FontAwesomeIcon className="fas" icon={faCamera} />
                  <span>Photos</span>
                </li>
                <li>
                  <FontAwesomeIcon className="fas" icon={faEllipsisV} />
                </li>
              </ul>
            </div>
            <div className="widget-box post">
              <div className="head">
                <div>
                  <div className="user-img-container">
                    <div className="user-img"></div>
                  </div>
                </div>
                <div className="post-info">
                  <span className="user-info">
                    <a href="#">Chloe Grace Moretz</a> shared a{" "}
                    <a href="#">link</a>.
                  </span>
                  <span className="post-date">
                    Feb 19 at 10:35 AM via Instagram
                  </span>
                </div>
              </div>
              <div className="body">
                <div className="post-img">
                  <img src={Meme} alt="" />
                </div>
                <div className="top-icons">
                  <FontAwesomeIcon className="far" icon={faThumbsUp} />
                  <FontAwesomeIcon className="fas" icon={faShare} />
                  <span>
                    <FontAwesomeIcon className="fas" icon={faComment} />
                  </span>
                </div>
                <div className="post-comments">
                  <div className="user-img">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt=""
                    />
                  </div>
                  <div className="user-comment">
                    <div className="user-info">
                      <a href="#">John Doe</a>
                      <span className="time"> 11:09 AM </span>
                    </div>
                  </div>
                  <p>Hey this is funny great meme!!!</p>
                </div>
                <div className="post-form">
                  <div className="user-img">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt=""
                    />
                  </div>
                  <div className="form-info">
                    <input type="text" placeholder="Write a comment..." />
                    <div className="icons">
                      <FontAwesomeIcon className="fas" icon={faCamera} />
                      <FontAwesomeIcon className="fas" icon={faLaughBeam} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
