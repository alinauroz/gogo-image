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

    const EditAction = async (e, _data, index) => {
        console.log(_data._id, _data.status, index)
        let res = await request({
            route: 'users/',
            credentials: 'include',
            params: _data._id,
            method: 'PUT',
            body: {
                status: (_data.status == 0 ? 1 : 0)
            }
        });

        if (res.status === 'success') {
            data.data[index].status = (_data.status == 0 ? 1 : 0);
            setData({ ... data});
        }
        else {
            alert(res.message || 'Unknown error occurred');
        }
        console.log(res.data._id, res.data.status);
    }

    (async () => {

        if (data) return;

        let res = await fetch(api + 'posts');
        let data_ = await res.json();
        setData(data_);
        props.setBase(data_, 'posts');

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
                            {onClick: EditAction, value: '🔓', className : 'btn btn-primary', condition: 'status', checkValue: 0},
                            {onClick: EditAction, value: '🔒', className : 'btn btn-primary', condition: 'status', checkValue: 1},
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