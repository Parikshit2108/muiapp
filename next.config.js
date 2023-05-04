const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const webpack = require("webpack");
const path = require("path");
module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
    },
  ],

  // your other plugins here
]);

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};

// module.exports = {
//   images: {
//     disableStaticImages: true
//   }
// }
