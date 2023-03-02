import React from 'react'
import PostSide from '../../Compoenents/PostSide/PostSide'
import ProfileSide from '../../Compoenents/ProfileSide/ProfileSide'
import RightSide from '../../Compoenents/Rightside/RightSide'
import "./Home.css"

const Home = () => {
  return (
    <div className='Home'>
      <ProfileSide/>
      <PostSide/>
      <RightSide/>
    </div>
  )
}

export default Home