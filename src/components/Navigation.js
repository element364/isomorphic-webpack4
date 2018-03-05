import Link from 'components/Link';

const Navigation = () => `
    <div>
        ${Link({ to: '/', children: 'Home' })}
        ${Link({ to: '/about', children: 'About' })}
        ${Link({ to: '/contacts', children: 'Contacts' })}
    </div>
`;

export default Navigation;
