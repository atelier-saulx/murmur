"use strict";

module.exports = (() => {
  try {
    const murmur = require("./build/" +
      process.platform +
      "_" +
      process.arch +
      "_" +
      process.versions.modules +
      ".node");

    return murmur;
  } catch (e) {
    throw new Error(
      "This version of murmur is not compatible with your Node.js build:\n\n" +
        e.toString()
    );
  }
})();
