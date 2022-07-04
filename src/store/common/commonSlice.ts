/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { CommonState } from './types';

const initialState: CommonState = {
    scrollTop: 0,
};

export const commonSlice = createSlice({
    name: 'common',
    initialState,

    reducers: {
        setScrollTop: (state: CommonState, action: PayloadAction<number>) => {
            state.scrollTop = action.payload;
        },
    },
});

export const { setScrollTop } = commonSlice.actions;

export const selectScrollTop = (state: RootState) => state.common.scrollTop;

export default commonSlice.reducer;
