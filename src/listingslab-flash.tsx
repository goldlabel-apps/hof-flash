import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Flash from "./Flash";
import { getElement, getStage, layout } from "./";
import { initFlash, onWindowResize } from "./events";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Flash,
  errorBoundary(err, info, props) {
    console.warn("Flash", err, info, props);
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

export { initFlash, onWindowResize, getElement, getStage, layout };
