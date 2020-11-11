import React from 'react'
import {View, Image, Text} from '../Basic/AppComponents'
import ImageLoader from '../../utils/ImageLoader'
import {capitalize} from '../../utils/string'

export default function (props) {
    
    const setImages = images => {
        console.log('Images', images)
    }

    React.useEffect(() => {
        console.log(
            retouch,
            text,
            year,
            main,
            superImpose1,
            superImpose2
        )
    })

    const [retouch, setRetouch] = React.useState();
    const [retouchValue, setRetouchValue] = React.useState();
    const [text, setText] = React.useState();
    const [year, setYear] = React.useState();
    const [main, setMain] = React.useState();
    const [superImpose1, setSuperImpose1] = React.useState();
    const [superImpose2, setSuperImpose2] = React.useState();

    return (
        <View className = 'itemview-container'>
            <View className = 'itemview-image-container'>
                <Image source = {props.url} className = 'itemview-image' />
            </View>
            <View className = 'itemview-input-group' style = {{color: 'white'}}>
                <Text>{capitalize(props.type)}</Text>
                <View>
                    <Text style = {{marginTop: 10, fontSize: 13}} className = 'itemviewer-sub-container'>
                        <table>
                            <tr>
                                <td>
                                    <span>
                                        <label for = {`item-retouch-${props.type}`} >Retouch</label>
                                        <input 
                                            type = 'checkbox' 
                                            id = {`item-retouch-${props.type}`} 
                                            onClick = {(e) => {
                                                setRetouch(e.target.checked)
                                            }}
                                        />
                                    </span>
                                </td>
                                <td>
                                    <span style = {{marginRight: 20}}>
                                        <input type = 'radio' id = {`item-retouch-single-${props.type}`} />
                                        <label for = {`item-retouch-single-${props.type}`} >1 Person</label>
                                    </span>
                                    <span style = {{marginRight: 20}}>
                                        <input type = 'radio' id = {`item-retouch-single-${props.type}`} />
                                        <label for = {`item-retouch-single-${props.type}`} >1 Person</label>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <Text style = {{paddingTop: 5}}>Text:</Text>
                                </td>
                                <td>
                                    <input 
                                        className = 'itemviewer-input'
                                        placeholder = 'Max. 25 Characters'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text style = {{paddingTop: 5}}>Year:</Text>
                                </td>
                                <td>
                                    <input 
                                        className = 'itemviewer-input'
                                        placeholder = 'Enter year photo taken'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text>Main Image</Text>
                                </td>
                                <td>
                                    <ImageLoader sizes = {{original: 'original'}} setImages = {setImages} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text>Superimpose 1</Text>
                                </td>
                                <td>
                                    <ImageLoader />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <Text>Superimpose 2</Text>
                                </td>
                                <td>
                                    <ImageLoader />
                                </td>
                            </tr>
                        </table>
                    </Text>
                </View>
            </View>
        </View>
    )

}