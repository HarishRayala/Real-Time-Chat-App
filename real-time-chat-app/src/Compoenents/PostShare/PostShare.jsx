import React,{useState,useRef} from "react";
import "./PostShare.css";
import profileimg from "../../img/profileImg.jpg";
import { GrGallery, GrLocation, GrSchedule } from "react-icons/gr";
import { AiOutlinePlayCircle } from "react-icons/ai";
import {Button} from "@chakra-ui/react"

const PostShare = () => {
    const [image,setImage]=useState(null);
    const ImageRef=useRef();

    const OnImageChange=(event)=>{
        if(event.target.files && event.target.files[0]){
            let img=event.target.files[0];
            setImage({
                image:URL.createObjectURL(img)
            })
        }
    }
  return (
    <div className="postshare">
      <img src={profileimg} alt="profileimg" />
      <div>
        <input type="text" placeholder="Share Your Thoughts and Post" />
      <div className="postoptions">
        <div className="option"
        style={{color:"green"}}
        onClick={()=>ImageRef.current.click()}
        >
          <GrGallery />
          Photo
        </div>
        <div className="option"
        style={{color:"purple"}}
        >
          <AiOutlinePlayCircle />
          Video
        </div>
        <div className="option"
        style={{color:"red"}}
        >
          <GrLocation />
          Location
        </div>
        <div className="option"
        style={{color:"orange"}}
        >
          <GrSchedule />
          Schedule
        </div>
        <Button sx={{backgroundColor:"#ffc008",height:"30px",fontSize:"12px"}} >Share</Button>
        <div style={{display:"none"}}>
            <input type="file" name="myImage" ref={ImageRef} onChange={OnImageChange} />
        </div>
      </div>
      {
        image && (
            <div className="previewimage">

            </div>
        )
      }
      </div>
    </div>
  );
};

export default PostShare;
