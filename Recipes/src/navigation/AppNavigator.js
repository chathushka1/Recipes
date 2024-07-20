import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from '../view/WelcomeScreen';
import {createNativeStackNavigator} from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();
const AppNavigator = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown:false}}>
                <Stack.Screen name="Welcome" component={WelcomeScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;

const styles = StyleSheet.create({});