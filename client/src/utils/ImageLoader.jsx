import React from 'react'
import {Text, View, Image} from '../Components/Basic/AppComponents'

export default function () {

    const [images, setImages] = React.useState([]);

    return (
        <View style = {{}}>
            <View style = {{flexDirection: 'row', justifyContent: 'center', textAlign: 'center', width: '100%'}}>
                {
                    images.length === 0 ?
                    <View style = {{display: 'inline-block', verticalAlign: 'top', height: 25, width: '100%'}}>
                        <input type = 'file' style = {{width: '100%', height: '100%', position: 'absolute'}} />
                    </View>
                    :
                    <></>
                }
            </View>
        </View>
    )

}