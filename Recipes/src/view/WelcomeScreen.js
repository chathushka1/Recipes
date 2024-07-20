import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const WelcomeScreen = () =>{
    return (
        <View style={{ flex: 1}}>
            {/*<Text>WelcomeScreen</Text>*/}
            <Image source={require("../../assets/images/Welcome.jpg")}></Image>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});