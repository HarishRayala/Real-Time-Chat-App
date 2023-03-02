import React from 'react'
import "./TrendCard.css"
import {TrendData} from "../../Data/TrendData"
import "./TrendCard.css"

const TrendCard = () => {
  return (
    <div className="trendcard">
        <h3>Trends For You</h3>
        {
            TrendData.map((trend)=>{
                return(
                    <div className="trend">
                        <span>#{trend.name}</span>
                        <span>{trend.shares}k shares</span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TrendCard