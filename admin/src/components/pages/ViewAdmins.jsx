import React from 'react'
import {api} from '../../data/api'
import Viewer from '../../utils/Viewer'
import {request} from '../../utils/request'

export default function (props) {

    const [data, setData] = React.useState();

    const deleteAction = async (e, data) => {

        if (! window.confirm('Are you sure you want to delete ' + data.name)) return;

        e.target.disabled = true;
        let res = await request({
            route: 'admins/',
            params: data._id,
            method: 'DELETE',
            credentials: 'include'
        })
        
        if (res.status == 'success') setData('')

    }

    (async () => {

        if (data) return;

        let res = await fetch(api + 'admins');
        let data_ = await res.json();
        setData(data_);

    })()

    return (
        <div className = 'card'>
            <h3 style = {{margin: 0, marginBottom: 10}}>View Admins</h3>
            <br />
            {
                data ?
                <Viewer 
                    data = {data.data}
                    hidden = {['_id']}
                    actions = {[
                        //{onClick: EditAction, value: 'Edit', className : 'btn btn-primary'},
                        {onClick: deleteAction, value: 'Delete', className : 'btn btn-danger', break: true}
                    ]}
                />
                : "loading ..."
            }
        </div>
    )

}