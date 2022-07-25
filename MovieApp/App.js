
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Home } from './src/screens/Home'
import SignIn from './src/screens/SignIn';

const App = () => {
  return (
      <SafeAreaView>
        <Text>Hello World!</Text>
        <NavigationContainer>{
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='SignIn' component={SignIn}/>
          </Stack.Navigator>
        }</NavigationContainer>
      </SafeAreaView>
    );
}

export default App;
