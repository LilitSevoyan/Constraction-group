import axios from "axios"

export const getRoomsByCount = (count) =>{
    return axios.get(`http://localhost:8080/rooms/${+count}`)
    .then((response) => {
        return response.data
    })
    .catch(function (error) {
        console.log(error);
    }) 
}

export const getAllRooms = () => {
    return axios.get("http://localhost:8080")
    .then((response) => {
        return response.data
    })
}

export const getMinMaxPrice = (minPrice,maxPrice)=>{
    if(maxPrice && !minPrice){
        console.log("maximum price");
        return axios.get(`http://localhost:8080/price/sort/max/${+maxPrice}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        }) 
    }else if(!maxPrice && minPrice){
        return axios.get(`http://localhost:8080/sort/price/${+minPrice}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        }) 
    }else{
        return axios.get(`http://localhost:8080/sort/price/${+minPrice}/${+maxPrice}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        }) 
    }  
}

export const getMinMaxArea = (minArea,maxArea)=>{
    console.log(minArea,maxArea)
    if(maxArea && !minArea){
        return axios.get(`http://localhost:8080/area/sort/max/${+maxArea}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        }) 
    }else if(!maxArea && minArea){
        return axios.get(`http://localhost:8080/sort/area/${+minArea}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        }) 
    }else{
        return axios.get(`http://localhost:8080/sort/area/${+minArea}/${+maxArea}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        }) 
    }  
}



export const getFilter = (badge)=>{
    return axios.get(`http://localhost:8080/badge/all/${badge}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        }) 
}

export const getHouseFloor = (floor)=>{
    return axios.get(`http://localhost:8080/floor/house/${floor}`)
        .then((response) => {
            console.log(response.data);
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        }) 
}

export const getMaxMinSelect = (badge)=>{
    return axios.get(`http://localhost:8080/sort/${badge}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        }) 
       
    
}



export const getFindById = (id)=>{
    return axios.get(`http://localhost:8080/id/${id}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        }) 
       
    
}
export const postSubscribe = (email)=>{
    return axios.post("http://localhost:8080/subscribe",{
        email
    })
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        }) 
}
