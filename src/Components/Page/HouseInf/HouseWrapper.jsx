import React from "react"
import { Link } from "react-router-dom"
import { FiFilter } from 'react-icons/fi'
import { RiParkingBoxLine } from 'react-icons/ri'
import { Hamalir } from "../../../assets/index"

export default function HouseWrapper({id}) {

    return(
        <div className="TopContent">
            <div className="AddressWrapper">
                <div className="address-left-wrapper">
                    <span className="address-title">Հարկ </span>
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
                            <span className="ant-breadcrumb-link "><Link to="/building/floor/:floor">Հարկ {id.floor}</Link></span>
                            <span className="ant-breadcrumb-separator">/</span>
                        </span>
                        <span>
                            <span className="ant-breadcrumb-link color">{id.type} N {id.houseNumber}</span>
                        </span>
                    </div>
                </div>
                <div className="address-right-wrapper">
                    <Link className="item-card" to ="/buildings">
                        <div className="icon-wrapper">
                            <img src={Hamalir} alt="building" />
                        </div>
                    </Link>
                    <Link className="item-card" to ="/building/floor/-1">
                        <div className="building-wrapper">
                            <RiParkingBoxLine/>
                        </div>
                    </Link>
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