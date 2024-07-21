import {StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView} from "react-native";
import React from "react";
import Header from "../components/Header";


const RecipeList = () =>{
    return (
        <SafeAreaView>
            {/*render header*/}
            <Header headerText={"Hi, John"} headerIcon={"bell-o"}/>
        </SafeAreaView>
    );

};

export default RecipeList;

const styles = StyleSheet.create({});
