import React from 'react'
import './TopBox.css'
import {topDealUsers} from "../../damiData.js"
export default function TopBox() {
    console.log('awawaw',topDealUsers)
  return (
    <div className='topBox'>
        <h1>Top Deals</h1>
        <div className="list">
            {topDealUsers.map(user=>(
                <div className="listItemTopBox">
                    <div className="userTopBox">
                        <img src={user.img} alt="" />
                        <div className="userTexts">
                            <span className="userName">{user.username}</span>
                            <span className="email">{user.email}</span>
                        </div>
                    </div>
                    <span className="amount">${user.amount}</span>
                </div>
            ))}
        </div>
    </div>
  )
}
