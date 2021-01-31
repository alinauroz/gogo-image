import React, { useEffect } from 'react'
import ReactHtmlParser from "react-html-parser";

export default function (props) {

    useEffect(() => {
        document.title = 'Contact Us - ' + (props.info ? props.info.name: '');
    })

    let iframeSrc;

    let iframe = ReactHtmlParser( ReactHtmlParser(props.info.tawkto) );
    console.log(">>>", iframe && iframe[0] && iframe[0].props)
    if (iframe && iframe[0] && iframe[0].props ) {
        iframeSrc = iframe[0].props.src;
    }
    else {
        iframeSrc = ''
    }

    return (
        <iframe src = {iframeSrc} style = {{width: '100%', height: 500, border: 0}}></iframe>
    )

}