const fs = require('fs');
const path = require('path');

const {DefinePlugin} = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');

//@ts-ignore
const {version, description, name: appName} = require('./package.json');

module.exports = (env) => {
  console.log(env);

  const DEV = env === 'development';

  const nameTemplate = (ext = 'js') => `[name].${ext}`;
  const iconsDirname = '';

  const gdomains = require('./src/domains/gdomains.js');
  const ydomains = require('./src/domains/ydomains.js');
  const cdomains = require('./src/domains/cdomains.js');

  const ROOT = path.resolve(process.cwd());

  return {
    target: 'web',
    watch: DEV,
    devtool: DEV ? 'cheap-module-eval-source-map' : undefined,
    mode: DEV ? 'development' : 'production',
    entry: {
      background: './src/background/background.ts',
      'google-content': './src/page/google-content.ts',
      'yandex-content': './src/page/yandex-content.ts',
      'cian-content': './src/page/cian-content.ts',
      settings: './src/settings/index.ts'
    },
    output: {
      devtoolModuleFilenameTemplate: '[absolute-resource-path]',
      path: path.resolve(__dirname, 'dist'),
      filename: nameTemplate()
    },
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.vue', '.pug'],
      alias: {
        vue$: 'vue/dist/vue.runtime.esm.js',
        jquery$: 'jquery/dist/jquery.slim.min.js'
      }
    },
    stats: 'minimal',
    performance: {
      hints: false
    },
    node: {
      //console: false,
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      __dirname: false,
      __filename: false
    },
    /*
    optimization: {
      minimize: !DEV,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {collapse_vars: false},
            output: {comments: false}
          }
        }),
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.css$/,
          cssProcessor: require('cssnano'),
          //@ts-ignore
          cssProcessorPluginOptions: {
            preset: ['default', {discardComments: {removeAll: true}, zindex: false}]
          }
        })
      ]
    },

     */
    plugins: [
      new GenerateJsonPlugin('manifest.json', {
        manifest_version: 2,
        name: 'Dublicate page search',
        short_name: appName,
        description,
        version,
        minimum_chrome_version: '62.0',
        icons: {
          16: `${iconsDirname}16.png`,
          32: `${iconsDirname}32.png`,
          48: `${iconsDirname}48.png`,
          128: `${iconsDirname}128.png`
        },
        browser_action: {
          default_icon: {
            16: `${iconsDirname}16.png`,
            19: `${iconsDirname}19.png`,
            20: `${iconsDirname}20.png`,
            32: `${iconsDirname}32.png`,
            38: `${iconsDirname}38.png`,
            40: `${iconsDirname}40.png`
          },
          default_title: 'Dublicate page search',
          default_popup: 'settings.html'
        },
        commands: {
          reset: {
            description: 'Сброс подсветки открытых страниц (горячие клавиши сработают только на страницах поисковиков)'
          },
          resetAll: {
            description: 'Очистить всё'
          },
          resetLinks: {
            description: 'Очистить ссылки'
          },
          'close-search-tabs': {
            description: 'Закрытие всех вкладок гугла и яндекса с поиском картинок'
          },
          'toogle-words': {
            description: 'Вкл/откл подсветки словаря'
          },
          'open-yandex-links': {
            description: 'Открыть все ссылки на яндекс картинки с service.cian.ru'
          },
          'open-google-links': {
            description: 'Открыть все ссылки на google картинки с service.cian.ru'
          },
          'open-all-links': {
            description: 'Открыть все ссылки на картинки с service.cian.ru'
          }
        },
        content_scripts: [
          {
            matches: ydomains,
            js: ['jquery.js', 'yandex-content.js'],
            run_at: 'document_start'
          },
          {
            matches: gdomains,
            js: ['jquery.js', 'google-content.js'],
            run_at: 'document_start'
          },
          {
            matches: cdomains,
            js: ['jquery.js', 'cian-content.js'],
            run_at: 'document_start'
          }
        ],
        options_page: 'settings.html',
        options_ui: {
          page: 'settings.html',
          browser_style: false
        },
        background: {
          scripts: [
            'background.js'
          ],
          persistent: true
        },
        content_security_policy: "script-src 'self' 'unsafe-eval'; object-src 'self'",
        permissions: [
          'tabs',
          'unlimitedStorage',
          ...gdomains,
          ...ydomains,
          ...cdomains
        ]
      }),
      new DefinePlugin({
        APP_NAME: JSON.stringify(appName),
        APP_TITLE: JSON.stringify('Dublicate page search'),
        'process.env.NODE_ENV': JSON.stringify(DEV ? 'development' : 'production'),
        'process.env.DEBUG': JSON.stringify(DEV),
        DEBUG: JSON.stringify(DEV)
      }),
      new CopyWebpackPlugin(['./src/icons']),
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        title: 'Settings',
        filename: 'settings.html',
        chunks: ['settings'],
        template: path.resolve(__dirname, './src/settings/index.html'),
        inlineSource: '\\.css$'
      }),
      new CopyWebpackPlugin([{from: path.resolve(ROOT, './node_modules/jquery/dist/jquery.js'), to: 'jquery.js'}])
    ],
    module: {
      rules: [
        {
          test: /\.(js)$/,
          loaders: ['babel-loader'],
          exclude: [/node_modules/]
        },
        {
          test: /\.(ts)$/,
          loaders: ['babel-loader', 'ts-loader'],
          exclude: [/node_modules/]
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {ts: 'ts-loader', js: 'ts-loader'},
            esModule: true
          }
        },
        {
          test: /\.(png|jpg|gif|webp|eot|svg|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {limit: Number.MAX_SAFE_INTEGER}
        },
        {test: /\.scss$/, use: ['style-loader', {loader: 'css-loader'}, {loader: 'sass-loader'}]},
        {test: /[^_]\.css$/, use: ['style-loader', {loader: 'css-loader', options: {sourceMap: DEV}}]},
        {test: /\.css$/, use: ['style-loader', {loader: 'css-loader', options: {sourceMap: DEV}}]},
        {test: /\.pug$/, loader: 'pug-loader', options: {pretty: DEV}}]
    }
  };
};
