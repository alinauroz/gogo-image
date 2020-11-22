import React from 'react'
import Viewer from '../../utils/Viewer'
import {request} from '../../utils/request'

export default function (props) {

    const [data, setData] = React.useState();
    const [error, setError] = React.useState();

    const toggleActive = async (e, data) => {

        let res = await request({
            route: 'coupons',
            method: 'PUT',
            credentials: 'include',
            params: '/' + data._id,
            body: {
                active: ! data.active
            }
        });

        if (res.status == 'success') {
            setData('')
        }

    }

    if (! data) {
        request({
            route: 'coupons',
            method: 'GET'
        }).then(res => {
            if (res.data) {

                res.data.map(coupon => {
                    coupon.StartDate = new Date(coupon.startDate)
                    coupon.EndDate = new Date(coupon.endDate)
                    coupon.Active = coupon.active ? 'Active': 'Disabled'
                })

                setData(res.data);
            }
            else {
                setError('Error while fetching coupons')
            }
        })
    }

    if (data) {
        return (
            <Viewer 
                data = {data}
                hidden = {['_id', 'validFor', 'forAll', 'updatedAt', 'startDate', 'endDate', 'active']}
                actions = {[
                    //{onClick: EditAction, value: 'Edit', className : 'btn btn-primary'},
                    {onClick: toggleActive, value: 'Toggle Active', className : 'btn btn-primary', break: true}
                ]}
            />
        )
    }
    else {
        return error ? <>{error}</> : <>Loading ...</>
    }

}