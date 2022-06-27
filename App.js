import React, { Component } from 'react';
import {ImageBackground, Platform, StyleSheet, TextInput, Button, TouchableNativeFeedback, View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen  from './app/StartScreen.js';

const stack = createStackNavigator();

function App() {
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name={"Start"}
                              component={StartScreen}
                />
            </stack.Navigator>
        </NavigationContainer>        
    );
}

export default App;