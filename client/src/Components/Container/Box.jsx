import {View} from '../Basic/AppComponents'

export default function (props) {
    return (
        <View className = 'box' style={props.style || {}}>
            {props.children}
        </View>
    )
}