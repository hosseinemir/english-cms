import React from 'react'
import "./Header.css"
import NotificationIcon from "@mui/icons-material/Notifications"
import LanguageIcon from "@mui/icons-material/Language"
import SettingIcon from "@mui/icons-material/Settings"

export default function Header() {
  return (
    <div className='header-maincon'>
        <div className='header-letflogo'>
            <img src="./img/Header/Artboard 1.png" alt="" />
        </div>
        <div className='header-centername'>
            <h1>Tamino</h1>
        </div>
        <div className='header-lefticons'>
            <div className="header-icon">
            <NotificationIcon/>
            <span className='header-icon-badge'>2</span>
            </div>
            <div className="header-icon">
            <LanguageIcon/>
            <span className='header-icon-badge'>2</span>
            </div>
            <div className="header-icon">
            <SettingIcon/>
            </div>
            <div className="header-profile">
              <img src="./img/Header/21.png" alt="" />
            </div>
        </div>
        
    </div>
  )
}
