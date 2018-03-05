import Navigation from 'components/Navigation';

function action() {
    return {
        chunks: ['notFound'],
        title: 'Not Found',
        status: 404,
        component: `
            <div>
                ${Navigation()}
                Not found
            </div>
        `
    }
}

export default action;
