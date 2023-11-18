import React from "react";
import { SafeAreaView, Text } from "react-native";
import Button from "../components/Button";
import { StyleSheet } from "react-native";

function Welcome({navigation}){

    function gotoCreateRegistry(){
        navigation.navigate('CreateRegistry');
    }
 return(
    <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Sweet Spor Salonu</Text>
        <Button text='Üye Kaydı Oluştur' onPress={gotoCreateRegistry}/>
    </SafeAreaView>
 );
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    header:{
        alignContent:'center',
        fontWeight:'bold',
        fontSize:30,
        textAlign:'center',
        color:'black'
    }
})

export default Welcome;