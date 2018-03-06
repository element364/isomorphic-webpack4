import Navigation from 'components/Navigation';
import Contact from 'components/Contact';

function action() {
    return {
        chunks: ['contacts'],
        title: 'Contacts',
        component: `
            <div>
                ${Navigation()}
                Contacts:
                ${Contact({ name: 'Vasa', email: 'vasa@vasa.mail.ru' })}
                ${Contact({ name: 'Peta', email: 'peta@peta.tut.by' })}
            </div>
        `
    }
}

export default action;
