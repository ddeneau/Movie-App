import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn'

const AppStackNavigator = createStackNavigator (
    {
        Home: { screen: Home },
        SignIn: { screen: SignIn }
      },
      {
        initialRouteName: 'SignIn',
        headerMode: 'none',
        navigationOptions: {
          headerVisible: false,
        }
      }
);

export default AppStackNavigator