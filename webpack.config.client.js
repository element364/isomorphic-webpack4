const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const AssetsPlugin = require('assets-webpack-plugin');

const isAnalyze = process.argv.includes('--analyze') || process.argv.includes('--analyse');

const clientConfig = {
    entry: {
        client: ['./src/client.js']
    },
    output: {
        path: path.resolve(__dirname, 'build', 'public'),
        chunkFilename: '[name].chunk.js',
        filename: '[name].js'
    },
    plugins: [
        new AssetsPlugin({
            path: path.resolve(__dirname, 'build'),
            filename: 'assets.json',
            prettyPrint: true,
        }),
        ...isAnalyze ? [new BundleAnalyzerPlugin({ analyzerMode: 'static' })] : []
    ],
    optimization: {
        runtimeChunk: false,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    }
};

module.exports = clientConfig;