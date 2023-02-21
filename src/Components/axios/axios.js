import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL

export const getRoomsByCount = (count) => {
    return axios.get(`${API_URL}/rooms/${+count}`)
    .then((response) => {
        return response.data
    })
    .catch(function (error) {
        console.log(error);
    }) 
}

export const getAllRooms = () => {
    return axios.get(`${API_URL}`)
    .then((response) => {
        return response.data
    })
}

export const getMinMaxPrice = (minPrice,maxPrice) => {
    if (maxPrice && !minPrice) {
        return axios.get(`${API_URL}/price/sort/max/${+maxPrice}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error)
        }) 
    } else if (!maxPrice && minPrice) {
        return axios.get(`${API_URL}/sort/price/${+minPrice}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error)
        }) 
    } else {
        return axios.get(`${API_URL}/sort/price/${+minPrice}/${+maxPrice}`)
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
        return axios.get(`${API_URL}/area/sort/max/${+maxArea}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error)
        }) 
    } else if (!maxArea && minArea) {
        return axios.get(`${API_URL}/sort/area/${+minArea}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error)
        }) 
    } else {
        return axios.get(`${API_URL}/sort/area/${+minArea}/${+maxArea}`)
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
    return axios.get(`${API_URL}/id/${id}`)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error)
        }) 
}

export const postSubscribe = (email) => {
    return axios.post(`${API_URL}/subscribe`,{
        email
    })
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            console.log(error)
        }) 
}
