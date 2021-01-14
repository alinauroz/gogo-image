import React from 'react'
import {View, Image, Text} from '../Basic/AppComponents'
import Tagline from '../../data/images/tagline.png'
import { Link } from 'react-router-dom'

import cover from '../../data/images/cover.jpg'

export default function (props) {

    let posts = props.posts;

    React.useEffect(() => {
        document.title = 'Home - ' + (props.info ? props.info.name || '' : '')
    })

    function getRandom(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    return (
        <View className = 'page-container'>
            <Image
                source = {cover}
                style = {{width: "100%"}}
            />
            <View style = {{textAlign: 'center'}}>
                <Image source = {Tagline} className = 'home-tagline' style = {{height: 40, margin: '20px 0px'}} />
                <Text style = {{maxWidth: '80%', marginLeft: '10%'}}>
                    Perfect for Senior Photos, Weddings, Retical, Valentine, Holiday Greetings, Birthdays, Special Occasions & more. Spice up with your photos now.
                </Text>
            </View>
            <div className = 'home-gallery-container' style = {{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', background: '#333333aa', marginTop: 20, minHeight: 20, paddingLeft: '5%', paddingRight: '5%', paddingBottom: 10}}>
            {
                posts ?
                posts.map(post => {
                    return <Link to="/gallery"><div className = 'gallery-item-container'><img src = {post.images[0]} className = 'gallery-item' /></div></Link>
                })
                : ""
            }
            </div>
        </View>
    )
}