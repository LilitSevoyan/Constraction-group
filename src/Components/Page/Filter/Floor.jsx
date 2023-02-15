import React from "react";
//import {HouseFloor} from "../../axios/axios"
import { getHouseFloorAction} from '../../../redux/actions/mainAction'
import { useDispatch} from 'react-redux'

export default function Floor({houseCard,toggle,setToggle}){
   
    const dispatch = useDispatch();
 
    const clickFloor = async(e)=>{
        console.log({e})
        const floor  =+ e.target.firstChild.nodeValue
        dispatch(getHouseFloorAction(floor))
        setToggle(!toggle)
    }
    return(

        <div className="ant-dropdown-open">
            <div className="filter-floors-list">
                <div onClick={clickFloor}>
                    <div className="list-item">1</div>
                    <div className="list-item">2</div>
                    <div className="list-item">3</div>
                    <div className="list-item">4</div>
                    <div className="list-item">5</div>
                    <div className="list-item">6</div>
                    <div className="list-item">7</div>
                    <div className="list-item">8</div>
                    <div className="list-item">9</div>
                    <div className="list-item">10</div>
                    <div className="list-item">11</div>
                    <div className="list-item">12</div>
                    <div className="list-item">13</div>
                    <div className="list-item">14</div>
                </div>
               
            </div>
            
        </div>
    )
}