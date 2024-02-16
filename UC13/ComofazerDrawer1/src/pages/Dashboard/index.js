import React from "react";
import { View,Text,TouchableOpacity} from "react-native";

import { useNavigation } from "@react-navigation/native";



export default function Dashboard(){
    const navigation = useNavigation()

    return(
        <View>
            <Text>Dashboard</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Dashiboard")}>
                <Text style={styles.tela1}>Dashiboard</Text>
            </TouchableOpacity>
        </View>
    )
}