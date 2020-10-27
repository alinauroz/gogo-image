import {Text, Image, View} from './Basic/AppComponents'

import gmail from '../data/icons/gmail.png'
import fb from '../data/icons/fb.png'
import twitter from '../data/icons/twitter.jpg'
import insta from '../data/icons/insta.png'
import mail from '../data/icons/mail.png'

export default function () {
    return (
        <footer className = 'footer'>
            <View style = {{textAlign: 'center'}}>
                <Image 
                    source = {gmail}
                    style = {{width: 40, margin: 5}}
                />
                <Image 
                    source = {fb}
                    style = {{width: 40, margin: 5}}
                />
                <Image 
                    source = {twitter}
                    style = {{width: 40, margin: 5}}
                />
                <Image 
                    source = {insta}
                    style = {{width: 40, margin: 5}}
                />
                <Image 
                    source = {mail}
                    style = {{width: 40, margin: 5}}
                />
            </View>
        </footer>
    )
}