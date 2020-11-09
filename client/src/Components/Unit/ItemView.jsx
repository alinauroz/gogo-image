import React from 'react'
import {View, Image, Text} from '../Basic/AppComponents'
import {capitalize} from '../../utils/string'

const prices = {
    portrait: 35,

}

export default function (props) {
    
    return (
        <View className = 'itemview-container'>
            <View className = 'itemview-image-container'>
                <Image source = {props.url} className = 'itemview-image'/>
                <View className = 'itemview-input-group' style = {{color: 'white'}}>
                    {capitalize(props.type)}
                </View>
            </View>
        </View>
    )

}