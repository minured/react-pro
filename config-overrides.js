const { override, fixBabelImports } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  })
);

// 使用 babel-plugin-import 之后 import
// import { Button } from "antd-mobile"
