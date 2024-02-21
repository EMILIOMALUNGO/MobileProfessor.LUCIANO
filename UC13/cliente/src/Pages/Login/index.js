
import { useEffect,useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

import apiCliente from '../API/apiCliente';


export default function Login() {
   const navigation=useNavigation()


 // const [nome,setNome] = useState ("")
  const [email, setEmail ] = useState(" ")
  const [password, setPassword]= useState('')

  async function Buscarusuari(){
    if (!email || !password) {
   
     return
     }
  
    try{
      const response = await apiCliente.post('/LoginCliente',{
        email,password
       })
       console.log(email,password)
       await AsyncStorage.setItem('@id', JSON.stringify(response.data.id))
       await AsyncStorage.setItem('@nome', JSON.stringify(response.data.nome))
       await AsyncStorage.setItem('@token', JSON.stringify(response.data.token))

       navigation.navigate("Dashboard")
       
     } catch (err) {
       alert(err.response.data.error)
     return
  }
       
  }
  async function handleCadastrar() {
    navigation.navigate("Cadastro")
}



  async function handleAsyncApagar(){
    await AsyncStorage.clear();
  }


  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.Text}>Login Cliente</Text>
      </View>

      <View style={styles.container2} >
        <TextInput style={styles.input1} placeholderTextColor='#fff'  placeholder='Digita email' value={email} onChangeText={setEmail}/>
      </View>
        
      <View style={styles.container2}>
        <TextInput style={styles.input1} placeholderTextColor='#fff' placeholder='Digita a sua senha' value={password} onChangeText={setPassword}/>
      </View>
      
      <TouchableOpacity style={styles.botao} onPress={Buscarusuari}>
        <Text style={styles.botao1}>Enviar</Text>
      </TouchableOpacity>
         
        </View>
 
   
  );
}

const styles = StyleSheet.create({
  container: {
   marginTop:100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text:{
    fontSize:20
  },
  container2:{
    width:'90%',
  },
  input1:{
    padding:10,
    margin:5,
    borderColor:1,
    backgroundColor:"#00ff19",
    borderRadius:5,
    textAlign:'center',
    fontSize:20

  },
  botao:{
    width:'90%',
     
  },
  botao1:{
    padding:10,
    margin:5,
    borderColor:1,
    backgroundColor:"#002cff",
    borderRadius:10,
    textAlign:'center',
    fontSize:20 ,
    color:"#fff"   
  },
  botao2:{
    padding:10,
    margin:5,
    borderColor:1,
    backgroundColor:"#9734ff",
    borderRadius:10,
    textAlign:'center',
    fontSize:20 ,
    color:"#fff" 
  }
});