/* var debug = process.env.NODE_ENV !== "production";*/
var webpack = require('webpack');
var path = require('path');

module.exports = {
    /* devtool: debug ? "inline-sourcemap" : null,*/
  entry: __dirname + '/src/app.jsx',
  output: {
    /* Public path is very important as it permits webpack-dev-serv to watch the files correctly*/
      path: __dirname + '/public/', /* webpack output is served from /public/*/
    publicPath: 'public/', 
    filename: "app.min.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
	  exclude: [/node_modules/ ],
	  use: [{
	    loader: 'babel-loader',
	    options: {presets: ['react', 'es2015', 'stage-0']},
	  }]
      }
    ],
  },
    /* Resolve is important as it loads all imports files etc...*/
    resolve: {
	extensions: ['.js','.jsx']
    },
    plugins: /*debug ? [] : */ [
	/* Hot module replacement plugin obligatoire depuis WBP 2.0*/
	/* new webpack.HotModuleReplacementPlugin()*/ /* Not needed fam */
      /* new webpack.optimize.DedupePlugin(),*/
      /* new webpack.optimize.OccurenceOrderPlugin(),*/
      /* new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),*/
  ],
    devServer: {
        host: '0.0.0.0',
	disableHostCheck: true,
        port: 3000,
        inline:true,
        stats: 'errors-only'
    }
};
