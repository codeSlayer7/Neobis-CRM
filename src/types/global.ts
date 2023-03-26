import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { reducer } from '../redux/store';


export type NullableString = string | null;
export type NullableNumber = number | null;

export type RootState = ReturnType<typeof reducer>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
