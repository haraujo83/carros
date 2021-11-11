const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);


mix
    .scripts('node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js', 'public/js/bootstrap.bundle.min.js')
    .scripts('node_modules/admin-lte/plugins/jquery/jquery.min.js', 'public/js/jquery.min.js')
    .scripts('node_modules/admin-lte/plugins/sweetalert2/sweetalert2.all.min.js', 'public/js/sweetalert2.all.min.js')

    .scripts('node_modules/admin-lte/dist/js/adminlte.min.js', 'public/js/adminlte.min.js')

    .scripts('node_modules/@popperjs/core/dist/umd/popper.min.js', 'public/js/popper.min.js')
    .scripts('node_modules/tippy.js/dist/tippy-bundle.umd.min.js', 'public/js/tippy-bundle.umd.min.js')

    .css('node_modules/admin-lte/dist/css/adminlte.min.css', 'public/css/adminlte.min.css')
    .css('node_modules/@fortawesome/fontawesome-free/css/all.min.css', 'public/css/fontawesome-free.min.css')
;