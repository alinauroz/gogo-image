import React from 'react'

function Unit (props) {

    return (
        <tr>
            {
                (() => {
                    let html = []

                    //for (let x in props.data) {
                    //    if (props.hidden && props.hidden.indexOf(x) > -1) {
                    //        continue;
                    //    }
                    //    html.push(<td>{String(props.data[x])}</td>);
                    //    if (props.data)
                    //}

                    props.heads.map(head => {
                        html.push(<td>{String(props.data[head])}</td>);
                    })
                    
                    if(props.actions) {
                        var actions_ = [];
                        props.actions.map(Action => {
                            actions_.push(<input style = {{marginBottom: 3}} type = 'button' className = {Action.className} value = {Action.value} onClick = {(e) => {Action.onClick(e, props.data)}} />);
                        })
                    }

                    html.push(<td>{actions_}</td>);

                    return html;
                })()
            }
        </tr>
    )

}

export default function (props) {

    const rawHeads = [];

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
                            rawHeads.push(x);

                        }

                        //setRawHeads(rawHeads)

                        if (props.actions && props.actions.length > 0)
                            heads.push(<th>Actions</th>);

                        return heads;
                    })()
                }
            </tr>
            <tbody>
                {
                    props.data.map(entry => {
                        return <Unit data = {entry} actions = {props.actions} hidden = {props.hidden} heads = {rawHeads} />
                    })
                }
            </tbody>
        </table>
        </div>
    )

}