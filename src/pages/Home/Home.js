
import React from 'react'
import Features from '../../components/Features/Features'
import { useState } from 'react'
import "./Home.css"
import Chart from '../../components/Chart/Chart'
import { dataforchart } from '../../data/dataforchart'
import Widgetsm from "../../components/Widgetsm/Widgetsm"
import Widgetlg from "../../components/Widgetlg/Widgetlg"

export default function Home() {
  const[Featureslist , setFeatureslist]= useState(
    [
      {id:1,name:"Revanue",dollar:"$2,415",persent:-11.4},
      {id:1,name:"Sales",dollar:"$4,415",persent:-1.4},
      {id:1,name:"Cost",dollar:"$2,225",persent:2.4}
    ]
  )
  
  
  return (
    <div className='Home-container'>
      <div className='Home-topfeatures'>
        {Featureslist.map(item => <Features {...item} key={item.id}></Features> )} 
      </div>
      <Chart grid title={"tamino analytics"} data={dataforchart} dataKey={"sale"}/>
      <div className="home-widget">
      <Widgetsm></Widgetsm>
      <Widgetlg></Widgetlg>

      </div>
      

    </div>
  )
}
