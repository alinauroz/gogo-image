import React from 'react'
import {View, Text} from '../Basic/AppComponents'
import Viewer from '../../utils/Viewer'
import {request} from '../../utils/AppRequest'

export default function () {

    const [data, setData] = React.useState();
    const [error, setError] = React.useState('');

    if (! data) {

        request({
            route: 'orders',
            method: 'GET',
            credentials: 'include'
        }).then(res => {
            if (res.data) {
                setData(res.data)
            }
            else {
                setError('Some error occurred')
            }
        })

    }

    return (
        <View>
            {
                data ? 
                <Viewer 
                    data = {data}
                />
                : error ? <Text>{error}</Text> : <Text>loading ...</Text>
            }
        </View>
    )

}