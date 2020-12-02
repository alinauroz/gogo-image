import React from 'react'
import {View, Text} from './Basic/AppComponents'

export default function (props) {

    const count = props.count;
    const setPage = props.setPage || null;
    const [selected, setSelected] = React.useState(1);

    const setContagiousPage = (toAdd) => {
        if (toAdd > 0) {
            setSelected(selected + 1);
            setPage(selected + 1);
        }
        else {
            setSelected(selected - 1);
            setPage(selected - 1);
        }
    }

    return (
        <>
            <button 
                className = 'pager-button pager-prev-button'
                disabled = {selected == 1}
                onClick = {() => setContagiousPage(-1)}
            >
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
            <button 
                className = 'pager-button pager-next-button'
                disabled = {selected == count}
                onClick = {() => setContagiousPage(1)}
            >
                Next
            </button>
        </>
    )

}