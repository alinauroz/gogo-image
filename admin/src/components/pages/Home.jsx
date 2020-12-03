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
        {title: 'Orders', value: orders.total, desc: 'Total Orders'},
        {title: 'Completed', value: orders.completed, desc: 'Orders completed so far'},
        {title: 'Uncompleted', value: orders.uncompleted, desc: 'Uncompleted orders so far'},
        {title: 'Last 24 hrs', value: orders.last24, desc: 'Orders in last 24 hours'},
        {title: 'Last Week', value: orders.lastWeek, desc: 'Orders in last Week'},
        {title: 'Last Month', value: orders.lastMonth, desc: 'Orders in last Month'},
        {title: 'Past Due', value: orders.pastDue, desc: 'Due date passed'},
        {title: '', value: orders.uncompleted, desc: ''},
        {title: '', value: orders.uncompleted, desc: ''},
        {title: '', value: orders.uncompleted, desc: ''},
        {title: '', value: orders.uncompleted, desc: ''},
        {title: '', value: orders.uncompleted, desc: ''},
        {title: '', value: orders.uncompleted, desc: ''},
        {title: '', value: orders.uncompleted, desc: ''},
        {title: '', value: orders.uncompleted, desc: ''},
    ]

    return (
        <>
            {
                STATS.map((stat, index) => {
                    return (
                        <div className = 'stat-container'>
                            <h2 style = {{marginBottom: 2, marginTop: 3}}>{typeof stat.value !== 'undefined' ? stat.value: '-'}</h2>
                            <h5 style = {{marginTop: 2, marginBottom: 1}}>{stat.title}</h5>
                            <p style = {{fontSize: 11, margin: 0}}> {stat.desc} </p>
                        </div>
                    )
                })
            }
        </>
    )
}