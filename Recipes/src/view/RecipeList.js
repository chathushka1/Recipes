import {StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView} from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";


const RecipeList = () =>{
    return (
        <SafeAreaView>
            {/*render header*/}
            <Header headerText={"Hi, John"} headerIcon={"bell-o"}/>

            {/*Search Filter*/}
            <SearchFilter icon="search" placeholder={"enter your favourite recipe"}/>

            {/*Categories filter*/}

            <View style={{marginTop: 22}}>
                <Text style={{fontSize:22, fontWeight:"bold",}}>Categories</Text>
                {/*Categories List*/}
                <CategoriesFilter />
            </View>
        </SafeAreaView>
    );

};

export default RecipeList;

const styles = StyleSheet.create({});
