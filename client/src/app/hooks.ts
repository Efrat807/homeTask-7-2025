import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// שימוש ב-AppDispatch במקום dispatch רגיל
export const useAppDispatch: () => AppDispatch = useDispatch;
// שימוש ב-RootState במקום any
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;