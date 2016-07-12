const mergeTrees = require('broccoli-merge-trees')
const compileSass = require('broccoli-sass')
const esTranspiler = require('broccoli-babel-transpiler')

const dirs = {
  scss: 'assets/scss',
  js: 'assets/js',
}

const styles = compileSass([dirs.scss], 'main.scss', 'styles.css', {
  outputStyle: 'compressed'
})

const scripts = esTranspiler(dirs.js, {
  compact: true
})

module.exports = mergeTrees([styles, scripts], {
  overwrite: true
})
