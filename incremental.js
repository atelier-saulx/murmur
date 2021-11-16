"use strict";

const getBuild = () => {
  let murmur;
  try {
    console.info(process.platform, process.arch, process.versions.modules);
    murmur = require("./builds/incremental" +
      process.platform +
      "_" +
      process.arch +
      "_" +
      process.versions.modules +
      ".node");
  } catch (err) {
    // murmur = require("murmurhash-native/incremental");
    // console.log(murmur);
  }

  return murmur;
};

module.exports = getBuild();
