import { getElement, setPosition } from "./";

export const layout = (clips) => {
  try {
    const naviCrumbClip = getElement("naviCrumbClip");
    // @ts-ignore
    const naviCrumbClipOffset = naviCrumbClip.height + 25;
    setPosition(clips[0].id, "topmiddle", { left: 0, top: 16 });
    setPosition(clips[1].id, "topmiddle", {
      left: 0,
      top: naviCrumbClipOffset,
    });
  } catch (error) {
    return false;
  }
};
