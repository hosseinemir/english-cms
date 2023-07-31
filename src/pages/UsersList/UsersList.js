import React from 'react'
import "./UsersList.css"
import {usersinlist} from "../../data/dataforchart"
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"

export default function UsersList() {
 const [users,setusers]=useState(usersinlist)
 const deleteuserhandler = id => {
   setusers(users.filter(user=> user.id != id))
 }
 const coulums=[
   {field:"id",
    headerName:"ID",
    width:90 
  },
  {field:"user",
    headerName:"Usser",
    width:200 ,
    renderCell: (params)=>{
      return(
        <Link to={`/users`} className='UsersList-link'>
         <div className='UsersList-div-img'>
         <img className='UsersList-img' src={params.row.avatar} alt="" />
         <span>{params.row.name}</span>
         </div>
        
        </Link>
      )
    }
  },
  {field:"status",
    headerName:"Status",
    width:150 
  },
  {field:"email",
    headerName:"Email",
    width:200 
  },

  {field:"transaction",
  headerName:"Transaction",
  width:160
   },
  {field:"action",
    headerName:"Action",
    width:120 ,
    renderCell: (params)=>{
      return (
        <>
        <Link className='UsersList-link' to={`/users`}>
         <button className='UsersList-editbtn'>edit</button>
        </Link>
        <DeleteOutlineIcon className='UsersList-icon' onClick={()=> deleteuserhandler(params.row.id)}></DeleteOutlineIcon>
        </>
      )
    }
  },


 ]
 
 
 
  return (
    <div className='userlist-main'>
      <DataGrid
      rows={users}
      columns={coulums}
      pageSize={2}
      disableSelectionOnClick
      />

      
    </div>
  )
}
