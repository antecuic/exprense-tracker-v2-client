const gulp = require('gulp')
const p = require('gulp-load-plugins')()

gulp.task('buildSvg', () =>
  gulp
    .src(`./src/svg/**/*.svg`)
    .pipe(p.svgmin())
    .pipe(
      p.inlineSvg({
        filename: '_m-svg.scss',
      })
    )
    .pipe(gulp.dest(`./src/scss/2-mixins`))
)
