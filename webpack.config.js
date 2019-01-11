const path = require('path');

module.exports = {
	entry: './src/eather.js',
	mode: 'development',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	}
};
