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
            <div style = {{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', background: '#333333aa', marginTop: 20, minHeight: 20, paddingLeft: '5%', paddingRight: '5%', paddingBottom: 10}}>
            {
                posts ?
                posts.map(post => {
                    return (
                        <Link to = {'/post/' + post._id}>
                            <img src = {api + 'images/' +post.items[0].thumb} style = {{height: 200, marginTop: 5}} />
                        </Link>
                    )
                })
                : ''
            }
            </div>
        </>
    )
}