import React from 'react'
import {View, Image, Text} from '../Components/Basic/AppComponents'

export default function (props) {

    let id = props.match.params.id;
    const [loaded, setLoaded] = React.useState(false);

    

    return (
        <View className = 'postview-container'>
            {id}
        </View>
    )
}