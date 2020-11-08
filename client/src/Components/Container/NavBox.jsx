import React from 'react';
import {View, Text} from '../Basic/AppComponents'

export default function (props) {
    return (
        <View className = 'navbox'>
            <Text className = 'navbox-title-shadow'>{props.title}</Text>
            <Text className = 'navbox-title'>{props.title}</Text>
            <Text style = {{marginTop: 10}}>{props.children}</Text>
        </View>
    )
}