import React ,{ useState }from 'react'
import { StyleSheet, Text, View, Image, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const FFP3 = () => {
    const [mensagem, setMensagem] = useState(null);

    const mostrarMensagem = (respostaCorreta) => {
        if (respostaCorreta) {
            setMensagem(alert("voce acertou a pegunta"), navigation.navigate("Facil Pegunta 4"));
        } else {
            setMensagem(alert("voce errou a pegunta"), navigation.navigate("Facil Pegunta 4"));
        }
    }
    navigation = useNavigation()
    return (
        <View style= {styles.body}>
            
        <View>
            <Image
            style={styles.tinyLogo}
            source={{
            uri: 'https://campinas.com.br/wp-content/uploads/2023/09/pipoca-no-cinema-com-almofada-no-chao-scaled-e1695841582534.jpg',
            }}/>
        </View>

<br/>
<Text style={styles.text} >3-Qual filme de animação da Pixar segue as aventuras de um ratinho chamado Linguini em uma cozinha francesa?</Text>
           <br />
            <View style= {styles.buttons}>
            <Button 
            onPress={() => {mostrarMensagem(false)}}
            title=" Up - Altas Aventuras"
            color="#ff0000"
            
            /> 
            <Button 
            onPress={() => {
            mostrarMensagem(false)}}
            title="Procurando Nemo"
            color="#ff0000"
            />
            <Button 
            onPress={() => {mostrarMensagem(true)}}
            title="Ratatouille"
            color="#ff0000"
            /> 
            <Button 
            onPress={() =>{mostrarMensagem(false);}}
            title="Os Incríveis"
            color="#ff0000"
            /> 
            
            </View>
            {mensagem && <Text>{mensagem}</Text>}
        </View>
    )
}

export default FFP3

const styles = StyleSheet.create({
    body: {
        flex: 1, 
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'black'
     },
     
     tinyLogo: {
        width: 200,
        height: 200,},
       
 text: {
    color: 'white'
 }
       
})
