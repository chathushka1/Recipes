import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from '../view/WelcomeScreen';
import WelcomeScreenView from '../view/RecipeList';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import RecipeList from "../view/RecipeList";
import RecipeDetails from "../view/RecipeDetails";

const Stack = createNativeStackNavigator();
const AppNavigator = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown:false}}>
                <Stack.Screen name="Welcome" component={WelcomeScreen}></Stack.Screen>
                <Stack.Screen name="RecipeListView" component={RecipeList}></Stack.Screen>
                <Stack.Screen name="RecipeDetailsView" component={RecipeDetails}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;

const styles = StyleSheet.create({});