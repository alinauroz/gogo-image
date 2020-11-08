import React from 'react'
import ReactHtmlParser from "react-html-parser";

import NavBox from '../Container/NavBox'

export default function (props) {
    return (
        <NavBox
            title = {props.title}
        >
            {ReactHtmlParser(props.content)}
        </NavBox>
    )
}