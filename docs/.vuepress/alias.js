const webpack = require('webpack');
const IconFontPlugin = require('icon-font-loader').Plugin;
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
// const chainCSS = require('vue-cli-plugin-vusion/webpack/chainCSS');
const path = require('path');
module.exports = (options, ctx) => ({
    chainWebpack (config) {
        config.resolve.alias
            .set('@kubecube', path.resolve(__dirname, '../../kube-components'))
            .set('kube-vusion', path.resolve(__dirname, '../../kube-vusion'))
            // .set('cloud-ui.vusion$', path.resolve(__dirname, '../../kube-vusion/ui/cobalt/cloud-ui.js'))
            // .set('cloud-ui.vusion/cloud-ui.css$', path.resolve(__dirname, '../../kube-vusion/ui/cobalt/cloud-ui.css'))
            // .set('@necfe/cloud-ui-internal', path.resolve(__dirname, '../../kube-vusion/lib/cloud-ui-internal'));
        // console.log(config.toString())
        config.module.rule('css').oneOf('modules')
            .use('icon-font-loader')
            .before('postcss-loader')
            .loader('icon-font-loader')
            .end();
        config.module.rule('css').oneOf('normal')
            .use('icon-font-loader')
            .before('postcss-loader')
            .loader('icon-font-loader')
            .end();

        config.plugin('icon-font-plugin')
            .use(IconFontPlugin, [{
                fontName: 'icon-font',
                filename: '[name].[hash:16].[ext]',
                output: 'fonts',
                mergeDuplicates: false,
                smartSelector: true,
            }]);
        // console.log(config.toString())
    }
})