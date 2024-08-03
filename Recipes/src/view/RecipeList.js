import {StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView} from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";


const RecipeList = () =>{
    return (
        <SafeAreaView>
            {/*render header*/}
            <Header headerText={"Hi, John"} headerIcon={"bell-o"}/>

            {/*Search Filter*/}
            <SearchFilter icon="search" placeholder={"enter your favourite recipe"}/>

            {/*Categories filter*/}

            <View style={{marginTop: 22}}>
                <Text style={{fontSize:22, fontWeight:"bold",marginLeft:10,}}>Categories</Text>
                {/*Categories List*/}
                <CategoriesFilter />
            </View>

                {/*Recipe List Filter*/}

            <View>
                <Text style={{fontSize:22, fontWeight:"bold",marginLeft:10,}}>Recipes</Text>
            </View>
            <ScrollView style={{marginTop: 22}}>
                {/*<Text style={{fontSize:22, fontWeight:"bold",}}>Recipes</Text>*/}
                {/*Recipe List*/}
                <RecipeCard />
            </ScrollView>
        </SafeAreaView>
    );

};

export default RecipeList;

const styles = StyleSheet.create({});
