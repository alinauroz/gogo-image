import React from 'react'
import {request} from '../../utils/request'
import {Viewer} from '../../utils/Viewer'

export default function (props) {

    const [orders, setOrders] = React.useState();
    const [error, setError] = React.useState('');

    if (! orders) {

        request({
            route: 'orders',
            credentials: 'include',
            method: 'GET'
        }).then(res => {

            if (res.data) {
                setOrders(res.data);
            }
            else {
                setError('Some error occurred');
            }

        })

    }

    return (
        <div className = 'card'>
            {
                orders ?
                <Viewer 
                    data = {orders}
                />
                : error ? <>{error}</> : 'loading ...'
            }
        </div>
    )

}