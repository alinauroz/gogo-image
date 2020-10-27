import React from 'react'
import {View, Image, Text} from '../Basic/AppComponents'

import cover from '../../data/images/cover.jpg'

export default function () {
    return (
        <View>
            <Image
                source = {cover}
                style = {{width: "100%"}}
            />
        </View>
    )
}