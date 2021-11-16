"use strict";

const getBuild = () => {
  let murmur;
  try {
    murmur = require("./builds/" +
      process.platform +
      "_" +
      process.arch +
      "_" +
      process.versions.modules +
      ".node");
  } catch (err) {
    console.info("cannot find prebuid", err);
    murmur = require("murmurhash-native");
    console.log(murmur);
  }

  return murmur;
};

module.exports = getBuild();
