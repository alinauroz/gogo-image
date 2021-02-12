import {capitalize} from '../utils/string'
import {api} from '../data/api'
import ImageLoader from '../utils/ImageLoader'

function Text (props) {
    return ( <p 
            style = {props.style}
            className = {props.className}
            >
                {props.children}
            </p>);
}

export function Image (props) {
    return (
        <img 
            src = {props.source}
            style = {props.style}
            className = {props.className}
        />
    )
}

export function View (props) {
    return <div 
                className = 'View'
                style = {props.style}
                className = {props.className}
            >
                {props.children}
            </div>
}

function Table (props){
    return <table
        style = {props.style}
        className = {props.className}
    >
        {props.children}
    </table>
}

function Tr (props){
    return <tr
        style = {props.style}
        className = {props.className}
    >
        {props.children}
    </tr>
}

function Td (props){
    return <td
        style = {props.style}
        className = {props.className}
    >
        {props.children}
    </td>
}

function Th (props){
    return <th
        style = {props.style}
        className = {props.className}
    >
        {props.children}
    </th>
}

export default function (props) {

    const setImage = (base64, data) => {
        if (base64['0'])
        props.setImages(props.index, {base64: base64['0'], data})
    }

    return (
        <Tr className = 'cart-tr'>
            <Td className = 'cart-td empty-th-td' style = {{minWidth: '50px'}}></Td>
            <Td className = 'cart-td' style = {{width: 220, textAlign: 'center'}}>
                    <Image
                        source = {api + 'images/' + props.item.templateThumb}
                        className = 'cart-unit-image'
                        style = {{ maxHeight: '120px'}}
                    />
            </Td>
            <Td className = 'cart-td' style = {{maxWidth: window.innerHeight * 0.13}}>
                <p>
                    {
                        props.item ? 
                        (
                            <>
                                <p style = {{margin: 0}}>Retouch: {capitalize(props.item.retouch)}</p>
                                <p>Text: {props.item.text}</p>
                                <p>Year: {props.item.year}</p>
                                <br />
                                {props.item.superimpose1 ? <p>Superimpose One</p>: ""}
                                {props.item.superimpose2 ? <p>Superimpose Two</p>: ""}
                            </>
                        )
                        : ""
                    }
                </p>
            </Td>
            <Td className = 'cart-td'>
                <View>
                    <Image 
                        source = {api + 'images/' + props.item.main}
                        className = 'cart-unit-image'
                        style = {{height: '120px'}}
                        setImage = {setImage}
                    />
                </View>
            </Td>
            <Td className = 'cart-td'>
                <View>
                    {
                        props.item.superimpose1 ?
                        <Image 
                            source = {api + 'images/' + props.item.superimpose1}
                            className = 'cart-unit-image'
                            style = {{maxWidth: '120px', maxHeight: '120px'}}
                        />
                        : ""
                    }
                </View>
            </Td>
            <Td className = 'cart-td'>
                <View>
                <View>
                    {
                        props.item.superimpose2 ?
                        <Image 
                            source = {api + 'images/' + props.item.superimpose2}
                            className = 'cart-unit-image'
                            style = {{maxWidth: '120px', maxHeight: '120px'}}
                        />
                        : ""
                    }
                </View>
                </View>
            </Td>
            <Td className='cart-td'>
                <ImageLoader 
                    sizes={['original']}
                    setImages={(d, meta) => setImage(d, meta)}
                />
            </Td>
            <Td className = 'cart-td empty-th-td' style = {{minWidth: '50px'}}></Td>
        </Tr>
    )
}