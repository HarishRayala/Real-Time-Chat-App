import React from 'react'
import "./Post.css"
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'

const Post = ({data,id}) => {
  return (
    <div className="post">
      <img src={data.img} alt="postpic" />
      <div className="postreact">
        <img src={data.liked?Heart : NotLike} alt="postreact" />
        <img src={Comment} alt="post react" />
        <img src={Share} alt="postreact" />
      </div>
      <span style={{color:"grey",fontSize:"12px"}}>{data.likes}Likes</span>
      <div className="detail">
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
      </div>
    </div>
  )
}

export default Post