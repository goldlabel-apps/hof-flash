import { spreadOut, setPosition, fadeIn, remove } from "./";

export const initFlash = (clips) => {
  remove("ssr");
  for (let i = 0; i < clips.length; i++) {
    const { id } = clips[i];
    setPosition(id, "centered", { left: 0, top: 0 });
    fadeIn(id);
  }
  spreadOut(clips);
  return true;
};

export const onWindowResize = (clips) => {
  try {
    console.warn("onWindowResize", clips);
    return true;
  } catch (error) {
    return false;
  }
};
