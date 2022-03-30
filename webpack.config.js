const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "listingslab",
    projectName: "flash",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    output: {
      library: {
        type: "system",
      },
    },
    externals: [
      "single-spa",
      "gsap",
      "react",
      "react-dom",
      "react-draggable",
      "react-redux",
      "@reduxjs/toolkit",
      "@mui/material",
      "@listingslab/shared",
    ],
  });
};
