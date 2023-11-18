import { Alert, SafeAreaView,Text, Touchable} from "react-native";
import React,{useState} from 'react';
import Input from "../components/Input";
import Button from "../components/Button";

function CreateRegistry({navigation}){
    
const [name,setUserName]=useState(null);
const [surname, setUserSurname]=useState(null);
const [age,setUserAge]=useState(null);
const [mail,setUserMail]=useState(null);
const [phone,setUserPhone]=useState(null);
 function handleSubmit(){
    if (!name || !surname || !age || !mail || !phone ) {
        Alert.alert(title='Kayıt Başarısız!',message='Bilgiler boş bırakılamaz.')
        return;
    }
    Alert.prompt(title='Kayıt Başarılı')

    const user = {name,surname,age,mail,phone};

    navigation.navigate('MemberHomePage',{user});

 }


    return(
        <SafeAreaView>
        <Input label='Üye Adı : ' placeholder='Üyenin adını giriniz...' onChangeText={setUserName}/>
        <Input label='Üye Soyadı :' placeholder='Üyenin soyadını giriniz...' onChangeText={setUserSurname}/>
        <Input label='Üye Yaş :' placeholder='Üyenin yaşını giriniz...' onChangeText={setUserAge}/>
        <Input label='Üye E-posta :' placeholder='Üyenin e-posta adresini giriniz...' onChangeText={setUserMail}/>
        <Input label='Üye Telefon Numarası :' placeholder='Üyenin telefon numarasını giriniz...' onChangeText={setUserPhone}/>
       <Button style text='Üyeyi Kaydet' onPress={handleSubmit}/>
        </SafeAreaView>
    )
}
export default CreateRegistry;

