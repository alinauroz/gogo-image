import React from 'react'
import {request} from '../../utils/AppRequest'
import { Link } from 'react-router-dom'
import {api} from '../../data/api'
import {categories} from '../../data/post.res'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import cookieParser from '../../utils/cookieParser'

const cookies = (cookieParser(document.cookie));

if (cookies.type === 'user')
    var isLoggedIn = true;

export default function (props) {

    const subCategories = ['All', 'Potrait', 'Landscape']

    const [posts, setPosts] = React.useState(props.posts || []);
    const [selected, setSelected] = React.useState('');
    const [selectedSub, setSelectedSub] = React.useState('');
    const [pageSize, setPageSize] = React.useState(19);
    const [likes, setLikes] = React.useState(props.likes || []);

    const like = (id) => {
        if (likes.indexOf(id) > -1)
          return setLikes([... likes]);
        let _likes = likes;
        _likes.push(id);
        setLikes([... _likes]);
    }

    const unlike = (id) => {
        let index = likes.indexOf(id);
        if (index === -1)
            return setLikes([... likes]);
        
        let _likes = likes;
        _likes.splice(index, 1);
        setLikes([... _likes]);

      }


    React.useEffect(() => {
        document.title = 'Gallery - ' + (props.info ? props.info.name: '');

        let _posts = props.posts || [];

        if (selected) {
            _posts = props.posts.filter( post => post.category === selected)
            setPosts(_posts);
            setPageSize(10);
        }
        else {
            setPosts(props.posts);
        }

        //if (selectedSub && selectedSub !== 'all') {
        //    _posts = _posts.filter((post) => {
        //        if (!post.items) return false;
        //        for (let i = 0; i < post.items.length; i++) {
        //            let b = false;
        //            if (post.items[i].type === selectedSub) {
        //                b = true;
        //                break;
        //            }
        //            return b;
        //        }
        //    })
        //    setPosts(_posts)
        //}

    }, [selected, selectedSub])

    return (
        <>
            <div className = 'gallery-container' style = {{
                background: '#333333aa', 
                textAlign: 'center',
                paddingBottom: 10,
                paddingTop: 10,
            }}>
            <div style={{
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
                <br/>
                <br/>
                {
                    subCategories.map((cat) => (
                        <span
                            style={{
                                margin: '0px 20px',
                                cursor: 'pointer'
                            }}
                        >
                            <a
                                onClick={() => setSelectedSub(cat.toLowerCase())}
                                style={{
                                    color: selectedSub === cat.toLocaleLowerCase() ? 'red' : '#fff',
                                    fontSize: 12,
                                    textDecoration: 'none'
                                }}
                            >
                                {cat}
                            </a>
                        </span>
                    ))
                }
            </div>
            {
                posts ?
                posts.map((post, index) => {
                    let img;
                    if (index >= pageSize) return null;

                    if (selectedSub === 'landscape'){
                        if (post.items && post.items[0] && post.items[0].type === 'landscape') {
                            img = post.items[0].thumb;
                        }
                        else if (post.items && post.items[1] && post.items[1].type === 'landscape') { 
                            img = post.items[1].thumb;
                        }
                    }
                    else if (selectedSub === 'potrait'){
                        if (post.items && post.items[0] && post.items[0].type === 'portrait') {
                            img = post.items[0].thumb;
                        }
                        else if (post.items && post.items[1] && post.items[1].type === 'portrait') { 
                            img = post.items[1].thumb;
                        }
                    }
                    else {
                        img = post.items && post.items.length > 0 ? (() => {
                            if (post.items[0].type === 'portrait')
                                return post.items[0].thumb;
                            else
                                return post.items[1] && post.items[1].type === 'portrait' ? post.items[1].thumb: post.items[0].thumb;;
                        })() : '';
                    }
                    
                    if (!img) return null;

                    return (
                        <Link to = {'/post/' + post._id} key={post._id}>
                            <div className = 'gallery-item-container' style={{display: 'inline-block', marginLeft: 20, marginTop: 20}}>
                                <div style={{position: 'relative', margin: 10, marginBottom: -25, float: 'right', textAlign: 'right'}}>
                                {isLoggedIn?
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    onClick={(e) => {
                                        if(likes.indexOf(post._id) === -1) {
                                            props.like(post._id);
                                            like(post._id);
                                        }
                                        else {
                                            props.unlike(post._id);
                                            unlike(post._id);
                                        }
                                        e.preventDefault()
                                    }}
                                    style={{
                                        fontSize: 18,
                                        color: (likes.indexOf(post._id) === -1 ? 'white': 'red'),
                                        float: 'right',
                                        textAlign: 'right',
                                        textShadow: '10px 0px 10px ligthgrey'
                                    }}
                                />: null}
                                </div>
                                <div>
                                    <img src = {api + 'images/' +(img)} className = 'gallery-item' style={{marginTop: 0}}/>
                                </div>
                            </div>
                        </Link>
                    )
                })
                : ''
            }
            </div>
            <div style={{display: (pageSize >= (posts ? posts.length: 0) ? 'none': 'block'), textAlign: 'center', backgroundColor: 'rgba(51, 51, 51, 0.667)', paddingBottom: 20,}}>
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