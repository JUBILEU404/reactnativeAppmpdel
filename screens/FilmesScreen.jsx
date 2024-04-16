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
                title='Pegunta 1'
                onPress={() => {navigation.navigate("Pegunta1")}}
                />
                <Button
                title='Pegunta 2'
                onPress={() => {navigation.navigate("Pegunta2")}}
                />
                <Button
                title='Pegunta 3'
                onPress={() => {navigation.navigate("Pegunta3")}}
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