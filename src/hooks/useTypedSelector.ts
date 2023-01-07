import { RootState } from './../store/index';
import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from 'react-redux';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector