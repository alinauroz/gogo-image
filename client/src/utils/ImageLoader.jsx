import React, { useEffect } from 'react'
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
    const [meta, setMeta] = React.useState({});
    const [toView, setToView] = React.useState();

    useEffect(() => {
        if (Object.keys(images).length !== 0 && props.setImages) {
            props.setImages(images)
        }
    });

    const handleChange = async (e) => {

        let file = e.target.files[0];

        setMeta({
            name: e.target.files[0] ? e.target.files[0].name: ''
        })
        
        for (let x in props.sizes) {
            if (typeof props.sizes[x] === 'object') {
                let base64 = await resize(file, props.sizes[x]);
                setImages({
                    ... images,
                    [x]: base64
                })
            }
            else {
                let base64 = await getBase64(file);
                setImages({
                    ... images,
                    [x]: base64
                })
            }
        }
        

        let thumb = await resize(file, {maxWidthOrHeight: 120});
        setToView(thumb);

    }

    return (
        <View style = {props.style || {}} className='IMAGE___LOADER'>
            <View style = {{flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
                {
                    Object.keys(images).length === 0 ?
                    <View style = {{display: 'inline-block', verticalAlign: 'top', height: 25, width: '100px'}}>
                        <input onChange = {handleChange} type = 'file' style = {{width: '100px', height: '100%', margin: 0, opacity: 0}} />
                        <View style = {{width: '100px', height: '100%', cursor: 'pointer', marginTop: '-30px', zIndex: 2,}}>
                            <Text style = {{marginTop: 5}}>Upload</Text>
                        </View>
                    </View>
                    :
                    <>
                        {props.display === 'image' ?
                            <img src = {toView} />
                            : <Text style={{display: 'inline'}}>{meta.name ? meta.name.substr(0, 15) : ''}</Text>
                        }
                        <span 
                            style = {{padding: 3, verticalAlign: 'top', cursor: 'pointer', color: 'red'}}
                            onClick = {() => {
                                setToView('');
                                setImages({});
                                if (props.setImages) props.setImages({})
                            }}
                        >✖</span>
                    </>
                }
            </View>
        </View>
    )

}