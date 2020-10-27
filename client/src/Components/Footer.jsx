import {Text, Image, View} from './Basic/AppComponents'
import { Link } from 'react-router-dom'

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
            <View style = {{display: 'inline-block', marginTop: 20, marginLeft: 20}}>
                <Link to = '/about' className = 'topbar-links' style = {{color: 'white'}}>About</Link>
                <Link to = '/why-us' className = 'topbar-links' style = {{color: 'white'}}>Why Us</Link>
                <Link to = '/faq' className = 'topbar-links' style = {{color: 'white'}}>FAQ</Link>
                <Link to = '/contact' className = 'topbar-links' style = {{color: 'white'}}>Contact</Link>
                <Link to = '/terms' className = 'topbar-links' style = {{color: 'white'}}>Terms</Link>
                <Link to = '/privacy' className = 'topbar-links' style = {{color: 'white'}}>Privacy</Link>
            </View>
            <View style = {{float: 'right', marginRight: 20}}>
                <p className = 'topbar-links' style = {{color: 'white', display: 'inline-block'}}>COPYRIGHT 2019</p>
                <p className = 'topbar-links' style = {{color: 'white', marginLeft: 10, display: 'inline-block'}}>DOMAIN.COM</p>
                <p className = 'topbar-links' style = {{color: 'white', marginLeft: 10, display: 'inline-block'}}>ALL RIGHTS RESERVED</p>
            </View>
        </footer>
    )
}