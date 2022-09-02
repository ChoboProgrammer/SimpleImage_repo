const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin =require("mini-css-extract-plugin");

module.exports={
  entry:"./src/js/index.js",
  output:{
    filename:"app.js",
    path:path.resolve(__dirname,"./public"),
    clean:true,
  },
  mode:"development",
  devtool:"source-map",
  plugins:[
    new HtmlWebpackPlugin({
      title:"imgSlider",
      template:'./index.html',
      inject:"body",
    }),
    new MiniCssExtractPlugin({filename:"style.css"}),
  ],
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[MiniCssExtractPlugin.loader,"css-loader"]
      },
      {
        test:/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i,
        type:'asset/inline',
      }
    ]
  },
  optimization:{
    minimizer:[
      new TerserWebpackPlugin(),
      new CssMinimizerPlugin(),
    ]
  },
  devServer:{
    host:"localhost",
    port:8080,
    open:true,
    watchFiles:"index.html",
  }

}