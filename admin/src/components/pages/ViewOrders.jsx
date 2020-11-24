import React from 'react'
import {request} from '../../utils/request'
import Viewer from '../../utils/Viewer'
import {api} from '../../data/api'

export default function (props) {

    const [orders, setOrders] = React.useState();
    const [error, setError] = React.useState('');

    const getOrderFile = async (e, data) => {

        let res = await request({
            route: 'orders/',
            method: 'GET',
            credentials: 'include',
            params: data._id
        })

        if (res.status == 'success') {
            window.open(api + 'zips/' + data.invoiceNo + '.zip', '_blank')
        }
        else alert('Error in downloading files');

    }

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
        <div className = 'box'>
            {
                orders ?
                <Viewer 
                    data = {orders}
                    hidden = {['submission', 'items', '_id', 'updatedAt']}
                    actions = {[
                        {onClick: getOrderFile, value: '⬇', className : 'btn btn-primary'}
                    ]}
                />
                : error ? <>{error}</> : 'loading ...'
            }
        </div>
    )

}