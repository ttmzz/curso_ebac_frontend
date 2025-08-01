// Importar pacotes

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');


// Minificar o HTML
function compilaHtml() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./build'));
}

// Compilar o Sass
function compilaSass() {
    return gulp.src('./src/style/main.scss')
    .pipe(sourcemaps.init()) // Inicia a criação do mapa
    .pipe(sass().on('error', sass.logError)) // Compila e trata erros
    .pipe(cleanCSS()) // Minimiza o CSS gerado
    .pipe(sourcemaps.write('./maps')) // Gera o arquivo .map
    .pipe(gulp.dest('./build/style')); // Salva o css e o .map no destino

}


// Tarefas exportadas

exports.default = function() {
    gulp.watch('./src/style/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./src/.html', {ignoreInitial: false}, gulp.series(compilaHtml));
}

exports.watch = exports.default;