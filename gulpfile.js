// Importar pacotes
// 1) Para o SASS
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // instala as extensões do SASS e sinconiza com o Gulp. OBS: npm install --save-dev gulp gulp-sass sass
const sourcemaps =  require('gulp-sourcemaps'); //  npm install --save-dev gulp-sourcemaps
const cleanCSS = require('gulp-clean-css'); // npm install gulp-clean-css --save-dev
// 2) Para o JavaScript
const uglify  = require('gulp-uglify'); // npm install --save-dev gulp-uglify
const obfuscate = require('gulp-obfuscate'); // npm install --save-dev gulp gulp-obfuscate
// 3) Para imagens
const imagemin = require('gulp-imagemin'); // npm install --save-dev gulp gulp-imagemin



// Compilar as imagens
function compilaImagens() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
    .on('end', () => console.log('Imagens processadas e salvas em build/images'));
}

// Compilar o JavaScript
function compilaJs() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify()) 
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'));
}


// Compilar o Sass
function compilaSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init()) // Inicia a criação do mapa
    .pipe(sass().on('error', sass.logError)) // compila e trata erros
    .pipe(cleanCSS()) // Minimiza o CSS gerado
    .pipe(sourcemaps.write('./maps')) // Gera o arquivo .map
    .pipe(gulp.dest('./build/styles')); // Salva o CSS (e o .map) no destino

}

// Tarefas exportadas
exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(compilaJs));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(compilaImagens));
}


// OBS: Para rodar o gulp no terminal use esse comando -> npm run gulp
