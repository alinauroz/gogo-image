import {View, Text, Image, Button, Tr, Td, Th, Table} from '../Basic/AppComponents'
import {capitalize} from '../../utils/string'
import {api} from '../../data/api'

export default function (props) {
    return (
        <Tr className = 'cart-tr'>
            <Td className = 'cart-td' style = {{minWidth: '50px'}}></Td>
            <Td className = 'cart-td' style = {{width: 220, textAlign: 'center'}}>
                    <Image
                        source = {api + 'images/' + props.item.templateThumb}
                        className = 'cart-unit-image'
                        style = {{ maxHeight: '120px'}}
                    />
            </Td>
            <Td className = 'cart-td' style = {{maxWidth: window.innerHeight * 0.13}}>
                <p>
                    {
                        props.item ? 
                        (
                            <>
                                <p style = {{margin: 0}}>Retouch: {capitalize(props.item.retouch)}</p>
                                <p>Text: {props.item.text}</p>
                                <p>Year: {props.item.year}</p>
                                <br />
                                {props.item.superimpose1 ? <p>Superimpose One</p>: ""}
                                {props.item.superimpose2 ? <p>Superimpose Two</p>: ""}
                            </>
                        )
                        : ""
                    }
                </p>
            </Td>
            <Td className = 'cart-td'>
                <View>
                    <Image 
                        source = {api + 'images/' + props.item.main}
                        className = 'cart-unit-image'
                        style = {{height: '120px'}}
                    />
                </View>
            </Td>
            <Td className = 'cart-td'>
                <View>
                    {
                        props.item.superimpose1 ?
                        <Image 
                            source = {api + 'images/' + props.item.superimpose1}
                            className = 'cart-unit-image'
                            style = {{maxWidth: '120px', maxHeight: '120px'}}
                        />
                        : ""
                    }
                </View>
            </Td>
            <Td className = 'cart-td'>
                <View>
                <View>
                    {
                        props.item.superimpose2 ?
                        <Image 
                            source = {api + 'images/' + props.item.superimpose2}
                            className = 'cart-unit-image'
                            style = {{maxWidth: '120px', maxHeight: '120px'}}
                        />
                        : ""
                    }
                </View>
                </View>
            </Td>
            <Td className = 'cart-td'>
                <View>
                    <input
                        type = 'button'
                        value = 'Remove'
                        className = 'cancel-button'
                        onClick = {() => props.removeFromCart(props.index)}
                    />
                </View>
            </Td>
            <Td className = 'cart-td'>
                <View>
                    <Text style = {{marginTop: 12.5, fontSize: 14}}>{props.item.price}</Text>
                </View>
            </Td>
            <Td className = 'cart-td' style = {{minWidth: '50px'}}></Td>
        </Tr>
    )
}