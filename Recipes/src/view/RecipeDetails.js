import {Image, Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {FontAwesome} from "@expo/vector-icons";

const RecipeDetails = ({navigation, route}) =>{
    const { item }= route.params;

    console.log(item);
    return (
        <View style={{backgroundColor:item.color, flex: 1}}>
            <SafeAreaView style={{flexDirection:"row", marginHorizontal:25, marginVertical:25}}>
                <Pressable style={{flex:1}} onPress={() => navigation.goBack()}>
                    <FontAwesome
                        name={"arrow-circle-left"}
                        size={28}
                        color="white"
                        />
                </Pressable>

                <FontAwesome name={"heart-o"} size={28} color="white"/>
            </SafeAreaView>
            <View
                style={{
                    backgroundColor:"#fff",
                    flex: 1,
                    marginTop:240,
                    borderTopLeftRadius:56,
                    borderTopRightRadius:56,
                    alignItems:"center",
                    paddingHorizontal:16,
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
                        /*source={require('../../assets/images/HotDog.jpg')}*/
                        source={item.image}
                        style={{width:"100%", height:"100%", resizeMode:"contain"}}/>
                </View>
                {/*Recipe Name*/}
                <Text
                    style={{
                        marginTop:130,
                        fontSize:28,
                        fontWeight:"bold",

                }}>{item.name}
                </Text>

                {/*Description*/}
                <Text
                    style={{
                        fontSize:20,
                        marginVertical:16,
                }}>
                    {item.description}
                </Text>
            </View>
        </View>
    );
};

export default RecipeDetails;

const styles = StyleSheet.create({});
