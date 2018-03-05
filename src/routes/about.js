import Navigation from 'components/Navigation';

function action() {
    return {
        chunks: ['about'],
        title: 'About',
        component: `
            <div>
                ${Navigation()}
                About
            </div>
        `
    }
}

export default action;
