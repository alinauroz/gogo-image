import React from 'react'
import {request} from '../../utils/AppRequest'
import {api} from '../../data/api'
import ReactHtmlParser from "react-html-parser";
import {Text} from '../Basic/AppComponents'
import { Link } from 'react-router-dom'

export default function (props) {

    const [blogs, setBlogs] = React.useState();

    const getDate = date => {
        let _date = new Date(date);
        return (
            <span style = {{padding: 3, background: '#ddd', marginRight: 5}}>{
            _date.getDate() + '/' +
            _date.getMonth() + '/' +
            _date.getFullYear()}
            </span>
        )
    }

    React.useEffect(() => {
        document.title = 'Blogs - ' + (props.info ? props.info.name: '');
    })

    if (! blogs) {

        request({
            route: 'blogs'
        }).then(res => setBlogs(res.data || []))

    }

    let html = [];
    let blogList = [];
    blogs &&
    blogs.map((blog, index) => {
        if (index !== -1) {
            blogList.push(
                <Link to = {'blogpost/' + blog._id} style = {{color: '#333', textDecoration: 'none', textTransform: 'capitalize', marginTop: 10}}>
                <div className = 'blog-list-item-container' style = {{fontSize: 13, marginTop: 10}}>
                    <p style = {{marginTop: 10, marginBottom: 10}}>{getDate(Date.now())}{blog.title}</p>
                    <p style={{marginBottom: 7}}><b>Category: </b>{blog.category}</p>
                    <div className = 'blog-list-image' style = {{display: 'inline-block', width: 'calc(50% - 20px)', height: 350, backgroundImage: blog.image? `url(${blog.image})`: 'url(https://icsb.org/wp-content/uploads/membership-profile-uploads/profile_image_placeholder.png)', backgroundPosition: '50%', backgroundSize: 'cover'}}>
                    </div>
                    
                    <p style={{display: 'inline-block', width: 'calc(50% - 10px)', marginLeft: 10, verticalAlign: 'top'}}>{ReactHtmlParser(ReactHtmlParser( blog.content.substr(0, 600)))}<br /><input type='button' style = {{width: 100}} class='action-button' value = 'Read Now' /></p>
                    
                </div>
                </Link>
            )
        }
    })

    return (<div className = 'blog-container navbox' style = {{}}><Text className = 'navbox-title-shadow'>Blogs</Text>
    <Text className = 'navbox-title'>Blogs</Text><div style = {{margin:'20px 0px'}}>{blogList}</div></div>)

}