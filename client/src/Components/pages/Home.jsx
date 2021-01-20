import React from 'react'
import {View, Image, Text} from '../Basic/AppComponents'
import Tagline from '../../data/images/tagline.png'
import { Link } from 'react-router-dom'
import { api } from '../../data/api'

import cover from '../../data/images/cover.jpg'

function getRandom(arr, n) {
    if (arr.length < n)
        n = arr.length
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

export default function (props) {

    let posts = getRandom(props.posts || [], 25);
    let screenSize = window.screen.width < 1300 ? 'small' : 'large'
    let sequence = {
        small: [
            0,1,1,1,
            0,0,1,
            0,1,1,1
        ],
        large: [
            0,0,0,1,1,
            0,0,1,1,1,1,
            0,0,0,1,1
        ]
    }

    React.useEffect(() => {
        document.title = 'Home - ' + (props.info ? props.info.name || '' : '')
    })

    return (
        <View className = 'page-container'>
            <Image
                source = {props.info.banner ? api + 'images/' + props.info.banner : cover}
                style = {{width: "100%"}}
            />
            <View style = {{textAlign: 'center'}}>
                <Image source = {Tagline} className = 'home-tagline' style = {{height: 40, margin: '20px 0px'}} />
                <Text style = {{maxWidth: '80%', marginLeft: '10%'}}>
                    Perfect for Senior Photos, Weddings, Retical, Valentine, Holiday Greetings, Birthdays, Special Occasions & more. Spice up with your photos now.
                </Text>
            </View>
            <div className = 'home-gallery-container' style = {{
                background: '#333333aa', 
                marginTop: 20, 
                minHeight: 20,
                paddingBottom: 10,
                textAlign: 'center'
            }}>
            {
                posts ?
                posts.map((post, index) => {

                    //let img = post.items && post.items.length > 0 ? (() => {
                    //    if (post.items[0].type === 'portrait')
                    //        return post.items[0].thumb;
                    //    else
                    //        return post.items[1] && post.items[1].type === 'portrait' ? post.items[1].thumb: post.items[0].thumb;;
                    //})() : '';

                    let toFetch = sequence[screenSize], img;
                    if ( toFetch[index] === 0 ) {
                        img = post.items && post.items.length > 0 ? (() => {
                            if (post.items[0].type === 'landscape')
                                return post.items[0].thumb;
                            else
                                return post.items[1] && post.items[1].type === 'landscape' ? post.items[1].thumb: post.items[0].thumb;;
                        })() : '';
                    }
                    else if ( toFetch[index] === 1 ) {
                        img = post.items && post.items.length > 0 ? (() => {
                            if (post.items[0].type === 'portrait')
                                return post.items[0].thumb;
                            else
                                return post.items[1] && post.items[1].type === 'portrait' ? post.items[1].thumb: post.items[0].thumb;;
                        })() : '';
                    }
                    else return null;

                    return <Link to="/gallery"><div className = 'gallery-item-container' style={{display: 'inline-block', marginLeft: 20, marginTop: 20}}><img src = {api + 'images/' +img} className = 'gallery-item' /></div></Link>
                })
                : ""
            }
            </div>
        </View>
    )
}