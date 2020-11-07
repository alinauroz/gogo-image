import React from 'react'

export default function () {

    const [data, setData] = React.useState();

    return (
        <div className = 'card'>
            <h3 style = {{margin: 0, marginBottom: 10}}>View Blogs</h3>
            {
                data ?
                <></>
                : "loading ..."
            }
        </div>
    )

}