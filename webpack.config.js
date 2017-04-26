var webpack = require('webpack');
var path = require('path');

module.exports = {
	context:__dirname,
	entry:{
		main:'./src/root.js'
	},
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'js/bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:path.resolve(__dirname,'node_modules'),
				loader:'babel-loader',  //处理es6代码在浏览器环境中运行
				query:{
					presets:['react','es2015'],
					"plugins":[
                        ["import",{"libraryName":"antd","style":'css'}]
                    ]
				}
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader?importLoaders=1',  //loader串联使用
			},
			{
				test:/\.(png|jpg|gif|svg)$/i,
				loader:'url-loader',
				query:{
					'limit':20000, //图片小于20000时被打包到html或者css里成base64格式的，大于20000，采用file-loader打包成单个文件
					'name':'assets/[name]-[hash:5].[ext]'   //图片打包输出的文件名
				}
			}
		]
	}
}