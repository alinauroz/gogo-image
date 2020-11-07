import React from 'react'
import {api} from '../../data/api'
import Viewer from '../../utils/Viewer'

const EditAction = (data) => {
    console.log(data);
}

export default function () {

    const [data, setData] = React.useState();

    (async () => {

        if (data) return;

        let res = await fetch(api + 'blogs');
        let data_ = await res.json();
        setData(data_);

    })()

    return (
        <div className = 'card'>
            <h3 style = {{margin: 0, marginBottom: 10}}>View Blogs</h3>
            <br />
            {
                data ?
                <Viewer 
                    data = {data.data}
                    hidden = {['_id']}
                    actions = {[
                        {onClick: EditAction, value: 'Edit'}
                    ]}
                />
                : "loading ..."
            }
        </div>
    )

}