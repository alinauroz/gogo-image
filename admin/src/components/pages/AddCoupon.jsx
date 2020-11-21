import React from 'react'
import Field from '../unit/Field'
import Viewer from '../../utils/Viewer'
import getFormData from '../../utils/getFormData'

export default function () {

    const [forAll, setForAll] = React.useState(true);

    const addCoupon = (e) => {
        e.preventDefault();
        console.log(getFormData(e.target))
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
                    title = 'Start Date'
                    placeholder = 'Start Date'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                />
                <Field 
                    name = 'maxDiscount'
                    title = 'Maximum Discount'
                    placeholder = 'Maximum Discount'
                    inputType = 'number'
                    style = {{marginTop: 10}}
                />
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
                <Field 
                    name = 'validFor'
                    title = 'Type of Use'
                    placeholder = 'Separate tags using spaces'
                    inputType = 'text'
                    style = {{marginTop: 10}}
                    disabled = {forAll}
                />
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