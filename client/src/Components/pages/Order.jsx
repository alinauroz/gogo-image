import React from 'react'
import {request} from '../../utils/AppRequest'
import {api} from '../../data/api'
import {View, Text} from '../Basic/AppComponents'

export default function (props) {

    const invoiceNo = props.match.params.invoice;
    const [data, setData] = React.useState();
    const [error, setError] = React.useState('');

    if (! data) {
        request({
            route: 'orders/invoice/',
            params: invoiceNo,
            method: 'GET'
        }).then(res => {
            if (res.status == 'success') {
                setData(res.data);
            }
            else {
                setError(res.message ? res.message : 'Some error occurred');
            }
        })
    }

    return(
        <View>
            {
                data ?
                <>DATA</>
                : error ? <Text>Loading ...</Text> : <Text>{error}</Text>
            }
        </View>
    )

}