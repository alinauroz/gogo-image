import React from 'react'
import Box from '../Container/Box'
import {View, Text, Button} from '../Basic/AppComponents'
import FormRenderer from '../../utils/FormRenderer'

const loginFields = [
    {title: 'Email', name: 'email', type: 'email', required: true},
    {title: 'Password', name: 'password', type: 'password', required: true}
]

const signupFields = [

]

export default function (props) {

    const [selected, setSelected] = React.useState(props.selected || 0);

    return (
        <Box>
            <View>
                <Button 
                    value = "Login"
                    className = {selected == 0 ? 'pair-button pair-button-selected': "pair-button"}
                    onPress = {() => setSelected(0)}
                />
                <Button 
                    value = "Sign Up"
                    className = {selected == 1 ? 'pair-button pair-button-selected': "pair-button"}
                    onPress = {() => setSelected(1)}
                />
                <br /><br />
                {
                    selected ? 
                    <FormRenderer 
                        fields = {signupFields}
                    />
                    : 
                    <FormRenderer 
                        fields = {loginFields}
                    />
                }
            </View>
        </Box>
    )

}