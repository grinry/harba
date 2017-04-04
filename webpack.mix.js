const mix = require('laravel-mix');
const path = require('path');
let webpack = require('webpack');

mix.webpackConfig({
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: [ /node_modules/, /releases/ ]
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            path.resolve(__dirname, '../src')
        )
    ],
    devServer: {
        compress: false
    }
});

mix.options({
    //processCssUrls: false,
    publicPath: 'app/'
});

mix.js('src/js/app.ts', 'js').sourceMaps();
mix.sass('src/sass/app.scss', 'css').sourceMaps();
mix.copy('index.html', 'app/index.html', false);