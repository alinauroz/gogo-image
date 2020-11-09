import React from 'react'
import {Text, View, Image} from '../Components/Basic/AppComponents'
import imageCompression from 'browser-image-compression'

const resize = async (file, options = {}) => {
    
    const options_ = {
        ... options,
        useWebWorker: true
    }

    try {
        let compressedFile = await imageCompression(file, options_);
        console.log(compressedFile)
    }
    catch (err) {
        throw err;
    }
}

export default function () {

    const [images, setImages] = React.useState([]);

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <View style = {{}}>
            <View style = {{flexDirection: 'row', justifyContent: 'center', textAlign: 'center', width: '100%'}}>
                {
                    images.length === 0 ?
                    <View style = {{display: 'inline-block', verticalAlign: 'top', height: 25, width: '100%'}}>
                        <input onChange = {handleChange} type = 'file' style = {{width: '100%', height: '100%', margin: 0, opacity: 0}} />
                        <View style = {{overflow: 'hidden', width: '100%', height: '100%', marginTop: '-25px', zIndex: 2, textAlign: 'center'}}>
                            <Text style = {{marginTop: 5}}>Upload</Text>
                        </View>
                    </View>
                    :
                    <></>
                }
            </View>
        </View>
    )

}