const Html = ({ title, scripts, component }) => `
    <html lang='en'>
        <head>
            <meta charSet='utf-8' />
            <meta httpEquiv='x-ua-compatible' content='ie=edge' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <title>${title}</title>
            <link rel='shortcut icon' type='image/x-icon' href='data:image/x-icon;,' />
            ${scripts.map(script => `<link rel='preload' href='${script}' as='script' />`).join('')}
        </head>
        <body>
            <div id='app'>
                ${component}
            </div>
            ${scripts.map(script => `<script src='${script}'></script>`).join('')}
        </body>
    </html>
`;

export default Html;
