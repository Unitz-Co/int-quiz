const MODULE_RESOLVER = [
  "module-resolver",
  {
    extensions: [".js", ".ios.js", ".android.js", ".json"],
    root: ["./src"],
    alias: {
      "@components": "./src/components",
      "@screens": "./src/screens",
      "@services": "./src/services",
      "@utils": "./src/utils",
      "@stores": "./src/stores",
    },
  },
];
module.exports = function(api) {
  api.cache(true);
  return {
    plugins: [
      ["@babel/plugin-transform-flow-strip-types"],
      ["@babel/plugin-proposal-decorators", {legacy: true}],
      ["@babel/plugin-proposal-class-properties", {loose: true}],
      MODULE_RESOLVER
    ],
    presets: ["module:metro-react-native-babel-preset", "mobx"],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};