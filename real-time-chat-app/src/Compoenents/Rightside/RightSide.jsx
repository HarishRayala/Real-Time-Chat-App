import React from 'react'
import Home from "../../img/home.png";
import {AiFillSetting} from "react-icons/ai"
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import "./RightSide.css"
import TrendCard from '../TrendCard/TrendCard';
import {Button} from "@chakra-ui/react"

const RightSide = () => {
  return (
    <div className="rightside">
      <div className="navicons">
        <img src={Home} alt="" />
        <AiFillSetting/>
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
        <TrendCard/>
        <Button sx={{backgroundColor:"#ffc008",width:"80%",alignSelf:"center",height:"3rem",fontSize:"12px"}}>
          Share
        </Button>
    </div>
  )
}

export default RightSide