import React from 'react'
import {request } from '../../utils/AppRequest'

const Dispute = (props) => {

    const [loading, setLoading] = React.useState(true);
    const [id, setId] = React.useState(props.id);
    const [error, setError] = React.useState('');
    const [data, setData] = React.useState({});

    if (id != props.id) {
        setId(props.id);
        setError('');
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
                    <h3 style={{fontWeight: 600, fontSize: 32}}>
                        Ticket # {props.id}
                        <span style={{float: 'right', cursor: 'pointer'}} onClick={props.hide}>
                            X
                        </span>
                    </h3>
                </div>
                {
                    loading ? <>Loading ...</>:
                    error ? <>{error}</>:
                    <div style={{minHeight: 200, maxHeight: 'calc(100% - 80px)', overflow: 'auto'}}>
                        {
                            data.messages ? data.messages.map(msg => {
                                return (
                                    <div>
                                        <div
                                            style={{
                                                padding: 10,
                                                borderRadius: 5,
                                                background: !msg.fromUser? 'white': 'lightgrey'
                                            }}
                                        >
                                            <b>2021-02-05 13:10 - User</b>
                                            {msg.content}
                                        </div>
                                    </div>
                                )
                            }): null
                        }
                    </div>
                }
            </div>
        </div>
    )

}

export default Dispute;