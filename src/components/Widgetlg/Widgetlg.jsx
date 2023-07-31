import "./Widgetlg.css"
import {lasttransaction} from "../../data/dataforchart" 
import { useState } from "react"

import React from 'react'

export default function Widgetlg() {
  const [lasttransactionin,setlasttransactionin]=useState(lasttransaction)
  let Buttun = ({type})=>{
     return <button className={"Widgetlg-btn " + type}>{type}</button>
  } 
  return (
    <div className="Widgetlg-container">
        <h3 className="Widgetlg">Latest Transaction</h3>

        <table className="Widgetlg-table">
            <tr className="Widgetlg-tr1">
                <th className="Widgetlg-th">Custumer</th>
                <th className="Widgetlg-th">Date</th>
                <th className="Widgetlg-th">Amount</th>
                <th className="Widgetlg-th">Status</th>
            </tr>
            {lasttransactionin.map(item => {
                return(
                    <tr className="Widgetlg-tr">
                    <td className="Widgetlg-td">
                        <img src={item.img} alt="" className="Widgetlg-img"/>
                        <span className="Widgetlg-td-span">{item.name}</span>
                    </td>
                    <td>{item.date}</td>
                    <td>{item.amount}</td>
                    <td>
                        <Buttun type={item.status}></Buttun>
                    </td>
                </tr>

                )
            })}
           

        </table>
    </div>
  )
}
