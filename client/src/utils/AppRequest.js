import {api} from '../data/api'

const getToken = () => localStorage.getItem('token')

const toQuery = (query) => {
    let queryStr = '';
    for (let x in query) {
        queryStr += `${x}=${query[x]}&`
    }
    return '?' + queryStr.slice(0, -1);
}

export const request = async ({route, params = '', body = {}, query = {}, method = 'GET'}) => {

    try {
        
        let res = await fetch(api + route + params + toQuery(query), {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Cookie': `jwt=${getToken()}`
            },
            body: method !== 'GET' ? JSON.stringify(body): null
        });

        return res.json();
    }
    catch (err) {
        throw err;
    }

}