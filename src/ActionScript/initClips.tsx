// topleft, topmiddle, topright, centered,
// bottomleft, bottommiddle, bottomright

import { setPosition, fadeIn } from "./";

export const initViewerClip = () => {
  setPosition("viewerClip", "centered", { top: 0, left: 0 });
  setTimeout(() => {
    fadeIn("viewerClip");
  }, 75);
};

export const initPersonaClip = () => {
  setPosition("personaClip", "topright", { top: 0, left: 0 });
  setTimeout(() => {
    fadeIn("personaClip");
  }, 25);
};

// export const initFilebrowserClip = () => {
//   setPosition("filebrowserClip", "topright", { top: 0, left: -50 });
//   setTimeout(() => {
//     fadeIn("filebrowserClip");
//   }, 50);
// };
