// @ts-nocheck
import { RootState } from "../../app/store";
import { initFlash } from "./actions";
import { setFlashError } from "./flashSlice";

export { setFlashError, initFlash };

export const selectError = (state: RootState) => state.flash.flashError;
export const selectFlash = (state: RootState) => state.flash;
