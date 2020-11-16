import React from 'react'
import {request} from '../../utils/AppRequest'

export default function () {

    const [FAQS, setFAQS] = React.useState();

    if (! FAQS) {
        let faqs = await request({
            route: '/faqs',
        })
        setFAQS(faqs.data);
    }

    return JSON.stringify(FAQS)

}