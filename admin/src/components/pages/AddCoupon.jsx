import React from 'react'
import Field from '../unit/Field'
import Viewer from '../../utils/Viewer'
import getFormData from '../../utils/getFormData'
import {request} from '../../utils/request'

export default function () {

    const [forAll, setForAll] = React.useState(true);
    const [message, setMessage] = React.useState('');

    const addCoupon = async (e) => {
        e.preventDefault();

        let formData = (getFormData(e.target));
        formData.forAll = forAll;
        
        //formData.validFor = formData.validFor.split(' ').filter(tag => tag !== ' ' & tag !== '');

        formData.startDate = new Date(formData.startDate).getTime();
        formData.endDate = new Date(formData.endDate).getTime();
        try {

            let res = await request({
                route: 'coupons',
                method: 'POST',
                credentials: 'include',
                body: formData
            })

            if (res.status == 'success')
                setMessage('Coupon added successfully');
            else {
                setMessage('Problem adding Coupon');
            }

        }
        catch (err) {
            setMessage('Error')
            console.log(err)
        }

    }

    return (
        <div className = 'card'>
            <h3 style = {{margin: 0, marginBottom: 10}}>Add Coupon</h3>
            <div style = {{minWidth: 300, width: '60%'}}>
                <form action = '' onSubmit = {addCoupon}>
                <Field 
                    name = 'name'
                    title = 'Name'
                    placeholder = 'Name'
                    style = {{marginTop: 10}}
                />
                {
                //<div style = {{marginTop: 10}}>
                //    <p>Type of Use</p>
                //    <select className = 'form-control' name = 'type'>
                //        <option>All</option>
                //        <option>Dance</option>
                //    </select>
                //</div>
                }
                <Field 
                    name = 'code'
                    title = 'Coupon Code'
                    placeholder = 'Coupon Code'
                    style = {{marginTop: 10}}
                />
                <Field 
                    name = 'minOrder'
                    title = 'Minimum Order'
                    placeholder = 'Min Order'
                    style = {{marginTop: 10}}
                />
                <Field 
                    name = 'discount'
                    title = 'Discount'
                    placeholder = 'Discount'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                />
                {
                //<Field 
                //    name = 'maxDiscount'
                //    title = 'Maximum Discount'
                //    placeholder = 'Maximum Discount'
                //    inputType = 'number'
                //    style = {{marginTop: 10}}
                ///>
                }
                <Field 
                    name = 'startDate'
                    title = 'Start Date'
                    placeholder = 'Start Date'
                    inputType = 'date'
                    style = {{marginTop: 10}}
                />
                <Field 
                    name = 'endDate'
                    title = 'Expire Date'
                    placeholder = 'Expire Date'
                    inputType = 'date'
                    style = {{marginTop: 10}}
                />
                {
                //<Field 
                //    name = 'validFor'
                //    title = 'Type of Use'
                //    placeholder = 'Separate tags using spaces'
                //    inputType = 'text'
                //    style = {{marginTop: 10}}
                //    disabled = {forAll}
                ///>
                //
                //<div style = {{marginTop: 10}}>
                //    <input checked = {forAll} type = 'checkbox' id = 'coupon-fol-all-cb' onClick = {(e) => setForAll(e.target.checked)} />
                //    <label style = {{display: 'inline-block', verticalAlign: 'top', margin: '0px 6px'}} for = 'coupon-for-all-cb'>This coupon is valid for all</label>
                //</div>
                }
                <p style = {{margin: '5px 0px'}}>
                    {message}
                </p>
                <div style = {{marginTop: 20}}>
                    <button
                        type = 'submit' 
                        value = 'Done'
                        className = 'btn btn-success'
                    >
                        <i class="glyphicon glyphicon-ok" style = {{marginRight: 5}}></i>
                        Done
                    </button>
                    <button
                        type = 'button' 
                        value = 'Done'
                        className = 'btn btn-warning'
                        style = {{marginLeft: 10}}
                    >
                        <i class="glyphicon glyphicon-ban-circle" style = {{marginRight: 5}}></i>
                        Cancel
                    </button>
                </div>
                </form>
            </div>
        </div>
    )

}