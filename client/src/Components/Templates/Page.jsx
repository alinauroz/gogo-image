import React from 'react'

import NavBox from '../Container/NavBox'

export default function (props) {
    return (
        <NavBox
            title = {props.title}
        >
            {props.content}
        </NavBox>
    )
}