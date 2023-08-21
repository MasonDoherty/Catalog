import React from "react";
import "./instagramStyles.css";
import ProfilePic from "../../../assets/images/profilePic.jpg";
import JellyBean from "../../../assets/images/JellyBean.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Instagram = () => {
  const info = {
    userName: "MasonDoherty",
  };
  return (
    <div>
      <div className="card">
        <div className="cardHeader">
          <img
            src={ProfilePic}
            alt="profilepicture"
            className="cardHeaderImg"
          />
          <div className="cardHeaderText">
            <p className="username">
              MasonDoherty{" "}
              <FontAwesomeIcon className="verifiedIcon" icon={faCertificate} />
            </p>
            <p className="location">Laguna Niguel, California</p>
          </div>
          <FontAwesomeIcon icon={faEllipsis} className="dots" />
        </div>
        <div>
          <img src={JellyBean} className="photo" alt="postPic" />
        </div>
        <div className="photoFooter">
          <div className="leftIcons">
            <FontAwesomeIcon icon={faHeart} className="footerIcons" />
            <FontAwesomeIcon icon={faComment} className="footerIcons" />
            <FontAwesomeIcon icon={faPaperPlane} className="footerIcons" />
          </div>
          <div className="rightIcon">
            <FontAwesomeIcon icon={faBookmark} />
          </div>
        </div>
        <div className="bottomText">
          <div className="likes">
            <p>451 likes</p>
          </div>
          <div className="messageSpace left-align">
            <div className="messageContent">
              <p className="message">
                <span className="info-username">{info.userName}</span> JellyBean
                decided I needed a day off of work today. I think I'll go to the
                park or the beach today while he works from home and puts in his
                portion of work around the house
              </p>
            </div>
          </div>
          <div className="comments">
            <p>View all 4 comments</p>
          </div>
        </div>
        <div className="cardFooter">
          <div className="commentphoto">
            <img
              src={ProfilePic}
              alt="profilepicture"
              className="cardfooterImg"
            />
          </div>
          <div className="createComment">
            <input
              type="text"
              placeholder="Add a comment..."
              className="createCommentInput"
            />
          </div>
        </div>
        <div className="hours">
          <p className="hoursText">2 hours ago</p>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
