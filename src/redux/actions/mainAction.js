import { createAsyncThunk } from "@reduxjs/toolkit";
import { 
    getRoomsByCount, 
    getAllRooms, 
    getMinMaxPrice, 
    getFilter, 
    getHouseFloor, 
    getMaxMinSelect, 
    getFindById,
    getMinMaxArea,
    postSubscribe
} from "../../Components/axios/axios";

export const getRoomsAction = createAsyncThunk(
    'main/getRoomsByCount',
    async (count) => {
        const rooms = await getRoomsByCount(count);
        return rooms;
    }
)

export const getAllRoomsAction = createAsyncThunk(
    'main/getAllRooms',
    async()=>{
        const allRooms = await  getAllRooms()
        return allRooms;
    }
)

export const getMinMaxPriceAction = createAsyncThunk(
    'main/getMinMaxPrice',
    async ({minPrice, maxPrice})=>{
        const MinMax = await  getMinMaxPrice(minPrice,maxPrice)
        return MinMax;
    }
)

export const getMinMaxAreaAction = createAsyncThunk(
    'main/getMinMaxArea',
    async ({minArea, maxArea})=>{
        const MinMax = await  getMinMaxArea(minArea,maxArea)
        return MinMax;
    }
)

export const getFilterAction = createAsyncThunk(
    'main/getFilter',
    async(badge)=>{
        const FilterBadge = await getFilter(badge)
        return FilterBadge
    }
)

export const getHouseFloorAction = createAsyncThunk(
    'main/getHouseFloor',
    async(floor)=>{
        const FilterFloor = await getHouseFloor(floor)
        return FilterFloor
    }
)

export const getMaxMinSelectAction = createAsyncThunk(
    'main/getMaxMinSelect',
    async(badge)=>{
        const MaxMin = await getMaxMinSelect(badge)
        return MaxMin
    }
)

export const getRoomByIdAction = createAsyncThunk(
    'main/getRoomById',
    async(id)=>{
        const FindId = await getFindById(id)
        return FindId
    }
)

export const postSubscribeAction = createAsyncThunk(
    'main/postSubscribe',
    async(email)=>{
        const subscribe = await postSubscribe(email)
        return subscribe
    }
)