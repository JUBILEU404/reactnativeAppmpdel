import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'
const FP2 = () => {
    const [mensagem, setMensagem] = useState(null);

    const mostrarMensagem = (respostaCorreta) => {
        if (respostaCorreta) {
            setMensagem("Resposta correta!");
        } else {
            setMensagem("Resposta incorreta!");
        }
    }
    navigation = useNavigation()
    return (
        <View style={styles.body}>
            <Text>A primeira exibição de um filme de curta duração aconteceu em qual ano?</Text>
            
            <View>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://campinas.com.br/wp-content/uploads/2023/09/pipoca-no-cinema-com-almofada-no-chao-scaled-e1695841582534.jpg',
                    }}
                />
            </View>
            
            <View style={styles.buttons}>
                <Button
                    onPress={() => mostrarMensagem(false)}
                    title="1886"
                />
                <Button
                    onPress={() => mostrarMensagem(false)}
                    title="1900"
                />
                <Button
                    onPress={() => mostrarMensagem(false)}
                    title="1905"
                />
                <Button
                    onPress={() => mostrarMensagem(true)}
                    title="1895"
                />
            </View>
            {mensagem && <Text>{mensagem}</Text>}
        </View>
    )
}

export default FP2;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttons: {
        
    },
    tinyLogo: {
        width: 200,
        height: 200,
    },
});
