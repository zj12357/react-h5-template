import request from '@/utils/request';
import { ResponseData } from '@/types/api/common';
import { LeagueType } from '@/types/api/home';

// 获取配置
export const getConfig = () =>
    request.post<LeagueType[], ResponseData<LeagueType[]>>(
        '/excuse/pcHome/getLeagueType',
    );
