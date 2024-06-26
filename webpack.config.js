// webpack.config.js
module.exports = {
  // ... ваши существующие настройки
  module: {
    rules: [
      // ... ваши существующие правила
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules\/@tonconnect\/sdk/, // Исключаем модуль
        use: ['source-map-loader'],
        enforce: 'pre',
      },
    ],
  },
  ignoreWarnings: [
    {
      module: /@tonconnect\/sdk/, // Игнорируем предупреждения
    },
  ],
};
