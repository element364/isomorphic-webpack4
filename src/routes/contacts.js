import Navigation from '../components/Navigation';

function action() {
    return {
        chunks: ['contacts'],
        title: 'Contacts',
        component: `
            <div>
                ${Navigation()}
                Contacts
            </div>
        `
    }
}

export default action;
