import React from 'react'
import {View, Image, Text} from '../Components/Basic/AppComponents'
import ItemView from '../Components/Unit/ItemView'
import {request} from '../utils/AppRequest'
import {api} from '../data/api'
import { Link } from 'react-router-dom'

export default function (props) {

    let id = props.match.params.id;
    const [post, setPost] = React.useState()
    const [message, setMessage] = React.useState('')

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
        template: 35,
        retouchSingle: 5,
        retouchGroup: 10,
        text: 3,
        year: 2,
        superimpose1: 10,
        superimpose2: 10
    }

    return (
        <View className = 'postview-container'>
            {
                post ? 
                post.items.map(item => {
                    return <ItemView item = {item} prices = {prices} url = {api + 'images/' +item.thumb} type = {item.type} addToCart = {props.addToCart} />
                })
                : <>{message}</>
            }
        </View>
    )
}