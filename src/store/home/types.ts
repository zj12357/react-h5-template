/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import { LeagueType } from '@/types/api/home';

export interface HomeState {
    data: LeagueType[];
    status: 'loading' | 'success' | 'failed';
}
