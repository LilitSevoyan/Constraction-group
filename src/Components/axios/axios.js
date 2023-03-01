import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL

export const getRoomsByCount = (count) => {
    return axios.get(`${API_URL}/building/rooms/${+count}`)
    .then((response) => {
        return response.data
    })
    .catch(function (error) {
        console.log(error);
    }) 
}

export const getAllRooms = (currentPage, status, sort, floor, room, price_min, price_max, area_min, area_max) => {
    return axios.get(`${API_URL}/building/filters?limit=${24}${currentPage && '&page=' + currentPage}${status && '&badge=' + status}${sort && '&sort=' + sort}${floor && '&floor=' + floor}${room && '&room=' + room}${price_min && '&price_min=' + price_min}${price_max && '&price_max=' + price_max}${area_min && '&area_min=' + area_min}${area_max && '&area_max=' + area_max}`)
    .then((response) => {
        return response.data
    })
}

export const getMinMaxPrice = (minPrice, maxPrice) => {
    if (maxPrice && !minPrice) {
        return axios.get(`${API_URL}/building/price/sort/max/${+maxPrice}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error)
        }) 
    } else if (!maxPrice && minPrice) {
        return axios.get(`${API_URL}/building/sort/price/${+minPrice}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error)
        }) 
    } else {
        return axios.get(`${API_URL}/building/sort/price/${+minPrice}/${+maxPrice}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error)
        }) 
    }  
}

export const getMinMaxArea = (minArea,maxArea) => {
    if (maxArea && !minArea) {
        return axios.get(`${API_URL}/building/area/sort/max/${+maxArea}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error)
        }) 
    } else if (!maxArea && minArea) {
        return axios.get(`${API_URL}/building/sort/area/${+minArea}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error)
        }) 
    } else {
        return axios.get(`${API_URL}/building/sort/area/${+minArea}/${+maxArea}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error)
        }) 
    }  
}

export const getFilter = (badge) => {
    return axios.get(`${API_URL}/badge/all/${badge}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error)
        }) 
}

export const getHouseFloor = (floor) => {
    return axios.get(`${API_URL}/floor/house/${floor}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error)
        }) 
}

export const getMaxMinSelect = (badge) => {
    return axios.get(`${API_URL}/sort/${badge}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error)
        }) 
}

export const getFindById = (id) => {
    return axios.get(`${API_URL}/building/id/${id}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error)
        }) 
}

export const postSubscribe = (email) => {
    return axios.post(`${API_URL}/subscribe`, {
        email
    })
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error)
        }) 
}
