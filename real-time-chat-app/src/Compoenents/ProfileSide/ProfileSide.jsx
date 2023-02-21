import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../Profile/ProfileCard'
import "./ProfileSide.css"

const ProfileSide = () => {
  return (
    <div className='profileside'>
            <LogoSearch/>
            <ProfileCard/>
            <FollowersCard/>
    </div>
  )
}

export default ProfileSide