import express from 'express';
import compression from 'compression';
import Html from 'components/Html';
import router from './router';
import assets from '../build/assets.json';

const
    server = express(),
    port = process.env.PORT || 3000;

server.use(compression());
server.use(express.static('public'));

server.get('*', async(req, res) => {
    const route = await router.resolve({
        pathname: req.path,
        query: req.query
    });

    if (route.redirect) {
        return res.redirect(route.status || 302, route.redirect);
    }

    const data = {
        ...route,
        scripts: [
            assets.vendor.js,
            assets.client.js,
            ...route.chunks.map(chunk => assets[chunk].js)
        ]
    };

    const html = Html(data);

    res.status(route.status || 200).send(`<!doctype html>${html}`);
});

server.listen(port, () => {
    console.log(`Running on ${port}`)
});
