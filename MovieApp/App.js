
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Home } from './src/screens/Home'
import { SignIn } from './src/screens/SignIn';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
      <SafeAreaView>
        <Text>Hello World!</Text>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='SignIn' component={SignIn}/>
          </Stack.Navigator>
      </SafeAreaView>
    );
}

export default App;
