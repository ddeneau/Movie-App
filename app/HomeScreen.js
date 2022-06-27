import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, FlatList, Image, View, Platform} from 'react-native';
//import {useDeviceOrientation, useDimensions} from '@react-native-community/hooks';
//import {createStackNavigator} from "@react-navigation/native"

export default class HomeScreen extends Component {
    render() {
            return (
            <View style={styles.home}>
                <FlatList>
                    <View>
                        <Image source={require("./assets/high_life.jpg")}>
                        </Image>
                    </View>

                    <View>
                        <Image source={require("./assets/once_upon_a_time_in_hollywood.jpg")}>
                        </Image>
                    </View>
                </FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 
    },

    flatlist: {
        backgroundColor: "lightblue"
    }
});