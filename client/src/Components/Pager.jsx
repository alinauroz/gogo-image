import React from 'react'
import {View, Text} from './Basic/AppComponents'

export default function (props) {

    const count = props.count;
    const setPage = props.setPage || null;
    const [selected, setSelected] = React.useState(0);

    return (
        <>
            {
                (() => {
                    let html = []
                    for (let i = 0; i < count; ) {
                        html.push( <button
                            className = 'pager-button'
                            onClick = {() => {
                                setPage(i);
                            }} >{++i}</button> )
                    }
                    return html;
                })()
            }
        </>
    )

}