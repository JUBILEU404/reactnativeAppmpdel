import React ,{ useState }from 'react'
import { StyleSheet, Text, View, Image, Button} from 'react-native'

const FP1 = () => {
    const [mensagem, setMensagem] = useState(null);

    const mostrarMensagem = (respostaCorreta) => {
        if (respostaCorreta) {
            setMensagem("Resposta correta!");
        } else {
            setMensagem("Resposta incorreta!");
        }
    }
    return (
        <View style= {styles.body}>
            <Text >A primeira ixibição de um filme de curta duração aconteu em qual pais é cidade?</Text>
<br/>

        <View>
            <Image
            style={styles.tinyLogo}
            source={{
            uri: 'https://campinas.com.br/wp-content/uploads/2023/09/pipoca-no-cinema-com-almofada-no-chao-scaled-e1695841582534.jpg',
            }}/>
        </View>

<br/>

            <View style= {styles.buttons}>
            <Button 
            onPress={() => mostrarMensagem(false)}
            title="Bordéus"
            /> 
            <Button 
             onPress={() => mostrarMensagem(true)}
            title=" Paris"
            />
            <Button 
            onPress={() => mostrarMensagem(false)}
            title="Estrasburgo"
            /> 
            <Button 
            onPress={() => mostrarMensagem(false)}
            title="marselha"
            /> 
            
            </View>
            {mensagem && <Text>{mensagem}</Text>}
        </View>
    )
}

export default FP1

const styles = StyleSheet.create({
    body: {
        flex: 1, 
        justifyContent: 'center',
        alignItems:'center',
     },
     buttons:{
        display: 'flex',
     },
     tinyLogo: {
        width: 200,
        height: 200,}
})