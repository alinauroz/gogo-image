import React from 'react'
import {api} from '../../data/api'
import Viewer from '../../utils/Viewer'

export default function (props) {

    const [data, setData] = React.useState();

    const EditAction = (data) => {
        props.setBase(data);
        props.setScreen('Home');
    }

    (async () => {

        if (data) return;

        let res = await fetch(api + 'faqs');
        let data_ = await res.json();
        setData(data_);
        props.setBase(data_, 'faqs');

    })()

    return (
        <div className = 'card'>
            <h3 style = {{margin: 0, marginBottom: 10}}>View FAQs</h3>
            <br />
            {
                data ?
                <Viewer 
                    data = {data.data}
                    hidden = {['_id']}
                    actions = {[
                        //{onClick: EditAction, value: 'Edit', className : 'btn btn-primary'},
                        {onClick: EditAction, value: 'Delete', className : 'btn btn-danger', break: true}
                    ]}
                />
                : "loading ..."
            }
        </div>
    )

}