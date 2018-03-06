import router from './router';
import createBrowserHistory from 'history/createBrowserHistory';

const container = document.getElementById('app');
const history = createBrowserHistory();

history.listen(async(location, action) => {
    console.log('Listen');
    const route = await router.resolve({
        pathname: location.pathname,
        query: location.search
    });

    if (route.redirect) {
        return history.replace(route.redirect);
    }

    container.innerHTML = route.component;

    document.title = route.title;
});

console.log('Adding handler');

document.body.addEventListener('click', e => {
    if (e.target.matches('a')) {
        const href = e.target.getAttribute('href');
        // local url
        if (href.startsWith('/')) {
            history.push(href);
            e.preventDefault();
        }
    }
});
