import React from 'react'
import {View, Image, Text} from '../Basic/AppComponents'

export default function (props) {
    
    return (
        <View className = 'itemview-container'>
            <View className = 'itemview-image-container'>
                <Image source = {props.url} className = 'itemview-image'/>
                <View className = 'itemview-input-group'>
                    {props.type}
                </View>
            </View>
        </View>
    )

}