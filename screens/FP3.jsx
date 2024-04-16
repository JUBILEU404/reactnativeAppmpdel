import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const FP3 = () => {
    const [mensagem, setMensagem] = useState(null);

    const mostrarMensagem = (respostaCorreta) => {
        if (respostaCorreta) {
            setMensagem("Resposta correta!");
        } else {
            setMensagem("Resposta incorreta!");
        }
    }

    return (
        <View style={styles.body}>
            <Text>A primeira premiação do Oscar ocorreu em qual ano?</Text>
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
            <View style={styles.buttons}>
                <Button
                    onPress={() => mostrarMensagem(true)}
                    title="1929"
                />
                <Button
                    onPress={() => mostrarMensagem(false)}
                    title="1920"
                />
                <Button
                    onPress={() => mostrarMensagem(false)}
                    title="1935"
                />
                <Button
                    onPress={() => mostrarMensagem(false)}
                    title="1942"
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
