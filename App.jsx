import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack' 
import ModelScreen from './screens/ModelScreen';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import GeneralQuizScreen from './screens/GeneralQuizScreen';
import FilmesScreen from './screens/QuizFilme/FilmesScreen';
import FFP1 from './screens/QuizFilme/FFP1';
import FFP2 from './screens/QuizFilme/FFP2';
import FFP3 from './screens/QuizFilme/FFP3';
import FFP4 from './screens/QuizFilme/FFP4';
import FFP5 from './screens/QuizFilme/FFP5';
import DFP1 from './screens/QuizFilme/DFP1';
import DFP2 from './screens/QuizFilme/DFP2';
import DFP3 from './screens/QuizFilme/DFP3';
import DFP4 from './screens/QuizFilme/DFP4';
import DFP5 from './screens/QuizFilme/DFP5';

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
        <Stack.Screen name='Facil Pegunta 1' component={FFP1} />
        <Stack.Screen name='Facil Pegunta 2' component={FFP2} />
        <Stack.Screen name='Facil Pegunta 3' component={FFP3} />
        <Stack.Screen name='Facil Pegunta 4' component={FFP4} />
        <Stack.Screen name='Facil Pegunta 5' component={FFP5} />
        <Stack.Screen name='Dificil Pegunta 1' component={DFP1} />
        <Stack.Screen name='Dificil Pegunta 2' component={DFP2} />
        <Stack.Screen name='Dificil Pegunta 3' component={DFP3} />
        <Stack.Screen name='Dificil Pegunta 4' component={DFP4} />
        <Stack.Screen name='Dificil Pegunta 5' component={DFP5} />
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
