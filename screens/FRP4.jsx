import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'
const FP3 = () => {
    const [mensagem, setMensagem] = useState(null);

    const mostrarMensagem = (respostaCorreta) => {
        if (respostaCorreta) {
            setMensagem(alert("voce Acertou a pegunta"), navigation.navigate("Pegunta5"));
        } else {
            setMensagem(alert("voce errou a pegunta"), navigation.navigate("Pegunta5"));
        }
    }
    navigation = useNavigation()
    return (
        <View style={styles.body}>
            
            <br/>
            <View>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://campinas.com.br/wp-content/uploads/2023/09/pipoca-no-cinema-com-almofada-no-chao-scaled-e1695841582534.jpg',
                    }}
                />
            </View>
            <br/>
            <Text>Quem dirigiu o filme de animação de 2003, "Procurando Nemo", que segue a jornada de um peixe-palhaço em busca de seu filho perdido?</Text>
            <br/>
            <View style={styles.buttons}>
                <Button
                    onPress={() => mostrarMensagem(true)}
                    title="Andrew Stanton"
                />
                <Button
                    onPress={() => mostrarMensagem(false)}
                    title="Maicon jakcson"
                />
                <Button
                    onPress={() => mostrarMensagem(false)}
                    title="Justin biber"
                />
                <Button
                    onPress={() => mostrarMensagem(false)}
                    title="hitler"
                />
            </View>
            {mensagem && <Text>{mensagem}</Text>}
        </View>
    )
}

export default FP3;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tinyLogo: {
        width: 200,
        height: 200,
    },
    buttons: {
        
    },
});
