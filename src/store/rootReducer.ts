/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { combineReducers } from '@reduxjs/toolkit';

import homeSlice from './home/homeSlice';
import commonSlice from './common/commonSlice';

const rootReducer = combineReducers({
    home: homeSlice,
    common: commonSlice,
});

export default rootReducer;
