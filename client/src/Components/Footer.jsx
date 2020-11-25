import {Text, Image, View} from './Basic/AppComponents'
import { Link } from 'react-router-dom'

import gmail from '../data/icons/gmail.png'
import fb from '../data/icons/fb.png'
import twitter from '../data/icons/twitter.jpg'
import insta from '../data/icons/insta.png'
import mail from '../data/icons/mail.png'

export default function (props) {
    console.log('PROPS', props)
    const info = props.info || {}

    return (
        <footer className = 'footer'>
            <View style = {{textAlign: 'center'}}>
                {
                info.google ?
                    <a href = {info.google} target = '_blank'>
                        <Image 
                            source = {gmail}
                            style = {{width: 40, margin: 5}}
                        />
                    </a>
                : ''}
                {
                info.fb ?
                    <a href = {info.fb} target = '_blank'>
                        <Image 
                            source = {fb}
                            style = {{width: 40, margin: 5}}
                        />
                    </a>
                : ''}
                {
                info.twitter ?
                    <a href = {info.twitter} target = '_blank'>
                        <Image 
                            source = {twitter}
                            style = {{width: 40, margin: 5}}
                        />
                    </a>
                : ''}
                {
                info.insta ?
                    <a href = {info.insta} target = '_blank'>
                        <Image 
                            source = {insta}
                            style = {{width: 40, margin: 5}}
                        />
                    </a>
                : ''}
                {
                info.email ?
                    <a href = {'mailto:'+info.email} target = '_blank'>
                        <Image 
                            source = {mail}
                            style = {{width: 40, margin: 5}}
                        />
                    </a>
                : ''}
            </View>
            <View style = {{display: 'inline-block', marginTop: 20, marginLeft: 20}}>
                <Link to = '/faqs' className = 'topbar-links' style = {{color: 'white'}}>FAQ</Link>
                <Link to = '/contactus' className = 'topbar-links' style = {{color: 'white'}}>Contact</Link>
                {
                    props.pages ?
                    props.pages.map(page => {
                        return <Link to = {page.url} style = {{color: 'white'}} className = 'topbar-links'>{page.title}</Link>
                    })
                    : ""
                }
            </View>
            <View style = {{float: 'right', marginRight: 20}}>
                <p className = 'topbar-links' style = {{color: 'white', display: 'inline-block'}}>COPYRIGHT 2019</p>
                <p className = 'topbar-links' style = {{color: 'white', marginLeft: 10, display: 'inline-block'}}>{info.domain}</p>
                <p className = 'topbar-links' style = {{color: 'white', marginLeft: 10, display: 'inline-block'}}>ALL RIGHTS RESERVED</p>
            </View>
        </footer>
    )
}