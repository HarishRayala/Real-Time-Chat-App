import React from "react";
import coverimage from "../../img/cover.jpg";
import profileimage from "../../img/profileImg.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  const Profilepage = true;
  return (
    <div className="profilecard">
      <div className="profileimages">
        <img src={coverimage} alt="coverimage" />
        <img src={profileimage} alt="profileimage" />
      </div>
      <div className="profilename">
        <span>Diya</span>
        <span>Full stack Web Developer</span>
      </div>
      <div className="followstatus">
        <hr />
        <div>
          <div className="follow">
            <span>300</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>6000</span>
            <span>Followers</span>
          </div>
          {Profilepage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {Profilepage ? "" : <span>MyProfile</span>}
    </div>
  );
};

export default ProfileCard;
