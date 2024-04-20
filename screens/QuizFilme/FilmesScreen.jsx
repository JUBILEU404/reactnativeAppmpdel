import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const FilmesScreen = ({navigation}) => {
    navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem vindo ao Quiz de Filmes!</Text>
            <Text style={styles.text}>Selecione uma das Peguntas abaixo</Text>
            <View>
            <Button
                title='Facil'
                onPress={() => {navigation.navigate("Facil Pegunta 1")}}
                />
                <Button
                title='Dificil'
                onPress={() => {navigation.navigate("Dificil Pegunta 1")}}
                />
               
              
            </View>
        </View>
    )
}

export default FilmesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        alignItens: 'center'
    },
    text: {
        fontSize: '1.5em',
        textAlign: 'center'
    }
})