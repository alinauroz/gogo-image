import React from 'react'

function Unit (props) {

    return (
        <tr>
            {
                (() => {
                    let html = []
                    for (let x in props.data) {
                        if (props.hidden && props.hidden.indexOf(x) > -1) {
                            continue;
                        }
                        html.push(<td>{props.data[x]}</td>);
                    }
                    if(props.actions) {
                        props.actions.map(Action => {
                            html.push(<td><Action value = 'ABC' onClick = {(e) => {console.log(props.data)}} /></td>);
                        })
                    }
                    return html;
                })()
            }
        </tr>
    )

}

export default function (props) {

    return (
        <div className = 'card'>
        <table className = 'viewer-table'>
            <tr>
                {
                    (() => {
                        let heads = [];
                        for (let x in props.data[0]) {
                            if (props.hidden && props.hidden.indexOf(x) > -1) {
                                continue;
                            }
                            heads.push(<th>{x.toLocaleUpperCase()}</th>);
                        }
                        return heads;
                    })()
                }
            </tr>
            <tbody>
                {
                    props.data.map(entry => {
                        return <Unit data = {entry} actions = {props.actions} hidden = {props.hidden} />
                    })
                }
            </tbody>
        </table>
        </div>
    )

}