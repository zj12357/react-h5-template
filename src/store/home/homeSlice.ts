/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../';
import { getConfig } from '@/api/home';
import { HomeState } from './types';

const initialState: HomeState = {
    data: [],
    status: 'loading',
};

export const homeAsync = createAsyncThunk('home/fetchHome', async () => {
    const response = await getConfig();
    if (response.code === 200) {
        return response.data;
    }
});

export const homeSlice = createSlice({
    name: 'home',
    initialState,

    reducers: {},

    //extraReducers 处理接口状态，一般是列表加载，loading状态获取，加载成功，加载失败
    extraReducers: (builder) => {
        builder
            .addCase(homeAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(homeAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.data = action.payload || [];
            })
            .addCase(homeAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.data = [];
            });
    },
});

export const selectHome = (state: RootState) => state.home.data;

export default homeSlice.reducer;
