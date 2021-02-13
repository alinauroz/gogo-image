import React from 'react'
import {View, Text} from '../Basic/AppComponents'
import Viewer from '../../utils/Viewer'
import {request} from '../../utils/request'
import {api} from '../../data/api'
import { conciseDate, addDays } from '../../utils/Date'
import Pager from '../../utils/Pager'
import Dispute from './Dispute'

export default function (props) {

    const [data, setData] = React.useState();
    const [error, setError] = React.useState('');
    const [pageSize, setPageSize] = React.useState(10);
    const [startIndex, setStartIndex] = React.useState(0);
    const [invoiceLink, setInvoiceLink] = React.useState('');
    const [disputeId, setDisputeId] = React.useState(null)
    
    const openDispute = (e, data) => {
        setDisputeId(data.dispute);
    }

    const openSubmitOrder = (e, data) => {
        props.setBase(data, 'salesData', true);
        props.setScreen('SubmitOrder');
    }

    const setPage = (i_) => {
        setStartIndex(--i_ * pageSize)
        console.log(i_ * pageSize, pageSize)
    }

    React.useEffect(() => {
        //document.title = 'My Orders - ' + (props.info ? props.info.name: '');
    })

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

    if (! data) {

        request({
            route: 'orders',
            method: 'GET',
            credentials: 'include'
        }).then(res => {
            if (res.data) {

                res.data.map(order => {    
                    //order.invoice = {type: 'link', value : order.invoiceNo, link: 'order/' + order.invoiceNo}
                    order.invoice = order.invoiceNo
                    order.status = order.complete ? 'Completed' : 'In Progress'
                    order.date = conciseDate(order.createdAt)
                    order.fullfillment = conciseDate(addDays(order.createdAt, order.nextDayService ? 1: 7))
                    order._dispute = order.dispute ? true: false;
                    order.Price = '$' + (order.price || 0);
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
            <div style={{display: disputeId? 'block': 'none'}}>
            <Dispute 
                id={disputeId}
                hide={() => setDisputeId(null)}
            />
            </div>
            <Text style = {{textAlign: 'center', fontWeight: 'bold', fontSize: 22}}>Sales Data</Text>
            <br />
            {
                data ?
                (
                <View className = 'order-container'>
                    <View className = 'order-pager-container' style = {{textAlign: 'left', marginBottom: 20}}>
                        Show <input type = 'number' min={1} onChange = {(e) => e.target.value ? setPageSize(Number(e.target.value)): setPageSize(1)} value = {pageSize} className = 'field-input' style = {{width: 40, textAlign: 'center'}}/> entries
                        
                    </View>
                    <Viewer 
                        data = {data.slice(startIndex, pageSize + startIndex)}
                        hidden = {['price', 'coupon', 'dispute', '_dispute', 'subtotal', 'invoiceNo', 'submission', 'createdAt', 'items', '_id', 'updatedAt', 'user', 'complete', 'nextDayService']}
                        actions = {[
                            {onClick: getOrderFile, value: '⬇ Files', className : 'btn btn-primary'},
                            {onClick: getOrderFile, value: '⬇ Submission', className : 'btn btn-primary', condition: 'complete'},
                            {onClick: openDispute, value: '⚠', condition1: 'dispute', className : 'btn btn-primary'},
                            {onClick: openSubmitOrder, value: 'U', className: 'btn btn-primary'}
                        ]}
                    />
                    <View className = 'order-pager-container'>
                        <span style = {{float: 'left'}}>
                            Showing {startIndex + 1} to {(startIndex + 1) * pageSize < data.length ? (startIndex + 1) * pageSize: data.length} of {data.length} entries
                        </span>
                        <Pager 
                            count = {Math.ceil(data.length / pageSize)}
                            setPage = {setPage}
                        />
                    </View>
                </View>
                )
                : error ? <Text>{error}</Text> : <Text>loading ...</Text>
            }
            <Text className = 'note only-mobile'>Scroll Table to View More</Text>
        </View>
    )

}