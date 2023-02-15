import React,{useEffect,useState} from "react"
import { Link } from "react-router-dom"
import {FiFilter} from 'react-icons/fi';




export default function HeaderWrapper(){
  const[floor,setFloor] = useState("")

  
useEffect(()=>{
  const location = window.location.href.split("/")
  setFloor(location[location.length - 1])
},[floor])
    

  

  
  console.log(floor);
  return(
    <div className="TopContent">
      <div className="AddressWrapper">
        <div className="address-left-wrapper">
          <span className="address-title">Հարկ {floor} </span>
          <div className="ant-breadcrumb">
            <span>
              <span className="ant-breadcrumb-link"><Link to="/">Գլխավոր</Link></span>
              <span className="ant-breadcrumb-separator">/</span>
            </span>
            <span>
              <span className="ant-breadcrumb-link"><Link to="/buildings">Համալիր</Link></span>
              <span className="ant-breadcrumb-separator">/</span>
            </span>
            <span>
              <span className="ant-breadcrumb-link color">Հարկ {floor} </span>
            </span>
          </div>
        </div>
        <div className="address-right-wrapper">
          
          <Link to="/filter" className="item-card">
            <div className="icon-wrapper">
              <FiFilter/>
            </div>
            <div className="item-card-content">
              <div className="item-card-content-title">Ֆիլտեր</div>
              <div className="item-card-content-text">Խմբավորել</div>
            </div>
          </Link>
        </div>
      </div>
    </div>

        
  )

}