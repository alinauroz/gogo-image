import React from 'react'
import {request} from '../../utils/AppRequest'
import { Link } from 'react-router-dom'
import {api} from '../../data/api'

export default function (props) {

    const [posts, setPosts] = React.useState(props.posts);

    React.useEffect(() => {
        document.title = 'Gallery - ' + (props.info ? props.info.name: '');
    })

    return (
        <>
            <div className = 'gallery-container' style = {{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', background: '#333333aa', marginTop: 20, minHeight: 20, paddingLeft: '5%', paddingRight: '5%', paddingBottom: 10}}>
            {
                posts ?
                posts.map(post => {
                    return (
                        <Link to = {'/post/' + post._id}>
                            <div className = 'gallery-item-container'><img src = {api + 'images/' +(post.items[0] ? post.items[0].thumb: '')} className = 'gallery-item' /></div>
                        </Link>
                    )
                })
                : ''
            }
            </div>
        </>
    )
}