import React from 'react'
import "./Products.css"
import {products} from "../../data/dataforchart"
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"

export default function Products() {
 const [productsin,setproductsin]=useState(products)
 const deleteuserhandler = id => {
   setproductsin(productsin.filter(product=> product.id != id))
 }
 const coulums=[
   {field:"id",
    headerName:"ID",
    width:110 
  },
  {field:"user",
    headerName:"Usser",
    width:300 ,
    renderCell: (params)=>{
      return(
        <Link to={`/product/${params.id}`} className='UsersList-link'>
         <div className='UsersList-div-img'>
         <img className='UsersList-img' src={params.row.avatar} alt="" />
         <span>{params.row.name}</span>
         </div>
        
        </Link>
      )
    }
  },
  {field:"price",
    headerName:"Price",
    width:200 
  },

  {field:"action",
    headerName:"Action",
    width:200 ,
    renderCell: (params)=>{
      return (
        <>
        <Link className='UsersList-link' to={`/product/${params.id}`}>
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
      rows={productsin}
      columns={coulums}
      pageSize={2}
      disableSelectionOnClick
      />

      
    </div>
  )
}
