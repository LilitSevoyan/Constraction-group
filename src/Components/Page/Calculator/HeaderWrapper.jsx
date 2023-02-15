import React from "react"
import { Link } from "react-router-dom"
import {GrLocation} from "react-icons/gr"

export default function HeaderWrapper(){
  return(
    <div className="TopContent">
      <div className="AddressWrapper">
        <div className="address-left-wrapper">
          <span className="address-title">Հաշվիչ</span>
          <div className="ant-breadcrumb">
            <span>
              <span className="ant-breadcrumb-link"><Link to="/">Գլխավոր</Link></span>
              <span className="ant-breadcrumb-separator">/</span>
            </span>
            <span>
              <span className="ant-breadcrumb-link color">Հաշվիչ</span>
            </span>
            
          </div>
        </div>
        <div className="address-right-wrapper">
          
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
    </div>

        
  )

}