import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Flash from "./Flash";

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

const dashd = () => {
  console.warn("dashd");
  return;
};


export {
  Flash,
  dashd,
}