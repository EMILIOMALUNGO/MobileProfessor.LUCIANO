import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'


import { useNavigation } from '@react-navigation/native'




export default function Login(){
    const navigation = useNavigation()
 return(
    <View>
         <Text> VAMO</Text>
         <TouchableOpacity onPress={() => navigation.navigate("Dashiboard")}>
                <Text style={styles.tela1}>Dashiboard</Text>
            </TouchableOpacity>
    </View>
 )

}
const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
   tela1:{
      
   }
 });