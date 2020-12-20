import React from 'react'
import {api} from '../../data/api'
import Viewer from '../../utils/Viewer'
import Pager from '../../utils/Pager'
import {request} from '../../utils/request'

export default function (props) {

    const [data, setData] = React.useState();
    const [pageSize, setPageSize] = React.useState(10);
    const [startIndex, setStartIndex] = React.useState(0);

    const setPage = (i_) => {
        setStartIndex(--i_ * pageSize)
    }

    const EditAction = (e, data) => {
        console.log(data)
    }

    (async () => {

        if (data) return;

        let res = await fetch(api + 'users');
        let data_ = await res.json();
        setData(data_);
        props.setBase(data_, 'users');

    })()

    return (
        <div className = 'card'>
            <h3 style = {{margin: 0, marginBottom: 10}}>View Users</h3>
            <br />
            {
                data ?
                <>
                <Viewer 
                    data = {data.data.slice(startIndex, pageSize + startIndex)}
                    hidden = {['_id', 'emailConfirmToken']}
                    actions = {[
                            {onClick: EditAction, value: 'Edit', className : 'btn btn-primary', condition: 'status', checkValue: 1},
                    //    {onClick: EditAction, value: 'Delete', className : 'btn btn-danger', break: true}
                    ]}
                />
                <div className = 'order-pager-container'>
                    <span style = {{float: 'left'}}>
                        Showing {startIndex + 1} to {(startIndex + 1) * pageSize < data.data.length ? (startIndex + 1) * pageSize: data.data.length} of {data.data.length} entries
                    </span>
                    <Pager 
                        count = {Math.ceil(data.data.length / pageSize)}
                        setPage = {setPage}
                    />
                </div>
                </>
                : "loading ..."
            }
        </div>
    )

}