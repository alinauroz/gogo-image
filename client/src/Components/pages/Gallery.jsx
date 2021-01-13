import React from 'react'
import {request} from '../../utils/AppRequest'
import { Link } from 'react-router-dom'
import {api} from '../../data/api'
import {categories} from '../../data/post.res'

export default function (props) {

    const [posts, setPosts] = React.useState(props.posts);
    const [selected, setSelected] = React.useState('');
    const [pageSize, setPageSize] = React.useState(20);

    React.useEffect(() => {
        document.title = 'Gallery - ' + (props.info ? props.info.name: '');
        if (selected) {
            let _posts = props.posts.filter( post => post.category === selected)
            setPosts(_posts);
        }
        else {
            setPosts(props.posts)
        }
    }, [selected])

    return (
        <>
            <div className = 'gallery-container' style = {{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', background: '#333333aa', marginTop: 20, minHeight: 20, paddingLeft: '5%', paddingRight: '5%', paddingBottom: 10}}>
            <div style={{
                paddingLeft: '10%',
                paddingRight: '10%',
                width: '80%',
                textAlign: 'center',
                overflow: 'hidden',
                margin: '50px 0px'
            }}>
                <span
                    style={{
                        margin: '0px 20px',
                        cursor: 'pointer'
                    }}
                >
                    <a
                        onClick={() => setSelected('')}
                        style={{
                            color: selected === '' ? 'red' : '#fff',
                            fontSize: 12,
                            textDecoration: 'none'
                        }}
                    >
                        All
                    </a>
                </span>
                {
                    categories.map((cat) => (
                        <span
                            style={{
                                margin: '0px 20px',
                                cursor: 'pointer'
                            }}
                        >
                            <a
                                onClick={() => setSelected(cat[1])}
                                style={{
                                    color: selected === cat[1] ? 'red' : '#fff',
                                    fontSize: 12,
                                    textDecoration: 'none'
                                }}
                            >
                                {cat[0]}({cat[1]})
                            </a>
                        </span>
                    ))
                }
            </div>
            {
                posts ?
                posts.map((post, index) => {
                    if (index >= pageSize) return null;
                    return (
                        <Link to = {'/post/' + post._id}>
                            <div className = 'gallery-item-container'><img src = {api + 'images/' +(post.items[0] ? post.items[0].thumb: '')} className = 'gallery-item' /></div>
                        </Link>
                    )
                })
                : ''
            }
            </div>
            <div style={{textAlign: 'center', backgroundColor: 'rgba(51, 51, 51, 0.667)', paddingBottom: 20,}}>
                <input
                    type='button'
                    className='action-button'
                    onClick={() => setPageSize(pageSize + 10)}
                    value='Load More'
                    style={{
                        width: 150,
                        background: '#000'
                    }}
                />
            </div>
        </>
    )
}