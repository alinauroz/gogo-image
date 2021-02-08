import React from 'react'
import {request} from '../../utils/request'
import {api} from '../../data/api'
import {View, Text} from '../Basic/AppComponents'
import OrderViewer from '../../utils/OrderViewer'

export default function (props) {

    const invoiceNo = 'PF1611868812607';
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
                setError('Order not found');
            }
        })
    }

    return(
        <View>
            {
                data ?
                <>
                    <div>
                        
                    </div>
                    <OrderViewer 
                        items = {data.items}
                        price = {data.price}
                    />
                </>
                : error ? <Text style = {{textAlign: 'center', marginTop: 20}}>{error}</Text> : <Text style = {{textAlign: 'center', marginTop: 20}}>Loading ...</Text>
            }
        </View>
    )

}