import Navigation from 'components/Navigation';

function action() {
    return {
        chunks: ['home'],
        title: 'Home',
        component: `
            <div>
                ${Navigation()}
                Home
                <a href='/adsadadasdasd'>Broken link</a>
            </div>
        `
    }
}

export default action;
