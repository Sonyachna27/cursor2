const path = require('path');
module.exports = {
    mode: 'development',
    entry:   {
        main: './lesson14/app.js',
        styles: './lesson14/example.css',
},
devtool: 'inline-source-map',
   
module: {
  rules: [
    { test: /\.css$/,
      use: [
        'css-loader',
        { loader: 'css-loader'},
        
      ]
    },
    
      
      { test: /\.(js)$/, 
      use:[ 'babel-loader'] }
    
    
  ]
},
  //  output: { filename: 'bundle.js', publicPath: '' },
}

// use: ['style-loader',
//                     'css-loader'],