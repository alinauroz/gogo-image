import React from 'react'
import {request} from '../../utils/request'
import {api} from '../../data/api'
import {View, Text} from '../Basic/AppComponents'
import OrderViewer from '../../utils/OrderViewer'
import JSZip from 'jszip'
import { saveAs } from 'file-saver';

export default function (props) {

    const invoiceNo = 'PF1611868812607';
    const [data, setData] = React.useState();
    const [error, setError] = React.useState('');

    const [images, _setImages] = React.useState([]);

    const setImages = (index, base64) => {
        images[index] = base64;
        _setImages(images)
    }

    const submitOrder = async () => {
        let zip = new JSZip();
        images.forEach(img => {
            let base64 = img.base64.split(',')[1];
            zip.file(img.data.name, base64, {base64: true});
        });
        let content = await zip.generateAsync({type:"blob"});

        let formData = new FormData();
        formData.append('submission', content, invoiceNo+'.zip');
        let res = await fetch(api + 'zips', {
            method: 'POST',
            credentials: 'include',
            body: formData,
        })

    }

    if (! data) {
        request({
            route: 'orders/invoice/',
            params: invoiceNo,
            method: 'GET'
        }).then(res => {
            if (res.status == 'success') {
                setData(res.data);
            }
            else {
                setError('Order not found');
            }
        })
    }

    return(
        <View>
            {
                data ?
                <>
                    <div>
                        <input 
                            type = 'button'
                            className = 'btn btn-success'
                            value = 'Submit'
                            onClick = {submitOrder}
                        />
                    </div>
                    <OrderViewer 
                        items = {data.items}
                        price = {data.price}
                        setImages = {setImages}
                    />
                </>
                : error ? <Text style = {{textAlign: 'center', marginTop: 20}}>{error}</Text> : <Text style = {{textAlign: 'center', marginTop: 20}}>Loading ...</Text>
            }
        </View>
    )

}