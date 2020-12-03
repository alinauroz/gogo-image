import React from 'react'
import {request} from '../../utils/request'

export default function (props) {

    const [orders, setOrders] = React.useState({})
    const [users, setUsers] = React.useState({})

    if (Object.keys(orders).length <= 0) {

        request({
            route: 'orders/c/count',
            method: 'GET',
        }).then(d => {
            setOrders(d)
        })

    }

    const STATS = [
        {title: 'Orders', value: orders.total},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
    ]

    return (
        <>
            {
                STATS.map((stat, index) => {
                    return (
                        <div className = 'stat-container'>
                            <h2 style = {{marginBottom: 2}}>{typeof stat.value !== 'undefined' ? stat.value: '-'}</h2>
                            <h5 style = {{marginTop: 2}}>{stat.title}</h5>
                        </div>
                    )
                })
            }
        </>
    )
}