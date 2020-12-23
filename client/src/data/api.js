export const apis = {
    'dev': 'http://localhost:5000/',
    'prod': 'http://picsfies:5000/'
}

export const MODE = /localhost/.test(window.location.href) ? 'dev' : 'prod';

export const api = apis[MODE];