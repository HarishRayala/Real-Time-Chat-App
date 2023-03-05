import React from 'react'
import PostSide from '../../Compoenents/PostSide/PostSide'
import ProfileCard from '../../Compoenents/ProfileCard/ProfileCard'
import ProfileLeft from '../../Compoenents/ProfileLeft/ProfileLeft'
import RightSide from '../../Compoenents/Rightside/RightSide'
import "./Profile.css"

const Profile = () => {
  return (
    <div className="profile">
        <ProfileLeft/>
        <div className="profile-center">
          <ProfileCard/>
          <PostSide/>
        </div>
        <RightSide/>
    </div>
  )
}

export default Profile