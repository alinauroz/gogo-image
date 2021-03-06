import React from 'react'
import {View, Image, Text} from '../Basic/AppComponents'
import ImageLoader from '../../utils/ImageLoader'
import {capitalize} from '../../utils/string'
import { request } from '../../utils/AppRequest'
import { v4 as uuidv4 } from 'uuid';

export default function (props) {

    const prices = props.prices || {}
    const [price, setPrice] = React.useState(0)
    const [message, setMessage] = React.useState('')

    const addToCart = async () => {

        try {
            const id = uuidv4();
            let cartItem = {};

            if (! main) {
                return setMessage('You must provide a main image');
            }

            if (superimpose1 && superimpose1.original) {

                let data = await request({
                    route: 'images',
                    method: 'post',
                    body: {
                        base64: superimpose1.original,
                        nameType: 'superimpose'
                    }
                });

                cartItem.superimpose1 = data.fileName;

            }

            if (superimpose2 && superimpose2.original) {

                let data = await request({
                    route: 'images',
                    method: 'post',
                    body: {
                        base64: superimpose2.original,
                        nameType: 'superimpose'
                    }
                });

                cartItem.superimpose2 = data.fileName;

            }

            if (main && main.original) {

                let data = await request({
                    route: 'images',
                    method: 'post',
                    body: {
                        base64: main.original,
                        nameType: 'main'
                    }
                });

                cartItem.main = data.fileName;

            }

            cartItem = {
                id,
                ... cartItem,
                text,
                year,
                retouch: (retouch && retouchValue) ? retouchValue: 'none',
                price,
                template: props.item.image,
                size: props.item ? props.item.size : '',
                templateId: props.item ? props.item._id: '',
                templateThumb: props.item ? props.item.thumb: '',
            }

            if (props.addToCart) props.addToCart({cartItem})

        }
        catch (err) {
            console.error(err)
            alert('error')
        }

    }

    const [retouch, setRetouch] = React.useState();
    const [retouchValue, setRetouchValue] = React.useState();
    const [text, setText] = React.useState();
    const [year, setYear] = React.useState();
    const [main, setMain] = React.useState();
    const [superimpose1, setSuperimpose1] = React.useState();
    const [superimpose2, setSuperimpose2] = React.useState();

    const calculatePrice = () => {
        
        let price_ = 0;

        if (retouch) {
            if (retouchValue === 'single')
                price_ += prices.retouchSingle
            else if (retouchValue === 'group')
                price_ += prices.retouchGroup
        }

        if (text)
            price_ += prices.text

        if (year)
            price_ += prices.year

        if (superimpose1)
            price_ += prices.superimpose1

        if (superimpose2)
            price_ += prices.superimpose2

        return main ? price_ + prices.template : price_

    }

    React.useEffect(() => {

        setPrice(calculatePrice())

    }, [text, retouch, retouchValue, year, main, superimpose1, superimpose2])

    return (
        <View className = 'itemview-container'>
            <View className = 'itemview-image-container'>
                <Image source = {props.url} className = 'itemview-image' />
            </View>
            <View className = 'itemview-input-group' style = {{color: 'white'}}>
                <View>
                    <Text style = {{marginTop: 10, fontSize: 13}} className = 'itemviewer-sub-container'>
                        <table>
                            <tr>
                                <td>{capitalize(props.type)}  -  ${prices.template} </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <span>
                                        <label for = {`item-retouch-${props.type}`} >Retouch</label>
                                        <input 
                                            type = 'checkbox' 
                                            id = {`item-retouch-${props.type}`}
                                            checked = {retouch}
                                            onClick = {(e) => {
                                                setRetouch(e.target.checked)
                                            }}
                                        />
                                    </span>
                                </td>
                                <td>
                                    <span style = {{marginRight: 10}}>
                                        <input 
                                            name = {`item-retouch-${props.type}`}
                                            type = 'radio' 
                                            disabled = {! retouch}
                                            id = {`item-retouch-single-${props.type}`}
                                            onClick = {() => {
                                                setRetouch(true);
                                                setRetouchValue('single')
                                            }}
                                        />
                                        <label for = {`item-retouch-single-${props.type}`} >${prices.retouchSingle} - 1 Person</label>
                                    </span>
                                    <span style = {{marginRight: 10}}>
                                        <input 
                                            name = {`item-retouch-${props.type}`}
                                            type = 'radio'
                                            id = {`item-retouch-group-${props.type}`}
                                            disabled = {! retouch}
                                            onClick = {() => {
                                                setRetouch(true);
                                                setRetouchValue('group')
                                            }}
                                        />
                                        <label for = {`item-retouch-group-${props.type}`} >${prices.retouchGroup} - Group</label>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text style = {{paddingTop: 5}}>Text: ${prices.text}</Text>
                                </td>
                                <td>
                                    <input 
                                        className = 'itemviewer-input'
                                        placeholder = 'Max. 25 Characters'
                                        value = {text}
                                        onChange = {
                                            (e) => {
                                                e.target.value.length <= 25 ?
                                                setText(e.target.value)
                                                : alert('Max Length is 25')
                                            }
                                        }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text style = {{paddingTop: 5}}>Year: ${prices.year}</Text>
                                </td>
                                <td>
                                    <input 
                                        className = 'itemviewer-input'
                                        placeholder = 'Enter year photo taken'
                                        onChange = {(e) => {
                                            setYear(e.target.value)
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text>Main Image</Text>
                                </td>
                                <td>
                                    <ImageLoader sizes = {{original: 'original'}} setImages = {setMain} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text>Superimpose 1: ${prices.superimpose1}</Text>
                                </td>
                                <td>
                                    <ImageLoader 
                                        sizes = {{original: 'original'}}
                                        setImages = {setSuperimpose1}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <Text>Superimpose 2: ${prices.superimpose1}</Text>
                                </td>
                                <td>
                                    <ImageLoader 
                                        sizes = {{original: 'original'}}
                                        setImages = {setSuperimpose2}
                                    />
                                </td>
                            </tr>
                            {/*<tr>
                                <td>Total for this</td>
                                <td>{'\t$' + price}</td>
                            </tr>*/}
                        </table>
                        <div style = {{margin: '5px 0px'}}>
                            {message}
                        </div>
                        <input 
                            type = 'button'
                            value = {'Add to Cart - $' + price}
                            className = 'action-button'
                            style = {{width: 150}}
                            onClick = {addToCart}
                        />
                    </Text>
                </View>
            </View>
        </View>
    )

}