import "./Product.css"
import {Link , Navigate} from "react-router-dom"
import React from 'react'
import Chart from "../../components/Chart/Chart"
import {productsellinfo,products} from "../../data/dataforchart"
import { useParams } from "react-router-dom"

export default function Product() {
  
  const productid = useParams()
  console.log(products[productid.proid-1])
  
  return (
    <div className="Product-container">
      <div className="Product-top">
      <h3 className="Product-h3">Product</h3>
      <Link className="Product-link" to={"/newproduct"}>
      <button className="Product-btn">create</button>
      </Link>
      </div>
     
      <div className="Product-main">
        <div className="Product-chart">
          <Chart title={"sale in season"} data={productsellinfo[(productid.proid-1)]} dataKey={"sale"}></Chart>
        </div>
        {productid.proid <= products.length ? (<div className="Product-info">
          
          <div className="Product-div-img">
            <img className="Product-div-img1" src={products[productid.proid-1].avatar} alt="" />
            <span className="Product-main-span">{products[productid.proid-1].name}</span>
          </div>
          <div className="Product-">
            <span className="Product-rspan">ID:</span>
            <span className="Product-lspaan">{products[productid.proid-1].id}</span>
            </div>
            <div className="Product-">
            <span className="Product-rspan">Name:</span>
            <span className="Product-lspaan">{products[productid.proid-1].name}</span>
            </div>
            <div className="Product-">
            <span className="Product-rspan">Sales:</span>
            <span className="Product-lspaan">{products[productid.proid-1].price}</span>
            </div>
            <div className="Product-">
            <span className="Product-rspan">Active:</span>
            <span className="Product-lspaan">{products[productid.proid-1].active}</span>
            </div>
            

        </div>):(<Navigate to={"/"}></Navigate>)}
        

      </div>

    </div>
  )
}
