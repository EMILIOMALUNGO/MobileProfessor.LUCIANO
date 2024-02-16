import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/Routes/routes';

export default function App() {
  return (

      <NavigationContainer>
      
         <Routes />
      <StatusBar  backgroundColor='#FF7E01' barStyle='light-content' translucent={false} />
      </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
