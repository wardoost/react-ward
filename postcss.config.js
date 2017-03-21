module.exports = {
  plugins: [
    require('stylelint'),
    require('postcss-reporter'),
    require('autoprefixer')({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9'
      ]
    })
  ]
}
