import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createDrawerNavigator } from "@react-navigation/drawer";



import Login from "../pages/Login/index";
import Dashboard from '../pages/Dashboard/index';
import Produto  from '../pages/Produto/index'


const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()

export default function Routes(){

    return(
        <Drawer.Navigator>
           <Drawer.Screen name="Login" component={Login } />
           <Drawer.Screen name="Dashboard" component={Dashboard } />
           <Drawer.Screen name="Produto" component={Produto } /> 

        </Drawer.Navigator>
    )
}