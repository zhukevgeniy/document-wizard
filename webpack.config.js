const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageJSON = require("./package.json");

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  target: "web", // https://github.com/webpack/webpack-dev-server/issues/2758

  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
  },

  devServer: {
    hot: true,
    port: 3002,
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "DocumentWizard",
      library: { type: "var", name: "DocumentWizard" },
      filename: "remoteEntry.js",
      exposes: {
        "./Wizard": "./src/components/Wizard/index.js",
      },
      shared: {
        react: {
          requiredVersion: packageJSON.dependencies.react,
          singleton: true,
        },
        "react-dom": {
          requiredVersion: packageJSON.dependencies["react-dom"],
          singleton: true,
        },
      },
    }),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
