import React from 'react'
import {request} from '../../utils/AppRequest'
import {api} from '../../data/api'
import ReactHtmlParser from "react-html-parser";
import { Link } from 'react-router-dom'

export default function () {

    const [blogs, setBlogs] = React.useState();

    if (! blogs) {

        request({
            route: 'blogs'
        }).then(res => setBlogs(res.data || []))

    }

    let html = [];
    let blogList = [];

    if (blogs && blogs.length >= 0) {
        html.push(
            <Link to = {'blogpost/' + blogs[0]._id} style = {{color: '#333', textDecoration: 'none'}}>
            <div style = {{color: '#333', textDecoration: 'none'}}>
                <div style = {{width: '100%', height: 350, backgroundImage: blogs[0].image? `url(${blogs[0].image})`: 'url(https://icsb.org/wp-content/uploads/membership-profile-uploads/profile_image_placeholder.png)', backgroundSize: 'cover'}}>

                </div>
                <p style = {{fontWeight: 'bold', marginTop: 10}}>{blogs[0].title}</p>
                <p>{ReactHtmlParser(ReactHtmlParser( blogs[0].content.substr(0, 500)))}</p>
            </div>
            </Link>
        )

        blogs.map((blog, index) => {
            if (index !== 0) {
                blogList.push(
                    <Link to = {'blogpost/' + blogs[0]._id} style = {{color: '#333', textDecoration: 'none'}}>
                    <div style = {{marginTop: 15, verticalAlign: 'top', display: 'inline-block', width: 'calc(33.3333333333% - 10px)', marginRight: index % 3 !== 0 ? 15: 0}}>
                        <div style = {{width: '100%', height: 350, backgroundImage: blog.image? `url(${blog.image})`: 'url(https://icsb.org/wp-content/uploads/membership-profile-uploads/profile_image_placeholder.png)', backgroundSize: 'cover'}}>

                        </div>
                        <p style = {{fontWeight: 'bold', marginTop: 10}}>{blog.title}</p>
                        <p>{ReactHtmlParser(ReactHtmlParser( blog.content.substr(0, 100)))}</p>
                    </div>
                    </Link>
                )
            }
        })

    }
    else if (blogs && blogs.length == 0) {
        return <>No Blog</>
    }

    return <div style = {{width: '80%', marginLeft: '10%', minWidth: 450}}>{html}<div style = {{margin:'20px 0px'}}>{blogList}</div></div>

}