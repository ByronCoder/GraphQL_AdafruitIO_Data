const path = require('path');

module.exports = {
  mode: 'development',
  context: path.join(__dirname, './'),
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
        {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      
        use: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/react']
                }
            }
            ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
        ]
      
}
};