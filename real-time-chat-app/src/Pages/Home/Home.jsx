import React from 'react'
import PostSide from '../../Compoenents/PostSide/PostSide'
import ProfileSide from '../../Compoenents/ProfileSide/ProfileSide'
import "./Home.css"

const Home = () => {
  return (
    <div className='Home'>
      <ProfileSide/>
      <PostSide/>
      <div className='rightside'>Rightside</div>
    </div>
  )
}

export default Home