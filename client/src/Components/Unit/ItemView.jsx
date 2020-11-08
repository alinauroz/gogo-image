import React from 'react'
import {View, Image, Text} from '../Basic/AppComponents'

export default function (props) {
    
    return (
        <View className = 'itemview-container'>
            <View className = 'itemview-image-container'>
                <Image source = {props.url} style = {{height: 350}}/>
            </View>
        </View>
    )

}