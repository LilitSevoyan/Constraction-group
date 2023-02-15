import React,{useEffect} from "react";
import HouseInf from "./HouseInf";
import HouseWrapper from "./HouseWrapper";
import { useDispatch, useSelector } from 'react-redux'
import {getRoomByIdAction}from '../../../redux/actions/mainAction'

export default function House(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const dispatch = useDispatch();
    const {selectedRoom} = useSelector(state => state.main)
    
    useEffect(()=>{
       const location = window.location.href.split("/")
       const id = location[location.length - 1]
       dispatch(getRoomByIdAction(id))
    },[dispatch])
    return(
        <>
            <HouseWrapper id ={selectedRoom}/>
            <HouseInf id ={selectedRoom}/>
        </>
    )
}