import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Login from "../Pages/Login";

import Cadastro from "../Pages/Cadastro";

const Stack = createNativeStackNavigator();

export default function Routes(){
    
return(
      
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}  options={{ headerShown: false}}/>
          
            <Stack.Screen name="Cadastro" component={Cadastro}  options={{ headerShown: false}}/>
        </Stack.Navigator>
   
)
}