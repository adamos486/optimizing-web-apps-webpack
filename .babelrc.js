module.exports =  {
  presets: [
    ['@babel/preset-env', {
      'debug': false,
      'modules': false,
      'useBuiltIns': 'usage',
      targets: {
        browsers: ['> 1%']
      }
    }]
  ]
};