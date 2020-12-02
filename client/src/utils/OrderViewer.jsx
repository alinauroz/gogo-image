import React from 'react'
import {View, Text, Image, Button, Tr, Td, Th, Table} from '../Components/Basic/AppComponents'
import { Link } from 'react-router-dom'

import OrderUnitViewer from './OrderUnitViewer'

export default function (props) {

    const items = props.items || [];

    React.useEffect(() => {
        //document.title = 'My Cart - ' + (props.info ? props.info.name: '');
    })

    return (
        <View style = {{display: 'block', marginTop: 50, width: '100%', marginLeft: 'calc(0% - 0px)'}}>
            <View style = {{maxWidth: '100%', overflowX: 'auto'}}>
            <Table style = {{width: '100%'}}>
                <Tr className = 'cart-tr'>
                    <Td className = 'cart-td cart-th empty-th-td'>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}></Text>
                    </Td>
                    <Td className = 'cart-td cart-th'>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}>Kaboom Template</Text>
                    </Td>
                    <Td className = 'cart-td cart-th'>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}>Service Type</Text>
                    </Td>
                    <Td className = 'cart-td cart-th'>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}>Your Image</Text>
                    </Td>
                    <Td className = 'cart-td cart-th'>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}>Superimpose # 1</Text>
                    </Td>
                    <Td className = 'cart-td cart-th'>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}>Superimpose # 2</Text>
                    </Td>
                    {/*<Td className = 'cart-td cart-th'>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}>Remove</Text>
                    </Td>
                    <Td className = 'cart-td cart-th'>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}>Total</Text>
                    </Td>*/}
                    <Td className = 'cart-td cart-th empty-th-td'>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}></Text>
                    </Td>
                </Tr>
            {
                items.map((item, index) => {
                    return (
                        <OrderUnitViewer
                            item = {item}
                            index = {index}
                            removeFromCart = {props.removeFromCart}
                            items = {items}
                        />
                    )
                })
            }
            </Table>
            </View>
            <View className = 'only-mobile' style = {{marginTop: 10, marginLeft: 20, fontSize: 13, fontStyle: 'italic'}}>
                <Text>Scroll the table to view more</Text>
            </View>
            <View style = {{display: 'flex', justifyContent: 'flex-end', paddingRight: '10%', paddingTop: 20}}>
                {
                    (() => {
                        let totalPrice = 0;
                        items.map(item => {
                            totalPrice += item.price;
                        })
                        return <b>Total: <sup>$</sup>{props.price}</b>
                    })()
                }
            </View>
        </View>
    )

    return <></>
}