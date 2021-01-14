import React from 'react'
import {request} from '../../utils/AppRequest'
import { Link } from 'react-router-dom'
import {api} from '../../data/api'
import {categories} from '../../data/post.res'

export default function (props) {

    const subCategories = ['All', 'Potrait', 'Landscape']

    const [posts, setPosts] = React.useState(props.posts || []);
    const [selected, setSelected] = React.useState('');
    const [selectedSub, setSelectedSub] = React.useState('');
    const [pageSize, setPageSize] = React.useState(10);


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

                    if (selectedSub === 'landscape')
                        img = post.items[0] ? post.items[0].thumb: '' 
                    else if (selectedSub === 'potrait')
                        img = post.items[1] ? post.items[1].thumb: ''
                    else
                        img = post.items[0] ? post.items[0].thumb: '' 
                    
                    if (!img) return null;

                    return (
                        <Link to = {'/post/' + post._id} key={post._id}>
                            <div className = 'gallery-item-container'><img src = {api + 'images/' +(img)} className = 'gallery-item' /></div>
                        </Link>
                    )
                })
                : ''
            }
            </div>
            <div style={{display: (pageSize >= posts.length ? 'none': 'block'), textAlign: 'center', backgroundColor: 'rgba(51, 51, 51, 0.667)', paddingBottom: 20,}}>
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