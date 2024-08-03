import {ScrollView, Image, Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {FontAwesome} from "@expo/vector-icons";

const RecipeDetails = ({navigation, route}) =>{
    const { item }= route.params;

    console.log(item);
    return (
        <ScrollView style={{backgroundColor:item.color, flex:1,}}>
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
                    marginTop:100,
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
                {/*Recipe Extra details*/}
                <View
                    style={{
                        flexDirection:"row",
                        justifyContent:"space-between",
                        width:"100%",
                        //backgroundColor:"green"
                }}>
                    <View
                        style={{
                            backgroundColor:"rgba(255, 165, 0, 0.48)",
                            paddingHorizontal:16,
                            paddingVertical:26,
                            borderRadius:8,
                            alignItems:"center",
                        }}>
                        <Text style={{fontSize:40}}>⏰</Text>
                        <Text style={{fontSize:20, fontWeight:400}}>{item.time}</Text>

                    </View>
                    <View
                        style={{
                            backgroundColor:"rgba(255, 0, 0, 0.38)",
                            paddingHorizontal:16,
                            paddingVertical:26,
                            borderRadius:8,
                            alignItems:"center",
                        }}>
                        <Text style={{fontSize:40}}>🍽</Text>
                        <Text style={{fontSize:20, fontWeight:400}}>{item.difficulty}</Text>

                    </View>
                    <View
                        style={{
                            backgroundColor:"rgba(135, 206, 235, 0.8)",
                            paddingHorizontal:16,
                            paddingVertical:26,
                            borderRadius:8,
                            alignItems:"center",
                        }}>
                        <Text style={{fontSize:40}}>🔥</Text>
                        <Text style={{fontSize:20, fontWeight:400}}>{item.calories}</Text>

                    </View>

                </View>
                {/*Recipe ingredients*/}
                <View style={{alignSelf:"flex-start", marginVertical:22}}>
                    <Text style={{fontSize:22, fontWeight:"600", marginBottom:6}}>Ingredients:</Text>
                    {item.ingredients.map((ingredient)=>{
                        return(
                        <View
                            style={{
                                flexDirection:"row",
                                alignItems:"center",
                                marginVertical:4,
                            }}>
                            <View
                                style={{
                                    backgroundColor:"red",
                                    height:10,
                                    width:10,
                                    borderRadius:5
                            }}>
                            </View>
                            <Text
                                style={{
                                    fontSize:18,
                                    marginLeft:6 }}>
                                {ingredient}
                            </Text>
                        </View>
                        );
                    })}

                </View>

                {/*Recipe Steps*/}
                <View style={{alignSelf:"flex-start", marginVertical:22}}>
                    <Text style={{fontSize:22, fontWeight:"600", marginBottom:6}}>Steps:</Text>
                    {item.steps.map((step, index)=>{
                        return(
                            <View
                                style={{
                                    flexDirection:"row",
                                    alignItems:"center",
                                    marginVertical:4,
                                }}>
                                {/*<View
                                    style={{
                                        backgroundColor:"green",
                                        height:10,
                                        width:10,
                                        borderRadius:5
                                    }}>
                                </View>*/}
                                <Text
                                    style={{
                                        fontSize:18,
                                        marginLeft:6,
                                        marginVertical:4
                                }}>
                                    {`${index+1})${step}`}
                                </Text>
                            </View>
                        );
                    })}

                </View>

            </View>

        </ScrollView>
    );
};

export default RecipeDetails;

const styles = StyleSheet.create({});
