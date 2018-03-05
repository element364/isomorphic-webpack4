const routes = {
    path: '',
    children: [{
        path: '',
        load: () => import(/* webpackChunkName: 'home' */ './home')
    }, {
        path: '/about',
        load: () => import(/* webpackChunkName: 'about' */ './about')
    }, {
        path: '/contacts',
        load: () => import(/* webpackChunkName: 'contacts' */ './contacts')
    }],

    async action({ next }) {
        const route = await next();

        if (route === null) {
            const notFound = await import(/* webpackChunkName: 'notFound' */ './notFound');

            return notFound.default();
        }
        
        return route;
    }
};

export default routes;