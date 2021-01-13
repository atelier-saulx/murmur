"use strict";

module.exports = (() => {
  if (typeof window !== "undefined") {
    return { murmurhash: () => null };
  }
  try {
    const murmur = require("./builds/" +
      process.platform +
      "_" +
      process.arch +
      "_" +
      process.versions.modules +
      ".node");

    return murmur;
  } catch (e) {
    const fs = require("fs");
    const pathResolve = require("path").resolve;
    const { execSync } = require("child_process");
    let murmur;
    console.log(
      "Cannot use prebuilt Murmur version. Falling back to murmurhash-native."
    );
    // check for murmurhash-native without adding it to the require cache
    module.paths.forEach((path) => {
      if (fs.existsSync(pathResolve(path, "murmurhash-native")) === true) {
        murmur = require("murmurhash-native");
      }
    });
    if (!murmur) {
      console.log("Installing murmurhash-native");
      execSync("npm install murmurhash-native");
      murmur = require("murmurhash-native");
    }
    return murmur;
  }
})();
