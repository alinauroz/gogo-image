import React from 'react'

import OrderUnitViewer from './OrderUnitViewer'

function Text (props) {
    return ( <p 
            style = {props.style}
            className = {props.className}
            >
                {props.children}
            </p>);
}

export function View (props) {
    return <div 
                className = 'View'
                style = {props.style}
                className = {props.className}
            >
                {props.children}
            </div>
}

function Table (props){
    return <table
        style = {props.style}
        className = {props.className}
    >
        {props.children}
    </table>
}

function Tr (props){
    return <tr
        style = {props.style}
        className = {props.className}
    >
        {props.children}
    </tr>
}

function Td (props){
    return <td
        style = {props.style}
        className = {props.className}
    >
        {props.children}
    </td>
}

function Th (props){
    return <th
        style = {props.style}
        className = {props.className}
    >
        {props.children}
    </th>
}

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
                            setImages = {props.setImages}
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