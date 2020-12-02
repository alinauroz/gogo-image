import React from 'react'
import {View, Text} from './Basic/AppComponents'

export default function (props) {

    const count = props.count;
    const setPage = props.setPage || null;
    const [selected, setSelected] = React.useState(1);

    return (
        <>
            <button className = 'pager-button pager-prev-button'>
                Previous
            </button>
            {
                (() => {
                    let html = []
                    for (let i = 0; i < count; ) {
                        let className = i+1 == selected
                        ? 'pager-button pager-selected'
                        : 'pager-button'
                        html.push( <button
                            className = {className}
                            onClick = {() => {
                                setPage(i);
                                setSelected(i);
                            }} >{++i}</button> )
                    }
                    return html;
                })()
            }
            <button className = 'pager-button pager-next-button'>
                Next
            </button>
        </>
    )

}