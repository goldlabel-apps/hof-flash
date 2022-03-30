import { getElement } from "./";

export const fadeOut = (divId: string) => {
  try {
    const el = getElement(divId);
    if (!el) {
      console.warn("fadeOut fail;", divId);
      return false;
    }
    console.warn("el", el);
  } catch (error) {
    return false;
  }
};
