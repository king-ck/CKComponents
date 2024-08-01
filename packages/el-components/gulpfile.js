import { src, dest, series } from "gulp"
import less from "gulp-less"
import autoprefixer from "gulp-autoprefixer"
import { watch } from "browser-sync";
import browserSync from "browser-sync";

const lessTask = () => {
    return src("src/style/*.less")
        .pipe(less())
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["> 1%", "last 2 versions"],
                cascade: false //  是否美化属性值
            })
        )
        .pipe(dest("dist/style"));
};
//页面刷新
const reloadTask = () => {
    browserSync.reload();
};

const browserTask = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html", series(reloadTask));
    //监听样式更新触发两个任务
    watch("src/style/*", series(lessTask, reloadTask));
};

export default browserTask;
