module.exports = {
  entry: {
    index: './src/index.ts'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }
    ]
  },
  output: {
    libraryTarget: 'umd'
  },
  plugins: [
    new DtsBundlePlugin()
  ]
};

function DtsBundlePlugin() {}

DtsBundlePlugin.prototype.apply = function(compiler) {
  compiler.hooks.afterEmit.tap('DtsBundlePlugin', function() {
    const dts = require('dts-bundle');
    dts.bundle({
      name: '@raulanatol/localforage.async.storage',
      main: '.dts/index.d.ts',
      out: '../dist/index.d.ts',
      removeSource: true,
      outputAsModuleFolder: true,
      headerPath: null,
      headerText: ''
    });
  });
};
