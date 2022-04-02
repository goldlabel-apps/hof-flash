import { getElement, animateTo } from "./";

export const spreadOut = (clips) => {
  try {
    let totalHeight = 0;
    for (let i = 0; i < clips.length; i++) {
      const { id } = clips[i];
      // console.warn(getElement(id));
      // @ts-ignore
      totalHeight = totalHeight + getElement(id).height;
      //
      // // fadeIn(id);
    }
    for (let j = 0; j < clips.length; j++) {
      const { id } = clips[j];
      const adjustedTop = j * 125 - totalHeight;
      animateTo(id, "centered", { left: 0, top: adjustedTop });
    }
  } catch (error) {
    return false;
  }
};
