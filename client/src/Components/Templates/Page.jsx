import React from 'react'
import ReactHtmlParser from "react-html-parser";

import NavBox from '../Container/NavBox'

export default function (props) {

    React.useEffect(() => {
        document.title = props.title + ' - ' + (props.info ? props.info.name: '');
    })

    return (
        <NavBox
            title = {props.title}
        >
            {ReactHtmlParser(ReactHtmlParser(props.content))}
        </NavBox>
    )
}