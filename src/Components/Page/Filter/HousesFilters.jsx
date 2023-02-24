import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { ArrowIcon } from "../../../assets/index"
import {
        getRoomsAction,
        getAllRoomsAction,
        getMinMaxPriceAction,
        getFilterAction,
        getMaxMinSelectAction,
        getMinMaxAreaAction
        } from '../../../redux/actions/mainAction'
import HousesWrapper from "./HousesWrapper"
import Floor from "./Floor"

export default function HousesFilters({isToggle, setisToggle,setNumber}) {
    const dispatch = useDispatch()
    const [isToggleOn, setisToggleOn] = useState(true)
    const [data, setData] = useState({
        minArea:"",
        maxArea:"",
        minPrice:"",
        maxPrice:"",
        category:"Առկա",
        select:""
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
        const count  =+ e.target.firstChild.nodeValue
        dispatch(getRoomsAction(count)).then(res => {
            setRooms(res.payload)
            setTotalCount(res.payload.length)
        })
    }
    
    const handleChange = async (e) => {
        let numbers = /^[0-9]+$|^$/
        if (e.target.type === "text") {
            if (e.target.value.match(numbers)) {
                setData({ ...data,[e.target.name]: e.target.value })
                const minPrice = e.target.name === 'minPrice' ? e.target.value : data.minPrice
                const maxPrice = e.target.name === 'maxPrice' ? e.target.value : data.maxPrice
                const minArea = e.target.name === 'minArea' ? e.target.value : data.minArea
                const maxArea = e.target.name === 'maxArea' ? e.target.value : data.maxArea
                if (e.target.name === "minPrice" || e.target.name === "maxPrice" ) {
                    dispatch(getMinMaxPriceAction({minPrice, maxPrice})).then(res => {
                        setRooms(res.payload)
                        setTotalCount(res.payload.length)
                    })
                } else {
                    dispatch(getMinMaxAreaAction({minArea, maxArea})).then(res => {
                        setRooms(res.payload)
                        setTotalCount(res.payload.length)
                    })
                }
            }
        } else {
            setData({ ...data,[e.target.name]: e.target.value }) 
        } 
    }

    const change = async(e) => {
        setData({ ...data,[e.target.name]: e.target.value })
        if (e.target.name === "category") {
            const badge = e.target.value
            dispatch(getFilterAction(badge)).then(res => {
                setRooms(res.payload)
                setTotalCount(res.payload.length)
            })
        } else {
            const badge = e.target.value
            dispatch(getMaxMinSelectAction(badge)).then(res => {
                setRooms(res.payload)
                setTotalCount(res.payload.length)
            })
        }  
    }

    const scrollHandler = (e) => {
        if ((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100)
        && rooms.length < totalCount) {
            setFetching(true)
        }
    }

    useEffect(() => {
        if (fetching) {
            dispatch(getAllRoomsAction(currentPage))
                .then(res => {
                    setCurrentPage(prevState => prevState + 1)
                    setRooms([...rooms, ...res.payload.allHouses])
                    setTotalCount(res.payload.count)
                })
                .finally(() => {
                    setFetching(false)
                })
        }
    }, [fetching]) 

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler)
        return function () {
            document.removeEventListener("scroll", scrollHandler)
        }
    }, [rooms, totalCount])
    
    return (
        <div className="MainContent">
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
                            <div className=" status-sort">
                                <select name="category" value={data.category} onChange={change}>
                                    <option value="Առկա">Առկա է (125)</option>
                                    <option value="Ամրագրված">Ամրագրված(83)</option>
                                    <option value="Վաճառված">Վաճառված է</option>
                                </select>
                            </div>
                            <div className="sort">
                                <select name="select" value={data.select} onChange={change}  >
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
                        {!isToggleOn ? <Floor houseCard={rooms} toggle={isToggleOn} setToggle={setisToggleOn} /> : null} 
                        <div className="roomsCount">
                            <div className="field-title">
                                Սենյակներ
                            </div>
                            <div className="rooms-count" onClick={clickRoomsCount}>
                                <div className="rooms-count-item">1</div>
                                <div className="rooms-count-item">2</div>
                                <div className="rooms-count-item">3</div>
                                <div className="rooms-count-item">4</div>
                            </div>
                        </div>
                        <div className="inputs">
                            <div className="fields-wrapper area-fields-wrapper">
                                <div className="field-title">
                                    Մակերես
                                </div>
                                <div className="custom-input-group">
                                    <input type="text" name="minArea" autoComplete="off" placeholder="սկսած" value={data.minArea} onChange={handleChange} />
                                </div>
                                <div className="field-title"> - </div>
                                <div className="custom-input-group">
                                    <input type="text"name="maxArea" placeholder="մինչև" autoComplete="off" value={data.maxArea}  onChange={handleChange}/>
                                </div>
                                <div className="field-title">մ <sup>2</sup></div>
                            </div>
                            <div className="fields-wrapper price-fields-wrapper">
                                <div className="field-title">Գին</div>
                                <div className="custom-input-group">
                                    <input type="text" name="minPrice" placeholder="սկսած" autoComplete="off" value={data.minPrice} onChange={handleChange}/>
                                </div>
                                <div className="field-title"> - </div>
                                <div className="custom-input-group">
                                    <input type="text" name="maxPrice" placeholder="մինչև" autoComplete="off" value ={data.maxPrice} onChange={handleChange}/>
                                </div>
                                <div className="field-title">֏</div>
                            </div>
                        </div>
                    </div>
                    <div className="clear-filters-wrapper"></div>
                </div>
                <HousesWrapper card={rooms} toggle={isToggle} setToggle={setisToggle} setNumber={setNumber} loading={fetching}/>
            </div>
        </div>
    )
}