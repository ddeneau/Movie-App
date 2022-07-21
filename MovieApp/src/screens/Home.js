import react, {component} from 'react'
import { SafeAreaView } from 'react-native'
import { Button } from 'react-native-web';

class Home extends component {
    render() {
        return (
            <SafeAreaView>
                <Text>Home Screen</Text>
                <Button>Click Here</Button>
            </SafeAreaView>
        );
    }
}

export default Home