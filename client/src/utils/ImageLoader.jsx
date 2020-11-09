import React from 'react'
import {Text, View, Image} from '../Components/Basic/AppComponents'
import imageCompression from 'browser-image-compression'

const getBase64 = file => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result)
    });
}

const resize = async (file, options = {}) => {
    
    const options_ = {
        ... options,
        useWebWorker: true
    }

    try {
        let compressedFile = await imageCompression(file, options_);
        let base64 = await getBase64(compressedFile);
        return base64;
    }
    catch (err) {
        throw err;
    }
}

export default function (props) {

    const [images, setImages] = React.useState({});
    const [toView, setToView] = React.useState();

    const handleChange = async (e) => {

        let file = e.target.files[0];

        if (props.sizes) {
            for (let x in props.sizes) {
                if (typeof props.sizes[x] === 'object') {
                    let base64 = await resize(file, props.sizes[x]);
                    setImages({
                        ... images,
                        [x]: base64
                    })
                }
                else {

                }
            }
        }

        let thumb = await resize(file, {maxWidthOrHeight: 120});
        setToView(thumb);

    }

    return (
        <View style = {{}}>
            <View style = {{flexDirection: 'row', justifyContent: 'center', textAlign: 'center', width: '100%'}}>
                {
                    Object.keys(images).length === 0 ?
                    <View style = {{display: 'inline-block', verticalAlign: 'top', height: 25, width: '100%'}}>
                        <input onChange = {handleChange} type = 'file' style = {{width: '100%', height: '100%', margin: 0, opacity: 0}} />
                        <View style = {{overflow: 'hidden', width: '100%', height: '100%', marginTop: '-25px', zIndex: 2, textAlign: 'center'}}>
                            <Text style = {{marginTop: 5}}>Upload</Text>
                        </View>
                    </View>
                    :
                    <>
                        <img src = {toView} />
                    </>
                }
            </View>
        </View>
    )

}