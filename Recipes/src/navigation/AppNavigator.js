import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";

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