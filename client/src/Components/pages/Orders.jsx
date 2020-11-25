import React from 'react'
import {View, Text} from '../Basic/AppComponents'
import Viewer from '../../utils/Viewer'
import {request} from '../../utils/AppRequest'
import {api} from '../../data/api'

export default function () {

    const [data, setData] = React.useState();
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

    if (! data) {

        request({
            route: 'orders',
            method: 'GET',
            credentials: 'include'
        }).then(res => {
            if (res.data) {

                res.data.map(order => {
                    order.status = order.complete ? 'Completed' : 'In Progress'
                })

                setData(res.data)
            }
            else {
                setError('Some error occurred')
            }
        })

    }

    return (
        <View className = 'viewer-table' style = {{marginTop: 50}}>
            <Text style = {{textAlign: 'center', fontWeight: 'bold', fontSize: 22}}>My Orders</Text>
            <br />
            {
                data ? 
                <Viewer 
                    data = {data}
                    hidden = {['submission', 'items', '_id', 'updatedAt', 'user', 'complete']}
                    actions = {[
                        {onClick: getOrderFile, value: '⬇', className : 'btn btn-primary'}
                    ]}
                />
                : error ? <Text>{error}</Text> : <Text>loading ...</Text>
            }
        </View>
    )

}