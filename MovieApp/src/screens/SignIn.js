import react, {component} from 'react'
import { SafeAreaView } from 'react-native'
import { Button, TextInput } from 'react-native-web';
import {SignInLayout} from '../styles/spacing'

class SignIn extends component {
    render() {
        return (
            <SafeAreaView style={SignInLayout}>
                <Text>Home Screen</Text>
                <TextInput>User</TextInput>
                <TextInput>Password</TextInput>
                <Button>Login</Button>
                <Button>Sign-Up</Button>
            </SafeAreaView>
        );
    }
}

export default SignIn
