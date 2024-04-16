import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack' 
import ModelScreen from './screens/ModelScreen';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import GeneralQuizScreen from './screens/GeneralQuizScreen';
import FilmesScreen from './screens/FilmesScreen';
import FP1 from './screens/FP1';
import FP2 from './screens/FP2';
import FP3 from './screens/FP3';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Model' component={ModelScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Sobre' component={AboutScreen} />
        <Stack.Screen name='GeneralQuiz' component={GeneralQuizScreen} />
        <Stack.Screen name='Filmes' component={FilmesScreen} />
        <Stack.Screen name='Pegunta1' component={FP1} />
        <Stack.Screen name='Pegunta2' component={FP2} />
        <Stack.Screen name='Pegunta3' component={FP3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
