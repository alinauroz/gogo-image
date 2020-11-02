import {View, Text, Image, Button, Tr, Td, Th, Table} from '../Basic/AppComponents'

export default function (props) {
    return (
        <Tr className = 'cart-tr'>
            <Td className = 'cart-td' style = {{minWidth: '50px'}}></Td>
            <Td className = 'cart-td' style = {{width: 220, textAlign: 'center'}}>
                    <Image
                        source = "https://www.viewbug.com/media/mediafiles/2016/05/28/66284132_medium.jpg"
                        className = 'cart-unit-image'
                        style = {{ maxHeight: '120px'}}
                    />
            </Td>
            <Td className = 'cart-td' style = {{maxWidth: window.innerHeight * 0.13}}>
                <p>My name is Ali</p>
            </Td>
            <Td className = 'cart-td'>
                <View>
                    <Image 
                        source = "https://i.pinimg.com/236x/f8/89/b2/f889b2a22f25f7ddb1b90b39d0ad86c6.jpg"
                        className = 'cart-unit-image'
                        style = {{height: '120px'}}
                    />
                </View>
            </Td>
            <Td className = 'cart-td'>
                <View>
                    <Image 
                        source = "https://webstockreview.net/images/clipart-heart-flower-2.png"
                        className = 'cart-unit-image'
                        style = {{maxWidth: '120px', maxHeight: '120px'}}
                    />
                </View>
            </Td>
            <Td className = 'cart-td'>
                <View>
                    <Image 
                        source = "https://webstockreview.net/images/clipart-heart-flower-2.png"
                        className = 'cart-unit-image'
                        style = {{maxWidth: '120px', maxHeight: '120px'}}
                    />
                </View>
            </Td>
            <Td className = 'cart-td'>
                <View>
                    <input
                        type = 'button'
                        value = 'Remove'
                        className = 'cancel-button'
                    />
                </View>
            </Td>
            <Td className = 'cart-td'>
                <View>
                    <Text style = {{marginTop: 12.5, fontSize: 14}}>30</Text>
                </View>
            </Td>
            <Td className = 'cart-td' style = {{minWidth: '50px'}}></Td>
        </Tr>
    )
}