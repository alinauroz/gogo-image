import React from 'react'
import {request} from '../../utils/AppRequest'
import getUnique from '../../utils/getUnique'
import Collapsible from 'react-collapsible';
import {capitalize} from '../../utils/string'
import {View, Text} from '../Basic/AppComponents'
import ReactHtmlParser from "react-html-parser";

export default function () {

    const [FAQS, setFAQS] = React.useState();
    const [cats, setCats] = React.useState()

    if (! FAQS) {
        request({
            route: 'faqs',
        }).then(res => {
            if (res.data) {
                setFAQS(res.data)
            }
        })
    }
    
    if (! cats && FAQS) {
        setCats(getUnique(FAQS, 'category'));
    }

    return (
        <View className = 'box' style = {{width: 600, border: 0}}>
            {
                cats ?
                cats.map(cat => {
                    let content = [];
                    content.push(<Text style = {{fontSize: 22, marginTop: 22, marginBottom: 10}}>{capitalize(cat)}</Text>)
                    
                    let innerContent = [];

                    FAQS.map(faq => {
                        if (faq.category === cat)
                            innerContent.push(
                                <Collapsible trigger = {faq.question} transitionTime = {200} triggerStyle = {{background: 'white', padding: 15, cursor: 'pointer', display: 'block', borderBottom: '1px solid lightgrey'}}>
                                    <View style = {{background: '#33333308', borderBottom: '1px solid lightgrey', padding: 15}}>
                                        {ReactHtmlParser(ReactHtmlParser( faq.answer))}
                                    </View>
                                </Collapsible>
                            )
                    })

                    content.push(<View style = {{boxShadow: '0px 0px 2px lightgrey'}}>{innerContent}</View>);

                    return content;
                })
                : ''
            }
        </View>
    )

}