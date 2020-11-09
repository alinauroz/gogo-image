import React from 'react'
import {View, Image, Text} from '../Basic/AppComponents'
import ImageLoader from '../../utils/ImageLoader'
import {capitalize} from '../../utils/string'

export default function (props) {
    
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
                                        <input type = 'checkbox' id = {`item-retouch-${props.type}`} />
                                    </span>
                                </td>
                                <td>
                                    <span style = {{marginRight: 20}}>
                                        <input type = 'radio' id = {`item-retouch-single-${props.type}`} />
                                        <label for = {`item-retouch-single-${props.type}`} >1 Person</label>
                                    </span>
                                    <span style = {{marginRight: 20}}>
                                        <input type = 'radio' id = {`item-retouch-single-${props.type}`} />
                                        <label for = {`item-retouch-single-${props.type}`} >1 Person</label>
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
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text>Main Image</Text>
                                </td>
                                <td>
                                    <ImageLoader sizes = {{'thumb': {height: 300}}} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text>Superimpose 1</Text>
                                </td>
                                <td>

                                </td>
                            </tr>
                            <tr>
                                <td>
                                <Text>Superimpose 2</Text>
                                </td>
                                <td>

                                </td>
                            </tr>
                        </table>
                    </Text>
                </View>
            </View>
        </View>
    )

}