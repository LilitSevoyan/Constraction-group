import React,{ useEffect } from "react"
import { RiParkingBoxLine } from 'react-icons/ri'
import { FloorLayout, FloorLayout1, FloorLayout2 } from "../../../assets/index"
import { useNavigate } from "react-router-dom"
import Layout from "./Layout"
import Layout1 from "./Layout1"
import { getHouseFloorAction } from '../../../redux/actions/mainAction'
import { useDispatch, useSelector } from 'react-redux'
import ParkingLayout  from "./ParkingLayout"

export default function FloorContent() {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const { rooms } = useSelector(state => state.main)
    const floorArr = <Layout1 rooms ={rooms}/>

    const location = window.location.href.split("/")
    const floor = location[location.length - 1]
    
    const layout = [<Layout rooms ={rooms}/>,<Layout rooms ={rooms}/>]

    for (let i = 0; i < 12; i++) {
        layout.push(floorArr)
    }

    const floorsList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    const parkingFloors = ["-1","-2","-3"]
    const layoutParking = [<ParkingLayout rooms ={rooms} />,<ParkingLayout rooms ={rooms}/>,<ParkingLayout rooms ={rooms}/>]

    function clickFloor(e) {
        const floor = +e.target.firstChild.nodeValue
        navigate(`/building/floor/${floor}`)
        dispatch(getHouseFloorAction(floor))
    }

    useEffect(()=>{
        dispatch(getHouseFloorAction(floor))
    }, [dispatch, floor])

    return(
        <div className="FloorMainContent">
            <div className="LeftSide">
                <div className="floors-main-wrapper">
                    <div className="floors-content">
                        <div className="selected-floor">Հարկ {floor}</div>
                        <div className="floors-list" onClick={clickFloor} >
                            {floorsList.map((floorItem,id) =>
                                // eslint-disable-next-line no-template-curly-in-string
                                <div className = {`list-item ${floorItem === +floor? "active": ""}`} key= {id}>{floorItem}</div>
                            )}
                        </div>
                    </div>
                    <div className="parking-wrapper">
                        <RiParkingBoxLine/>
                        <div className="parking-floors-list" onClick={clickFloor}>
                            {parkingFloors.map((parking,id)=>
                                <div className={`list-item ${parking === floor ?  "active": ""}`}key={id}>{parking}</div>
                            )}
                        </div>
                    </div>
                    <div className="badges-wrapper">
                        <div className="badge-item">
                            <div className="badge-color bg-green"></div>
                            <div>Առկա է</div>
                        </div>
                        <div className="badge-item">
                            <div className="badge-color bg-yellow"></div>
                            <div>Ամրագրված է</div>
                        </div>
                        <div className="badge-item">
                            <div className="badge-color bg-red"></div>
                            <div>Վաճառված է</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="RightSide">
                <div className="ImageWrapper ">
                    {floor >= 3 ? <img src ={FloorLayout1} width="91%" alt=""/> : null}
                    {floor >= 1 && floor <= 2 ? <img src ={FloorLayout} width="100%" alt="" /> : null}
                    {floor <= 0 ? <img src ={FloorLayout2} width="100%" alt="" /> : null}
                    {layout.map((arr,i) => i+1 === +floor?
                        <div key={i}>
                            {arr}
                        </div>
                        :null
                    )}
                    {layoutParking.map((arr,i) => -1 === +floor || -2 === +floor || -3 === +floor ?
                        <div key={i}>
                            {arr}
                        </div>
                        :null
                    )}
                </div>
            </div>
        </div>
    )
}