import React from 'react'
import "./FollowersCard.css"
import { Followers } from '../../Data/FollowersData.js'
import {Button, Image} from "@chakra-ui/react"

const FollowersCard = () => {
  return (
    <div className="followercard">
        <h3>Who is Following you</h3>
        {
            Followers.map((follower,id)=>{
                return(
                    <div className="follower">
                        <div>
                            <Image src={follower.img} alt='followerimage' className='followerimg'/>
                            <div className='name'>
                                <span>{follower.name}</span>
                                <span>@{follower.username}</span>

                            </div>
                        </div>
                        <Button sx={{background:"#ffc008"}}>Follow</Button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default FollowersCard