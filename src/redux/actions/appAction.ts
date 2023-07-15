import {APP_INITIALIZED} from './actionTypes';

export type AppActionType = setAppInitializedAC

export type setAppInitializedAC = ReturnType<typeof setAppInitializedAC>
export const setAppInitializedAC = () => ({
    type: APP_INITIALIZED,
} as const)

