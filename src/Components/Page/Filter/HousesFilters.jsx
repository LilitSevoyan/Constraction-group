import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { ArrowIcon } from "../../../assets/index"
import { getAllRoomsAction } from '../../../redux/actions/mainAction'
import HousesWrapper from "./HousesWrapper"
import Floor from "./Floor"

export default function HousesFilters({isToggle, setisToggle, setNumber}) {
    const dispatch = useDispatch()
    const [isToggleOn, setisToggleOn] = useState(true)
    const [data, setData] = useState({
        status: "Առկա",
        sort: "",
        floor: "",
        room: "",
        price_min: "", 
        price_max: "", 
        area_min: "",
        area_max: ""
    })
    const [rooms, setRooms] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    const [totalCount, setTotalCount] = useState(0)
   
    const DropdownClick = (e) => {
        e.preventDefault()
        setisToggleOn(!isToggleOn)
    }

    const clickRoomsCount = (e) => {
        const count =+ e.target.firstChild.nodeValue
        setData({...data, room: count})
    }
    
    const handleChange = async (e) => {
        let numbers = /^[0-9]+$|^$/
        if (e.target.value.match(numbers)) {
            setData({ ...data, [e.target.name]: e.target.value })
        }
    }

    const change = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleDelete = () => {
        setData({
            status: "Առկա",
            sort: "",
            floor: "",
            room: "",
            price_min: "", 
            price_max: "", 
            area_min: "",
            area_max: ""
        })
    }

    const scrollHandler = (e) => {
        if ((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100)
        && rooms.length < totalCount) {
            setFetching(true)
        }
    }

    const filterHandler = (currentPage, {status, sort, floor, room, price_min, price_max, area_min, area_max}) => {
        dispatch(getAllRoomsAction({currentPage, status, sort, floor, room, price_min, price_max, area_min, area_max}))
            .then(res => {
                setCurrentPage(prevState => prevState + 1)
                setRooms([...rooms, ...res.payload.filter])
                setTotalCount(res.payload.count)
            })
            .finally(() => {
                setFetching(false)
            })
    }

    useEffect(() => {
        if (fetching) {
            filterHandler(currentPage, data)
        }
    }, [fetching]) 

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler)
        return function () {
            document.removeEventListener("scroll", scrollHandler)
        }
    }, [rooms, totalCount])

    useEffect(() => {
        setRooms([])
        setCurrentPage(1)
        setFetching(true)
    }, [data])
    
    return (
        <div className="FilterContent">
            <div className="HousesFilters">
                <div className="HeaderWrapper">
                    <span className="header-title"></span>
                    <div className="ant-breadcrumb">
                        <span>
                            <span className="ant-breadcrumb-link"><Link to ="/">Գլխավոր</Link></span>
                            <span className="ant-breadcrumb-separator">/</span>
                        </span>
                        <span>
                            <span className="ant-breadcrumb-link"><Link to ="/filter">Ֆիլտր</Link></span>
                        </span>
                    </div>
                </div>
                <div className="filters">
                    <div className="filter-top">
                        <div className=""></div>
                        <div className="filters-sort-part">
                            <div className="status-sort">
                                <select name="status" value={data.status} onChange={change}>
                                    <option value="Առկա">Առկա է (125)</option>
                                    <option value="Ամրագրված">Ամրագրված(83)</option>
                                    <option value="Վաճառված">Վաճառված է</option>
                                </select>
                            </div>
                            <div className="sort">
                                <select name="sort" value={data.sort} onChange={change}>
                                    <option value="priceIncrease">Գնի աճման</option>
                                    <option value="priceDecrease">Գնի նվազման</option>
                                    <option value="areaIncrease">Մակերեսի աճման</option>
                                    <option value="areaDecrease">Մակերեսի նվազման</option>
                                    <option value="roomsCountIncrease">Սենյակների քանակի աճման</option>
                                    <option value="roomsCountDecrease">Սենյակների քանակի նվազման</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="filter-down">
                        <div className="ant-dropdown-trigger field-title floor" onClick={DropdownClick}>
                            Հարկեր
                            <span>(14)</span>
                            <ArrowIcon/>
                        </div>
                        {!isToggleOn ? <Floor data={data} setData={setData} toggle={isToggleOn} setToggle={setisToggleOn} /> : null} 
                        <div className="roomsCount">
                            <div className="field-title">
                                Սենյակներ
                            </div>
                            <div className="rooms-count" onClick={clickRoomsCount}>
                                <div className={data.room === 1 ? "rooms-count-item filter-active" : "rooms-count-item"}>1</div>
                                <div className={data.room === 2 ? "rooms-count-item filter-active" : "rooms-count-item"}>2</div>
                                <div className={data.room === 3 ? "rooms-count-item filter-active" : "rooms-count-item"}>3</div>
                                <div className={data.room === 4 ? "rooms-count-item filter-active" : "rooms-count-item"}>4</div>
                            </div>
                        </div>
                        <div className="inputs">
                            <div className="fields-wrapper area-fields-wrapper">
                                <div className="field-title">Մակերես</div>
                                <div className="custom-input-group">
                                    <input type="text" name="area_min" autoComplete="off" placeholder="սկսած" value={data.area_min} onChange={handleChange} />
                                </div>
                                <div className="field-title"> - </div>
                                <div className="custom-input-group">
                                    <input type="text" name="area_max" placeholder="մինչև" autoComplete="off" value={data.area_max}  onChange={handleChange}/>
                                </div>
                                <div className="field-title">մ <sup>2</sup></div>
                            </div>
                            <div className="fields-wrapper price-fields-wrapper">
                                <div className="field-title">Գին</div>
                                <div className="custom-input-group">
                                    <input type="text" name="price_min" placeholder="սկսած" autoComplete="off" value={data.price_min} onChange={handleChange}/>
                                </div>
                                <div className="field-title"> - </div>
                                <div className="custom-input-group">
                                    <input type="text" name="price_max" placeholder="մինչև" autoComplete="off" value ={data.price_max} onChange={handleChange}/>
                                </div>
                                <div className="field-title">֏</div>
                            </div>
                        </div>
                    </div>
                    <div className="clear-filters-wrapper" onClick={handleDelete}>
                        <span>ջնջել</span>
                    </div>
                </div>
                <HousesWrapper card={rooms} toggle={isToggle} setToggle={setisToggle} setNumber={setNumber} loading={fetching}/>
            </div>
        </div>
    )
}