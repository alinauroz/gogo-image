import React from 'react'
import {View, Image, Text} from '../Basic/AppComponents'
import ImageLoader from '../../utils/ImageLoader'
import {capitalize} from '../../utils/string'
import { request } from '../../utils/AppRequest'
import { v4 as uuidv4 } from 'uuid';

export default function (props) {
    
    const setImages = images => {
        console.log('Images', images)
    }

    React.useEffect(() => {

    })

    const addToCart = async () => {

        try {
            const id = uuidv4();
            let cartItem = {};
            let price = 0;

            if (superImpose1 && superImpose1.original) {

                let data = await request({
                    route: 'images',
                    method: 'post',
                    body: {
                        base64: superImpose1.original,
                        nameType: 'superimpose'
                    }
                });

                cartItem.superImpose1 = data.fileName;

            }

            if (superImpose2 && superImpose2.original) {

                let data = await request({
                    route: 'images',
                    method: 'post',
                    body: {
                        base64: superImpose2.original,
                        nameType: 'superimpose'
                    }
                });

                cartItem.superImpose2 = data.fileName;

            }

            if (main && main.original) {

                let data = await request({
                    route: 'images',
                    method: 'post',
                    body: {
                        base64: main.original,
                        nameType: 'main'
                    }
                });

                cartItem.main = data.fileName;

            }

            cartItem = {
                ... cartItem,
                text,
                year,
                retouch: (retouch && retouchValue) ? retouchValue: 'none'
            }

            console.log(cartItem)

        }
        catch (err) {
            alert('error')
        }

    }

    const [retouch, setRetouch] = React.useState();
    const [retouchValue, setRetouchValue] = React.useState();
    const [text, setText] = React.useState();
    const [year, setYear] = React.useState();
    const [main, setMain] = React.useState();
    const [superImpose1, setSuperImpose1] = React.useState();
    const [superImpose2, setSuperImpose2] = React.useState();

    return (
        <View className = 'itemview-container'>
            <View className = 'itemview-image-container'>
                <Image source = {props.url} className = 'itemview-image' />
            </View>
            <View className = 'itemview-input-group' style = {{color: 'white'}}>
                <Text>{capitalize(props.type)}</Text>
                <View>
                    <Text style = {{marginTop: 10, fontSize: 13}} className = 'itemviewer-sub-container'>
                        <table>
                            <tr>
                                <td>
                                    <span>
                                        <label for = {`item-retouch-${props.type}`} >Retouch</label>
                                        <input 
                                            type = 'checkbox' 
                                            id = {`item-retouch-${props.type}`}
                                            checked = {retouch}
                                            onClick = {(e) => {
                                                setRetouch(e.target.checked)
                                            }}
                                        />
                                    </span>
                                </td>
                                <td>
                                    <span style = {{marginRight: 20}}>
                                        <input 
                                            name = {`item-retouch-${props.type}`}
                                            type = 'radio' 
                                            disabled = {! retouch}
                                            id = {`item-retouch-single-${props.type}`}
                                            onClick = {() => {
                                                setRetouch(true);
                                                setRetouchValue('single')
                                            }}
                                        />
                                        <label for = {`item-retouch-single-${props.type}`} >1 Person</label>
                                    </span>
                                    <span style = {{marginRight: 20}}>
                                        <input 
                                            name = {`item-retouch-${props.type}`}
                                            type = 'radio'
                                            id = {`item-retouch-group-${props.type}`}
                                            disabled = {! retouch}
                                            onClick = {() => {
                                                setRetouch(true);
                                                setRetouchValue('group')
                                            }}
                                        />
                                        <label for = {`item-retouch-group-${props.type}`} >Group</label>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <Text style = {{paddingTop: 5}}>Text:</Text>
                                </td>
                                <td>
                                    <input 
                                        className = 'itemviewer-input'
                                        placeholder = 'Max. 25 Characters'
                                        value = {text}
                                        onChange = {
                                            (e) => {
                                                e.target.value.length <= 25 ?
                                                setText(e.target.value)
                                                : alert('Max Length is 25')
                                            }
                                        }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text style = {{paddingTop: 5}}>Year:</Text>
                                </td>
                                <td>
                                    <input 
                                        className = 'itemviewer-input'
                                        placeholder = 'Enter year photo taken'
                                        onChange = {(e) => {
                                            setYear(e.target.value)
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text>Main Image</Text>
                                </td>
                                <td>
                                    <ImageLoader sizes = {{original: 'original'}} setImages = {setMain} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text>Superimpose 1</Text>
                                </td>
                                <td>
                                    <ImageLoader 
                                        sizes = {{original: 'original'}}
                                        setImages = {setSuperImpose1}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <Text>Superimpose 2</Text>
                                </td>
                                <td>
                                    <ImageLoader 
                                        sizes = {{original: 'original'}}
                                        setImages = {setSuperImpose2}
                                    />
                                </td>
                            </tr>
                        </table>
                        <input 
                            type = 'button'
                            value = 'Add to Cart'
                            className = 'action-button'
                            style = {{width: 120}}
                            onClick = {addToCart}
                        />
                    </Text>
                </View>
            </View>
        </View>
    )

}