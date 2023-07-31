import "./Widgetsm.css"
import { members } from "../../data/dataforchart"
import { useState } from "react"
import React from 'react'
import VisibilityIcon from "@mui/icons-material/Visibility"

export default function Widgetsm() {
 const [membersin,setmembersin]=useState(members)
    return (
    <div className="Widgetsm-container">
        <h3 className="Widgetsm-h3">New Join Members</h3>
        {membersin.map(item=> {
            return(
                <div className="Widgetsm-memcon">
                <ul className="Widgetsm-ul">
                    <li className="Widgetsm-li">
                        <img src={item.img} alt="" className="Widgetsm-img"/>
                        <div className="Widgetsm-name">
                            <span className="Widgetsm-name1">{item.name}</span>
                            <span className="Widgetsm-job">{item.job}</span>
                        </div>
                        <button className="Widgetsm-btn">
                        <VisibilityIcon className="Widgetsm-icon"/>
                        </button>
                    </li>
                </ul>
            </div>
            )
                 
        })}
       
    </div>
  )
}
