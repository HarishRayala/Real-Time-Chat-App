import React from 'react'
import ProfileSide from '../../Compoenents/ProfileSide/ProfileSide'
import "./Home.css"

const Home = () => {
  return (
    <div className='Home'>
      <ProfileSide/>
      <div className='postside'>Post</div>
      <div className='rightside'>Rightside</div>
    </div>
  )
}

export default Home