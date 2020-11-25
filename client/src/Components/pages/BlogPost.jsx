import React from 'react'
import {request} from '../../utils/AppRequest'
import ReactHtmlParser from "react-html-parser";

export default function (props) {

    let id = props.match.params.id;
    const [blog, setBlog] = React.useState();
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        document.title = (blog ? blog.title : '') + ' - ' + (props.info ? props.info.name: '');
    })

    if (! blog && ! error) {

        request({
            route: 'blogs',
            params: '/' + id,
        }).then(res => {
            if (res.data) {
                setBlog(res.data)
            }
            else {
                setError(true);
            }
        })

    }

    return (
        blog ?
        (
            <div style = {{marginBottom: 35, marginTop: 15, verticalAlign: 'top', display: 'inline-block', width: '100%',}}>
                <div style = {{width: '100%', height: 450, backgroundImage: blog.image? `url(${blog.image})`: 'url(https://icsb.org/wp-content/uploads/membership-profile-uploads/profile_image_placeholder.png)', backgroundSize: 'cover'}} />
                
                <p style = {{fontWeight: 'bold', marginTop: 10, paddingLeft: '10%', paddingRight: '10%'}}>{blog.title}</p>
                <p style = {{marginTop: 10, paddingRight: '10%', paddingLeft: '10%'}}>{ReactHtmlParser(ReactHtmlParser( blog.content))}</p>
            </div>
        )
        : error ? <center>Unable to get the blog</center>
        : <>Loading ...</>
    )

}