"use strict";

const getBuild = () => {
  const murmur = require("./builds/" +
    process.platform +
    "_" +
    process.arch +
    "_" +
    process.versions.modules +
    ".node");

  return murmur;
};

module.exports = getBuild();
