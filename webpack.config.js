const { resolve } = require('path')

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
        exclude: /node_modules/,
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
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