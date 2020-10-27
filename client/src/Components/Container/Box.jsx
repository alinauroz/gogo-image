import {View} from '../Basic/AppComponents'

export default function (props) {
    return (
        <View className = 'box'>
            {props.children}
        </View>
    )
}