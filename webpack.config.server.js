const path = require('path');

const serverConfig = {
    target: 'node',

    entry: './src/server.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'server.js'
    },
    resolve: {
        modules: ['node_modules', 'src']
    },
};

module.exports = serverConfig;