import React from 'react'
import {request} from '../../utils/AppRequest'

export default function (props) {

    const [posts, setPosts] = React.useState(props.posts);

    console.log("POSTS", posts)

    return (
        <>
            <div style = {{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', background: '#333333aa', marginTop: 20, minHeight: 20, paddingLeft: '5%', paddingRight: '5%', paddingBottom: 10}}>
            {
                posts ?
                posts.map(post => {
                    post.items.map(item => {
                        return <img src = {item.thumb} style = {{height: 200, marginTop: 5}} />
                    })
                })
                : ''
            }
            </div>
        </>
    )
}