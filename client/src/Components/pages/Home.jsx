import React from 'react'
import {View, Image, Text} from '../Basic/AppComponents'

import cover from '../../data/images/cover.jpg'

export default function (props) {

    let posts = props.posts;

    return (
        <View>
            <Image
                source = {cover}
                style = {{width: "100%"}}
            />
            <View style = {{textAlign: 'center'}}>
                <Text style = {{fontSize: 22, fontWeight: 'bold'}}>
                    Select, Upload and Transform
                </Text>
                <Text style = {{maxWidth: '80%', marginLeft: '10%'}}>
                    Perfect for Senior Photos, Weddings, Retical, Valentine, Holiday Greetings, Birthdays, Special Occasions & more. Spice up with your photos now.
                </Text>
            </View>
            <div style = {{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', background: '#333333aa', marginTop: 20, minHeight: 20, paddingLeft: '5%', paddingRight: '5%', paddingBottom: 10}}>
            {
                posts ?
                posts.map(post => {
                    return <img src = {post.images[0]} style = {{height: 200, marginTop: 5}} />
                })
                : ""
            }
            </div>
        </View>
    )
}