import React from 'react'
import "./InfoCard.css"
import {BsPen} from "react-icons/bs"
import { Button } from '@chakra-ui/react'
const InfoCard = () => {
  return (
    <div className="infocard">
        <div className="infohead">
            <h4>Your Info</h4>
            <div>
            <BsPen width="2rem" height="1.5rem"/>
            </div>
        </div>
        <div className="info">
            <span>
                <b>Status </b>
            </span>
            <span>in Relationship</span>
        </div>
        <div className="info">
            <span>
                <b>Lives in </b>
            </span>
            <span>Visakhaptnam</span>
        </div>
        <div className="info">
            <span>
                <b>Works at </b>
            </span>
            <span>Google</span>
        </div>
        <Button sx={{background:"#ffc008"}}>Logout</Button>
    </div>
  )
}

export default InfoCard