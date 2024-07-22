import {FlatList, StyleSheet, Text, View, Image} from "react-native";
import React from "react";
import {colors, recipeList} from "../Constant";


const RecipeCard = ({headerText, headerIcon}) =>{
    return (
        <View>
            <FlatList
                data={recipeList}
                renderItem={({ item }) =>
                    <View style={{
                        backgroundColor: colors.COLOR_LIGHT,
                        shadowColor:"#000",
                        shadowOffset:{width:0, height:4},
                        shadowOpacity:0.1,
                        shadowRadius:7,
                        borderRadius: 16,
                        marginVertical:16,
                        alignItems: "center",
                        paddingHorizontal: 8,
                        paddingVertical: 26,

                    }}>
                        <Image
                            source={item.image}
                                style ={{width:150, height:150, resizeMode: "center"}}/>
                        <Text>{item.name}</Text>
                    </View>
                    }
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent:"space-between",
                }}
                showsVerticalScrollIndicator={false}
                />
            </View>
    );
};

export default RecipeCard;

const styles = StyleSheet.create({});
