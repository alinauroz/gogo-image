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

    const deletePage = async (e, data) => {
        e.target.disabled = true;
        let res = await request({
            route: 'posts/',
            params: data._id,
            method: 'DELETE',
            credentials: 'include'
        })
        if (res.status == 'success') setData('')
    }

    const EditAction = async (e, _data, index) => {
        props.setBase(data.data[index], 'post', true);
        props.setScreen('EditPost');
    }

    (async () => {

        if (data) return;

        let res = await fetch(api + 'posts');
        let data_ = await res.json();

        data_.data.forEach(post => {
            post.img = {
                type: 'image',
                src: api + 'images/' +(post.items[0] && post.items[0].thumb)
            }
        })

        setData(data_);
        props.setBase(data_, 'posts');

    })()

    return (
        <div className = 'card'>
            <h3 style = {{margin: 0, marginBottom: 10}}>View Templates</h3>
            <br />
            {
                data ?
                <>
                <Viewer 
                    data = {data.data.slice(startIndex, pageSize + startIndex)}
                    hidden = {['_id', 'createdAt', 'updatedAt', 'items']}
                    actions = {[
                        {onClick: EditAction, value: 'Edit', className : 'btn btn-primary margin-5'},
                        {onClick: deletePage, value: 'Delete', className : 'btn btn-danger margin-5', break: true}
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