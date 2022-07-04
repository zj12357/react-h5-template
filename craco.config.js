const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);
const pxtovw = require('postcss-px-to-viewport');
const autoprefixer = require('autoprefixer');
const WebpackBar = require('webpackbar');
const CracoLessPlugin = require('craco-less');
const { REACT_APP_API_URL } = process.env;

module.exports = {
    reactScriptsVersion: 'react-scripts' /* (default value) */,
    style: {
        modules: {
            localIdentName: '',
        },
        sass: {
            loaderOptions: {
                additionalData: `@import '@/assets/scss/index.scss';`, //设置公共scss
            },
        },
        postcss: {
            mode: 'extends' /* (default value) */ || 'file',
            plugins: [
                require('tailwindcss'),
                autoprefixer,
                // px转vw
                pxtovw({
                    unitToConvert: 'px', // 需要转换的单位，默认为"px"
                    viewportWidth: 375, // 视窗的宽度，对应h5设计稿的宽度，一般是375
                    // viewportHeight: 667,// 视窗的高度，对应的是我们设计稿的高度
                    unitPrecision: 3, // 单位转换后保留的精度
                    propList: [
                        // 能转化为vw的属性列表
                        '*',
                    ],
                    viewportUnit: 'vw', // 希望使用的视口单位
                    fontViewportUnit: 'vw', // 字体使用的视口单位
                    selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。cretae
                    minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
                    mediaQuery: false, // 媒体查询里的单位是否需要转换单位
                    replace: true, // 是否直接更换属性值，而不添加备用属性
                    // exclude: /(\/|\\)(node_modules)(\/|\\)/, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
                }),
            ],

            loaderOptions: {},
        },
    },
    eslint: {
        enable: true /* (default value) */,
        mode: 'extends' /* (default value) */ || 'file',
        configure: {
            /* Any eslint configuration options: https://eslint.org/docs/user-guide/configuring */
        },
        configure: (eslintConfig, { env, paths }) => {
            return eslintConfig;
        },
        pluginOptions: {
            /* Any eslint plugin configuration options: https://github.com/webpack-contrib/eslint-webpack-plugin#options. */
        },
        pluginOptions: (eslintOptions, { env, paths }) => {
            return eslintOptions;
        },
    },
    typescript: {
        enableTypeChecking: true /* (default value)  */,
    },
    babel: {
        presets: [['@babel/preset-env'], ['@babel/preset-react']],
        plugins: [
            [
                '@babel/plugin-proposal-decorators',
                {
                    legacy: true,
                },
            ], // 用来支持装饰器
            [
                '@babel/plugin-transform-runtime',
                {
                    useESModules: true,
                    regenerator: true,
                },
            ],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            ['@babel/plugin-proposal-private-methods', { loose: true }],
            [
                '@babel/plugin-proposal-private-property-in-object',
                { loose: true },
            ],
        ],
        loaderOptions: {
            /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */
        },
    },
    devServer: {
        publicPath: '/',
        port: 8000,
        hot: true,
        overlay: true,
        proxy: {
            '/excuse': {
                target: REACT_APP_API_URL,
                changeOrigin: true,
                logLevel: 'debug',
                headers: {
                    Cookie: '',
                },
                pathRewrite: {
                    '^': '',
                },
            },
        },
    },
    //配置别名
    webpack: {
        extensions: [
            '.js',
            '.ts',
            '.jsx',
            '.tsx',
            '.json',
            '.css',
            '.less',
            '.scss',
        ],
        alias: {
            '@': resolve('src'),
        },
        plugins: [
            new WebpackBar({
                profile: true,
                name: 'webpack',
                color: 'green',
            }),
        ],
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {},
        },
        {
            plugin: require('craco-plugin-scoped-css'),
        },
    ],
};
