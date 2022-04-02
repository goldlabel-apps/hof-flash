import { getElement, animateTo, setPosition } from "./";

export const spreadOut = (clips) => {
  try {
    let totalHeight = 0;
    for (let i = 0; i < clips.length; i++) {
      const { id } = clips[i];
      // @ts-ignore
      totalHeight = totalHeight + getElement(id).height;
    }
    for (let j = 0; j < clips.length; j++) {
      const { id } = clips[j];
      const adjustedTop = 10 + j * 125;
      setPosition(id, "topmiddle", { left: 0, top: adjustedTop });
    }
  } catch (error) {
    return false;
  }
};
