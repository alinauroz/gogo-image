import React from 'react'
import {request } from '../../utils/request'
import moment from 'moment'

const Dispute = (props) => {

    const [loading, setLoading] = React.useState(true);
    const [id, setId] = React.useState(props.id);
    const [error, setError] = React.useState('');
    const [data, setData] = React.useState({});
    const [currentContent, setCurrentContent] = React.useState('');

    if (id != props.id) {
        setId(props.id);
        setError('');
    }

    const addMessage = () => {

        if (! data.messages)
            return;

        data.messages.push({
            content: currentContent,
            fromUser: false,
        })
        setData({... data});
        setCurrentContent('');

        request({
            method: 'PUT',
            route: 'contact/' + id,
            body: data
        })
    }

    const getData = async () => {
        let res = await request({
            route: 'contact/' + id,
        });
        console.log("RES", res);
        if (res.data) {
            console.log(res.data);
            setData(res.data)
        }
        else {
            setError('Error')
        }

        setLoading(false);

    }

    React.useEffect(() => {

        setLoading(true);

        getData();


    }, [id]);

    

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                background: '#33333355',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%'
            }}
        >
            <div style={{maxHeight: 550, width: 750, background: 'white', border: '#333333aa', borderRadius: 5, padding: 10}}>
                <div>
                    <h3 style={{fontWeight: 'normal', fontSize: 22}}>
                        Ticket # {props.id}
                        <span style={{float: 'right', cursor: 'pointer'}} onClick={props.hide}>
                            X
                        </span>
                    </h3>
                </div>
                {
                    loading ? <>Loading ...</>:
                    error ? <>{error}</>:
                    <div>
                    <div style={{height: 350, overflow: 'auto'}}>
                        {
                            data.messages ? data.messages.map(msg => {
                                return (
                                    <div>
                                        <div
                                            style={{
                                                padding: 10,
                                                borderRadius: 5,
                                                background: !msg.fromUser? 'white': 'lightgrey',
                                                display: 'inline-block',
                                                maxWidth: '60%'
                                            }}
                                        >
                                            <p><b>
                                               {moment(new Date(msg.ts)).format('YYY-MM-DD / hh:mm')}
                                                {
                                                    msg.fromUser?
                                                    data.firstName +' '+ data.lastName
                                                    : 'Admin'
                                                } 
                                            </b></p>
                                            {msg.content}
                                        </div>
                                    </div>
                                )
                            }): null
                        }

                        </div>
                        <div>
                            <textarea 
                                value={currentContent}
                                onChange={(e) => setCurrentContent(e.target.value)}
                                placeholder='Your message here ...' style={{width: '100%'}}></textarea>
                            <div>
                                <input 
                                    type='button'
                                    value='Attach'
                                    className='btn btn-primary'
                                />
                                <span style={{float: 'right'}}>
                                    <input 
                                        type='button'
                                        value='Send'
                                        onClick={addMessage}
                                        style={{marginLeft: 5,marginRight: 5}}
                                        className='btn btn-primary'
                                    />
                                    <input 
                                        type='button'
                                        value='Cancel'
                                        onClick={props.hide}
                                        className='btn btn-primary'
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )

}

export default Dispute;