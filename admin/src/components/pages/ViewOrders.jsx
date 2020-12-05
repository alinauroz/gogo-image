import React from 'react'
import {request} from '../../utils/request'
import Viewer from '../../utils/Viewer'
import {api} from '../../data/api'
import Pager from '../../utils/Pager'

export default function (props) {

    const [orders, setOrders] = React.useState();
    const [error, setError] = React.useState('');
    const [pageSize, setPageSize] = React.useState(3);
    const [startIndex, setStartIndex] = React.useState(0);

    const setPage = (i_) => {
        setStartIndex(--i_ * pageSize)
        console.log(i_ * pageSize, pageSize)
    }

    const getOrderFile = async (e, data) => {

        let res = await request({
            route: 'orders/files/',
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
                <>
                <Viewer 
                    data = {orders.slice(startIndex, pageSize + startIndex)}
                    hidden = {['submission', 'items', '_id', 'updatedAt']}
                    actions = {[
                        {onClick: getOrderFile, value: '⬇', className : 'btn btn-primary'}
                    ]}
                />
                <div className = 'order-pager-container'>
                    <span style = {{float: 'left'}}>
                        Showing {startIndex + 1} to {(startIndex + 1) * pageSize < orders.length ? (startIndex + 1) * pageSize: orders.length} of {orders.length} entries
                    </span>
                    <Pager 
                        count = {Math.ceil(orders.length / pageSize)}
                        setPage = {setPage}
                    />
                </div>
                </>
                : error ? <>{error}</> : 'loading ...'
            }
        </div>
    )

}