/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
export interface ResponseData<T = any> {
    /**
     * 状态码
     * @type { number }
     */
    code: number;

    /**
     * 数据
     * @type { T }
     */
    data: T;

    /**
     * 消息
     * @type { string }
     */
    msg: string;
}
