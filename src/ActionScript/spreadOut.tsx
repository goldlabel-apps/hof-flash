import { getElement, setPosition } from "./";

const layout = (clips, layoutMode) => {
  const naviCrumbClip = getElement("naviCrumbClip");
  // @ts-ignore
  const naviCrumbClipOffset = naviCrumbClip.height + 25;
  // console.warn("naviCrumbClipOffset", naviCrumbClipOffset, layoutMode)
  setPosition(clips[0].id, "topmiddle", { left: 0, top: 16 });
  setPosition(clips[1].id, "topmiddle", {
    left: -175,
    top: naviCrumbClipOffset,
  });
  setPosition(clips[2].id, "topmiddle", {
    left: 175,
    top: naviCrumbClipOffset,
  });
  return true;
};

export const spreadOut = (clips) => {
  try {
    let layoutMode = "mobile";
    const stage = getElement("flashStage");
    // @ts-ignore
    const { width, mode } = stage;
    if (width > 690 && mode === "landscape") {
      // console.warn("do this");
      layoutMode = "desktop";
    }

    switch (layoutMode) {
      case "desktop":
        layout(clips, "desktop");
        break;
      default:
        layout(clips, "mobile");
    }
  } catch (error) {
    return false;
  }
};
