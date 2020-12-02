import React from 'react'
import {View, Text} from './Basic/AppComponents'

export default function (props) {

    const count = props.count;
    const setPage = props.setPage || null;

    return (
        <>
            {
                (() => {
                    let html = []
                    for (let i = 0; i < count; ) {
                        html.push( <button onClick = {() => setPage(i)} >{++i}</button> )
                    }
                    return html;
                })()
            }
        </>
    )

}