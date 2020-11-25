import React, { useEffect } from 'react'

export default function (props) {

    useEffect(() => {
        document.title = 'Contact Us - ' + (props.info ? props.info.name: '');
    })

    return (
        <iframe src = 'https://tawk.to/chat/5fbd5049a1d54c18d8ecfc6a/default' style = {{width: '100%', height: 500, border: 0}}></iframe>
    )

}