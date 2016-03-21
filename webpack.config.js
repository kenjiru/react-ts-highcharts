var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ProvidePlugin = webpack.ProvidePlugin;

var argv = require('optimist').argv;

var modules_dir = path.join(__dirname, "/node_modules");
var src_dir = path.join(__dirname, "/src");

var config = {
	devtool: "cheap-module-eval-source-map",
	context: __dirname,
	entry: {
		app: src_dir + '/App.tsx'
	},
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'App.js?[hash]'
	},
	module: {
		loaders: [
			{
				test: /\.tsx$/,
				loaders: envDep(
					['react-hot', 'ts-loader'],
					['ts-loader']
				),
				include: src_dir
			}, {
				test: /\.less$/,
				loader: envDep(
					"style-loader!css-loader!autoprefixer-loader!less-loader",
					ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader")
				)
			},
			{
				test: /\.css/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.(png|jpg|gif|eot|ttf|woff|woff2|svg)$/,
				exclude: /public/,
				loader: 'url-loader?limit=5000&name=[path][name].[ext]?[hash]'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
		    title: "Highcharts demo"
		}),
		new ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	]
};

module.exports = config;

/**
 * If running development mode, return the 'dev' argument, else return the 'prod' argument.
 */
function envDep(dev, prod) {
	return isDev() ? dev : prod;
}

function isDev() {
	return !!argv.dev;
}
