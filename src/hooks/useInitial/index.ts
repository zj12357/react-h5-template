/*
 * @version:  ;
 * @description: 请求成功，返回数据，请求失败，异常处理 ;
 * @autor: Full
 * @date: Do not edit
 */
import { useState, useEffect } from 'react';
import { ResponseData } from '@/types/api/common';

export default function useInitial<T, P>(
    api: (params?: P) => Promise<ResponseData<T>>, //请求
    params: P, //参数
    defaultError: string, //默认错误的提示
) {
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState({});
    const [errMsg, setErrmsg] = useState(defaultError);

    useEffect(() => {
        if (!loading) {
            return;
        }
        getData();
    }, [loading]);

    const getData = () => {
        api(params)
            .then((res: any) => {
                if (res.code === 200) {
                    setResponse(res);
                } else {
                    setErrmsg(errMsg || res.msg);
                }
            })
            .catch(() => {
                setErrmsg(errMsg || '请求错误,请稍后重试');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return {
        loading,
        response,
        errMsg,
    };
}
