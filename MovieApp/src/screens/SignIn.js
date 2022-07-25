import {component} from 'react'
import { SafeAreaView } from 'react-native'
import { Button, TextInput } from 'react-native-web';


class SignIn extends component {
    render() {
        return (
            <SafeAreaView>
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
