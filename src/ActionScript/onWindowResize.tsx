import { initPersonaClip, initViewerClip } from "./";

export const onWindowResize = () => {
  initPersonaClip();
  // initFilebrowserClip();
  initViewerClip();
};
