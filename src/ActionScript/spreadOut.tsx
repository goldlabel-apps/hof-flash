import { getElement, animateTo, setPosition } from "./";

const layoutMobile = (clips) => {
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
  return true;
};

const layoutDesktop = (clips) => {
  // console.warn("layoutDesktop");
  setPosition(clips[0].id, "topmiddle", { left: -175, top: 32 });
  setPosition(clips[1].id, "topmiddle", { left: 350, top: 32 });
  return true;
};

export const spreadOut = (clips) => {
  try {
    let layout = "mobile";
    const stage = getElement("flashStage");
    // @ts-ignore
    const { width, mode } = stage;
    if (width > 690 && mode === "landscape") {
      // console.warn("do this");
      layout = "desktop";
    }

    switch (layout) {
      case "desktop":
        layoutDesktop(clips);
        break;
      default:
        layoutMobile(clips);
    }
  } catch (error) {
    return false;
  }
};
