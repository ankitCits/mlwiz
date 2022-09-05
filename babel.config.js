module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        "root": ["./src"],
        "alias": [
          // { "@shared-components": "./shared/components" },
          // { "@shared-constants": "./shared/constants" },
          // { "@shared-theme": "./shared/theme" },
          // { "@font-size": "./shared/theme/font-size" },
          // { "@api": "./services/api/index" },
          // { "@fonts": "./shared/theme/fonts/index" },
          // { "@colors": "./shared/theme/colors" },
          // { "@theme": "./shared/theme/index" },
          // { "@services": "./services" },
          // { "@screens": "./screens" },
          // { "@utils": "./utils/" },
          // { "@assets": "./assets/" }
        ],
        "extensions": [".tsx", ".ts", ".js", ".json", ".cjs", ".graphql"]
      }
    ],
    "react-native-reanimated/plugin",
  ],
};