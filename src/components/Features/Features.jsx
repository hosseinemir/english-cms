import "./Features.css"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"

import React from 'react'

export default function Features(props) {
  return (
    <div className="Features-container">
        <span className="Features-name">{props.name}</span>
        <div className="Features-items">
            <span className="Features-money">{props.dollar}</span>
            <span className="Features-persent">{props.persent}</span>
            {props.persent < 0 ? (<ArrowDownwardIcon className="Features-icondown"/>):(<ArrowUpwardIcon className="Features-iconup"/>)}
            
        </div>
        <span className="Features-compaired">compared to last month</span>
    </div>
  )
}
