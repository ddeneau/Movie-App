import React, { Component } from 'react';
import {ImageBackground, Platform, StyleSheet, TextInput, Button, TouchableNativeFeedback, View, StatusBar} from 'react-native';
import HomeScreen from './HomeScreen';
import NavigationContainer from '@react-navigation/native';
import StackNavigator from '@react-navigation/stack';


export default class StartScreen extends Component {
    render() {
        return(
            <ImageBackground
                style={styles.background}
                source={require('./assets/background.jpg')}
            >
            <View style={styles.usernameField}>
                <TextInput
                    placeholder={" Enter your username "}
                    returnKeyType={(Platform.OS == "ios") ? "done" : "next"}
                >
                </TextInput>
            </View>
            <View style={styles.passwordField}>
                <TextInput
                    placeholder={" Enter your password "}
                    returnKeyType={(Platform.OS == "ios") ? "done" : "next"}
                >
                </TextInput>
            </View>
            <View style={styles.loginButton}>
                <Button title={"Start"}
                        onPress={() => this.props.navigation.navigate(HomeScreen)}>
                </Button>
            </View>
            </ImageBackground>
        );
    }
}

/* StyleSheet with all the styles. */
const styles = StyleSheet.create({
    background: { /* Entire background of the screen. */
        flex: 1,
        justifyContent: "center", // Fills background to edges of screen. 
        alignItems: "center", //Aligns the item INSIDE this thing.
        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight // Android status bar offset.
    },

    usernameField: { /* user login box */
        width: "90%",
        height: "5%",
        justifyContent: "center", // Fills background to edges of screen. 
        alignItems: "center", //Aligns the item INSIDE this thing.
        backgroundColor: "lightblue",      
        top: "5%",
    },

    passwordField: /* password login box */ {
        width: "90%",
        height: "5%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "beige",      
        top: "5%",
    },

    loginButton: /* Login button box. */ {
        width: "25%",
        height: "6%",
        backgroundColor: "beige",
        opacity: 90, // ?? Doesnt work. 
        top: "6%" // Top offset. 
    }
})