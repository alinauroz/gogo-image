import React from 'react'
import {View, Image, Text} from '../Components/Basic/AppComponents'
import ItemView from '../Components/Unit/ItemView'
import {request} from '../utils/AppRequest'
import {api} from '../data/api'
import { Link } from 'react-router-dom'

export default function (props) {

    let id = props.match.params.id;
    const [loaded, setLoaded] = React.useState(false);
    const [post, setPost] = React.useState()
    const [message, setMessage] = React.useState('')

    //let post = {
    //    tags: [],
    //    use: [],
    //    images: [
    //        {url: 'https://source.unsplash.com/random/300x300', type: 'landscape'},
    //        {url: 'https://source.unsplash.com/random/200x300', type: 'portrait'}
    //    ]
    //}

    if (! post) {
        (async () => {
            const res = await request({
                route: 'posts',
                params: '/' + id,
            })
            
            if (res.data)
                setPost(res.data)
            else
                res.error && (String(res.error.statusCode).charAt(0) == '4' || String(res.error.statusCode).charAt(0) == '5') ? setMessage([<p>Post not found. View <Link to = '../gallery'>Gallery</Link></p>]) : setMessage('Unkown Error occurred')

        })()
    }

    const prices = {
        portrait: 35,
        landscape: 40,
        retouch: 5,
        retouchGroup: 10,
        text: 3,
        year: 2,
        superImpose1: 10,
        superImpose2: 10
    }

    return (
        <View className = 'postview-container'>
            {
                post ? 
                post.items.map(image => {
                    return <ItemView url = {api + 'images/' +image.thumb} type = {image.type} addToCart = {props.addToCart} />
                })
                : <>{message}</>
            }
        </View>
    )
}