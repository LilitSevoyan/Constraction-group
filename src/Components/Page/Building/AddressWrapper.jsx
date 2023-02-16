import React from "react"
import { Link } from "react-router-dom"
import { FaParking } from "react-icons/fa"
import { GrLocation } from "react-icons/gr"
import { RiParkingBoxLine } from 'react-icons/ri'
import Image from "./ImageWrapper"

export default function AddressWrapper() {
  return (
    <div className="TopContent">
      <div className="AddressWrapper">
        <div className="address-left-wrapper">
          <span className="address-title">CONSTRUCTIONS GROUP</span>
          <div className="ant-breadcrumb">
            <span>
              <span className="ant-breadcrumb-link"><Link to="/">Գլխավոր</Link></span>
              <span className="ant-breadcrumb-separator">/</span>
            </span>
            <span>
              <span className="ant-breadcrumb-link color">Համալիր</span>
            </span>
          </div>
        </div>
        <div className="address-right-wrapper">
          <div className="parking-wrapper">
            <Link to ="/building/floor/-1">
              <FaParking/>
              <RiParkingBoxLine/>
            </Link>
          </div>
          <Link to="/address" className="item-card">
            <div className="icon-wrapper">
              <GrLocation/>
            </div>
            <div className="item-card-content">
              <div className="item-card-content-title">Հասցե</div>
              <div className="item-card-content-text"> Երևան,Գյուրջյան 27 փ․</div>
            </div>
          </Link>
        </div>
      </div>
      <Image/>  
    </div>  
  )
}