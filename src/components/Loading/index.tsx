/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import React, { FC, memo } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import './index.scoped.scss';
interface Props {}

const Loading: FC<Props> = (props) => {
    return (
        <div className="m-loading">
            <MoonLoader size={30} color="#f8413d" loading></MoonLoader>
        </div>
    );
};

export default memo(Loading);
