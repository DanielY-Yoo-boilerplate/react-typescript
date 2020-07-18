const { resolve } = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  context: __dirname, // to automatically find tsconfig.json
  devtool: 'inline-source-map',
  entry: {
    main: resolve('./src/index.tsx')
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, './dist/scripts')
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: !isDevelopment }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        eslint: {
          enabled: true,
          files: './src/**/*.{ts,tsx,js,jsx}',
        },
      },
    })
  ]
}