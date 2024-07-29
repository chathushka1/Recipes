import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";

const RecipeDetails = () =>{
    return (
        <View style={{backgroundColor:"#6f4e37", flex: 1}}>
            <View
                style={{
                    backgroundColor:"#fff",
                    flex: 1,
                    marginTop:240,
                    borderTopLeftRadius:56,
                    borderTopRightRadius:56,
                }}>
                <View style={{
                    //backgroundColor:"red",
                    height:300,
                    width:300,
                    position:"absolute",
                    top:-150,
                    left:30,
                }}>
                    <Image
                        source={require('../../assets/images/HotDog.jpg')}
                        style={{width:"100%", height:"100%", resizeMode:"contain"}}/>
                </View>
            </View>
        </View>
    );
};

export default RecipeDetails;

const styles = StyleSheet.create({});
