import "./SideBar.css"
import  LineStyleIcon  from "@mui/icons-material/LineStyle"
import  TimelineIcon  from "@mui/icons-material/Timeline"
import  PermIdentityIcon  from "@mui/icons-material/PermIdentity"
import  StorefrontIcon  from "@mui/icons-material/Storefront"
import  TrendingUpIcon  from "@mui/icons-material/TrendingUp"
import  AttachMoneyIcon  from "@mui/icons-material/AttachMoney"
import BarChartIcon  from "@mui/icons-material/BarChart"
import MailOutlineIcon  from "@mui/icons-material/MailOutline"
import DynamicFeedIcon  from "@mui/icons-material/DynamicFeed"
import ChatBubbleOutlineIcon  from "@mui/icons-material/ChatBubbleOutline"
import WorkOutlineIcon  from "@mui/icons-material/WorkOutline"
import ReportIcon  from "@mui/icons-material/Report"
import { Link, NavLink } from "react-router-dom"

import React from 'react'

export default function SideBar() {
  return (
    <div className="SideBar-container">
        <div className="SideBar-menu">
            <h3 className="SideBar-menu-name">Dashboard</h3>
            <ul className="SideBar-ul">
                <NavLink to={"/"} className="Sidebar-Link ">
                <li className="SideBar-li ">
                <LineStyleIcon className="SideBar-icons "/>
                    Home
                </li>
                </NavLink>
                
                <li className="SideBar-li">
                <TimelineIcon className="SideBar-icons"/>
                    Analystics
                </li>
                <li className="SideBar-li">
                <TrendingUpIcon className="SideBar-icons"/>
                    Sales
                </li>
            </ul>

        </div>
        <div className="SideBar-menu">
            <h3 className="SideBar-menu-name">Quick Menu</h3>
            <ul className="SideBar-ul">
            <NavLink to={"/users"} className="Sidebar-Link ">
            <li className="SideBar-li">
                <PermIdentityIcon className="SideBar-icons"/>
                    Users
                </li>
            </NavLink>
            <NavLink to={"/newusers"} className="Sidebar-Link">
            <li className="SideBar-li">
                <PermIdentityIcon className="SideBar-icons"/>
                    
                    New User
                </li>
            </NavLink>
            <NavLink to={"/products"} className="Sidebar-Link">
            <li className="SideBar-li">
                    <StorefrontIcon className="SideBar-icons"/>
                    Products
                </li>
            </NavLink> 
               
                <li className="SideBar-li">
                <AttachMoneyIcon className="SideBar-icons"/>
                    Transaction
                </li>
                <li className="SideBar-li">
                <BarChartIcon className="SideBar-icons"/>
                    Reports
                </li>
            </ul>

        </div>
        <div className="SideBar-menu">
            <h3 className="SideBar-menu-name">Notifications</h3>
            <ul className="SideBar-ul">
                <li className="SideBar-li">
                <MailOutlineIcon className="SideBar-icons"/>  
                    Mail
                </li>
                <li className="SideBar-li">
                  <DynamicFeedIcon className="SideBar-icons"/>  
                    Feedback
                </li>
                <li className="SideBar-li">
                 <ChatBubbleOutlineIcon className="SideBar-icons"/>   
                    Messages
                </li>
            </ul>

        </div>
        <div className="SideBar-menu">
            <h3 className="SideBar-menu-name">staff</h3>
            <ul className="SideBar-ul">
                <li className="SideBar-li">
                  <WorkOutlineIcon className="SideBar-icons"/>  
                    Manage
                </li>
                <li className="SideBar-li">
                <TimelineIcon className="SideBar-icons"/>  
                    Analystics
                </li>
                <li className="SideBar-li">
                 <ReportIcon className="SideBar-icons"/>   
                    Reports
                </li>
            </ul>

        </div>
    </div>
  )
}
