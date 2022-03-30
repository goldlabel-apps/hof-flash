// @ts-nocheck
import { AppThunk } from "../../../app/store";
import { setFlashError } from "../";
import {
  initPersonaClip,
  initViewerClip,
  remove,
} from "../../../flash/ActionScript";

export const initFlash = (): AppThunk => async (dispatch: any) => {
  try {
    remove("ssr");
    initPersonaClip();
    initViewerClip();
  } catch (error) {
    dispatch(setFlashError(error));
    console.error(error);
  }
};
