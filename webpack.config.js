const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		// Capturing the project root folder, and naming
        // the folder for the project compilation
		path: path.resolve(__dirname, 'dist'),
		// Compiled javascript file name
		filename: 'main.js',
        assetModuleFilename: 'assets/images/[name][ext]' 
	},
	resolve: {
		// Webpack will resolve this file extensions
		extensions: ['.js']
	},
    module: {
		rules: [
			{
				// Any file that starts with the extension '.msj' from the 
                // JS modules, or is just the extension '.js'
				test: /\.m?js$/,
				// Next we exclude files that we are not interested in dealing with babel
				exclude: /node_modules/,
				// Telling to webpack which is the loader to use
				use: {
					loader: 'babel-loader'
				}
			},
            {
                // Use any file with the extension '.css'
				test: /\.css$/i,
				// Which loader must use
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			},
            {
                // Use any file with this extensions
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource'
            }
		]
	},
    plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: './src/templates/index.html',
			// What will the resulting file be called after injecting the HTML
			filename: './index.html'
		}),
        new MiniCssExtractPlugin(),
        // This plugin moves from a single file, or a whole folder
		new CopyPlugin({
			// What are the elements that we are going to use?
			patterns: [
				{
					from: path.resolve(__dirname, "src", "assets/images"),
					// Where are we going to put the folder
					to: "assets/images"
				}
			]
		})
	],
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
      }
}