// @ts-ignore
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, FlashDispatch } from "./store";

export const useFlashDispatch = () => useDispatch<FlashDispatch>();
export const useFlashSelector: TypedUseSelectorHook<RootState> = useSelector;
