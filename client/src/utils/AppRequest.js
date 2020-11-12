import {api} from '../data/api'

const getToken = localStorage.getItem('token')

const toQuery = (query) => {
    let queryStr = '';
    for (let x in query) {
        queryStr += `${x}=${query[x]}&`
    }
    return queryStr.slice(0, -1);
}

export const request = ({route, params, body = {}, query, method}) => {

    try {
        
        let res = await fetch(api + route + params + '?' + toQuery(query), {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Cookie': `jwt=${getToken()}`
            },
            body: JSON.stringify(body)
        });

        return res.json();
    }
    catch (err) {
        throw err;
    }

}