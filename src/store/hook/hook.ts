import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDisptch } from './store';

export const useAppDispatch = () => useDispatch<AppDisptch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
