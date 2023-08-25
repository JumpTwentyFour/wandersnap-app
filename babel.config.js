/* eslint-env node */

module.exports = function (api) {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
          alias: {
            '@': './src',
            '~': '.',
          },
        },
      ],
      'nativewind/babel',
      'react-native-reanimated/plugin', // reanimated must be last
    ],
  }
}
