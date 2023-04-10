import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { reducer } from '../redux/store/store';

export type RootState = ReturnType<typeof reducer>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export enum Status {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
