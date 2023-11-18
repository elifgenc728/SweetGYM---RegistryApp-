import { SafeAreaView,Text, View } from "react-native";
import InputStyle from "../components/Input/InputStyle";
import {StyleSheet} from 'react-native'

function MemberHomePage({ route }) {
    const {user} = route.params;

    return (
        <SafeAreaView >
            <Text style={styles.message_text}>- Kayıt bilgileriniz aşağıdaki alanda yer almaktadır.</Text>
            <View style={styles.container}>
            <Text style={styles.text}>Üye Adı: { user.name}</Text>
            <Text style={styles.text}>Üye Soyadı: {user.surname }</Text>
            <Text style={styles.text}>Üye Yaş: { user.age}</Text>
            <Text style={styles.text}>Üye E-posta: {user.mail }</Text>
            <Text style={styles.text}>Üye Telefon Numarası: {user.phone }</Text>
            </View>
           

        </SafeAreaView>
    )

}
export default MemberHomePage;

const styles= StyleSheet.create({
    container:{
        padding:10,
        margin:20,
        borderWidth:2,
        borderRadius:20,
        borderColor:"#bdbdbd"
    },
    text:{
        fontSize:20,
        fontWeight:'600',
        color:'black',
        padding:10
    },
    message_text:{
        fontSize:16,
        fontWeight:'400',
        padding:15,
        paddingTop:25,
        color:'black'
    }
})