import {StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView} from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";


const RecipeList = () =>{
    return (
        <SafeAreaView>
            {/*render header*/}
            <Header headerText={"Hi, John"} headerIcon={"bell-o"}/>
            <SearchFilter icon="search" placeholder={"enter your favourite recipe"}/>
        </SafeAreaView>
    );

};

export default RecipeList;

const styles = StyleSheet.create({});
