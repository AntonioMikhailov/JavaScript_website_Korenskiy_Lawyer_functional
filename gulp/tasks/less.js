import lessEx from 'gulp-less';
import autoprefixer from "gulp-autoprefixer";
export const less = () => {
  return app.gulp.src(app.path.src.less, {
      "allowEmpty": true
    })
    .pipe(lessEx())
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserlist: ["last 3 version"],
      cascade: true,
    }))
    .pipe(app.gulp.dest(app.path.build.css));
};