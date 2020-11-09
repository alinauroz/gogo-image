import React from 'react'
import {View, Image, Text} from '../Components/Basic/AppComponents'
import ItemView from '../Components/Unit/ItemView'

export default function (props) {

    let id = props.match.params.id;
    const [loaded, setLoaded] = React.useState(false);

    let post = {
        tags: [],
        use: [],
        images: [
            {url: 'https://source.unsplash.com/random/300x300', type: 'landscape'},
            {url: 'https://source.unsplash.com/random/200x300', type: 'portrait'}
        ]
    }

    return (
        <View className = 'postview-container'>
            {
                post.images ? 
                post.images.map(image => {
                    return <ItemView url = {image.url} />
                })
                : ""
            }
        </View>
    )
}