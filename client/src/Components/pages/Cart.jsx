import React from 'react'
import {Text, View, Image, Table, Tr, Td} from '../Basic/AppComponents'
import { Link } from 'react-router-dom'

import CartUnit from '../Unit/Cart'

export default function (props) {

    const cart = props.cart || [];

    React.useEffect(() => {
        document.title = 'My Cart - ' + (props.info ? props.info.name: '');
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
                    <Td className = 'cart-td cart-th'>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}>Remove</Text>
                    </Td>
                    <Td className = 'cart-td cart-th'>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}>Total</Text>
                    </Td>
                    <Td className = 'cart-td cart-th empty-th-td'>
                        <Text style = {{fontWeight: 'bold', fontSize: 13}}></Text>
                    </Td>
                </Tr>
            {
                cart.map((item, index) => {
                    return (
                        <CartUnit 
                            item = {item}
                            index = {index}
                            removeFromCart = {props.removeFromCart}
                            cart = {cart}
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
                        cart.map(item => {
                            totalPrice += item.price;
                        })
                        return <b>Total: ${totalPrice}</b>
                    })()
                }
            </View>
            <View style = {{display: 'flex', justifyContent: 'flex-end', paddingRight: '10%', paddingTop: 20}}>
                <Link to = '/checkout'>
                    <input 
                        type = 'button'
                        value = 'Next'
                        className = 'action-button'
                        style = {{width: 100}}
                    />
                </Link>
            </View>
        </View>
    )

    return <></>
}