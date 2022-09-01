import { SafeAreaView } from 'react-native'
import { Button, TextInput } from 'react-native-web';

const SignIn = () => {
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

export default SignIn
