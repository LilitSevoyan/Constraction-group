import { createSlice } from '@reduxjs/toolkit'
import {
    getRoomsAction,
    getAllRoomsAction,
    getMinMaxPriceAction,
    getFilterAction,
    getHouseFloorAction,
    getMaxMinSelectAction,
    getRoomByIdAction,
    getMinMaxAreaAction,
    postSubscribeAction
} from '../actions/mainAction'
  
const initialState = {
    loading: false,
    rooms: [],
    selectedRoom: {},
    subscribe:[]
}

export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRoomsAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(getRoomsAction.fulfilled, (state, action) => {
                state.rooms = action.payload;
                state.loading = false;
            })
            .addCase(getRoomsAction.rejected, (state) => {
                state.rooms = [];
                state.loading = false;
            })
            .addCase(getAllRoomsAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllRoomsAction.fulfilled, (state, action) => {
                state.rooms = action.payload;
                state.loading = false;
            })
            .addCase(getAllRoomsAction.rejected, (state) => {
                state.rooms = [];
                state.loading = false;
            })
            .addCase(getMinMaxPriceAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMinMaxPriceAction.fulfilled, (state, action) => {
                state.rooms = action.payload;
                state.loading = false;
            })
            .addCase(getMinMaxPriceAction.rejected, (state) => {
                state.rooms = [];
                state.loading = false;
            })
            .addCase(getFilterAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(getFilterAction.fulfilled, (state, action) => {
                state.rooms = action.payload;
                state.loading = false;
            })
            .addCase(getFilterAction.rejected, (state) => {
                state.rooms = [];
                state.loading = false;
            })
            .addCase(getHouseFloorAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(getHouseFloorAction.fulfilled, (state, action) => {
                state.rooms = action.payload;
                state.loading = false;
            })
            .addCase(getHouseFloorAction.rejected, (state) => {
                state.rooms = [];
                state.loading = false;
            })
            .addCase(getMaxMinSelectAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMaxMinSelectAction.fulfilled, (state, action) => {
                state.rooms = action.payload;
                state.loading = false;
            })
            .addCase(getMaxMinSelectAction.rejected, (state) => {
                state.rooms = [];
                state.loading = false;
            })
            .addCase(getRoomByIdAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(getRoomByIdAction.fulfilled, (state, action) => {
                state.selectedRoom = action.payload;
                state.loading = false;
            })
            .addCase(getRoomByIdAction.rejected, (state) => {
                state.selectedRoom = {};
                state.loading = false;
            })
            .addCase(getMinMaxAreaAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMinMaxAreaAction.fulfilled, (state, action) => {
                state.rooms = action.payload;
                state.loading = false;
            })
            .addCase(getMinMaxAreaAction.rejected, (state) => {
                state.rooms = [];
                state.loading = false;
            })
            .addCase(postSubscribeAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(postSubscribeAction.fulfilled, (state, action) => {
                state.subscribe = action.payload;
                state.loading = false;
            })
            .addCase(postSubscribeAction.rejected, (state) => {
                state.subscribe = [];
                state.loading = false;
            }) 
    }
})

export default mainSlice.reducer