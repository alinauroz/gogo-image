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
            <View style = {{textAlign: 'center'}}>
                <Text style = {{fontSize: 22, fontWeight: 'bold'}}>
                    Select, Upload and Transform
                </Text>
                <Text style = {{maxWidth: '80%', marginLeft: '10%'}}>
                    Perfect for Senior Photos, Weddings, Retical, Valentine, Holiday Greetings, Birthdays, Special Occasions & more. Spice up with your photos now.
                </Text>
            </View>
        </View>
    )
}