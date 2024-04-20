import React ,{ useState }from 'react'
import { StyleSheet, Text, View, Image, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const FFP1 = () => {
    const [mensagem, setMensagem] = useState(null);

    const mostrarMensagem = (respostaCorreta) => {
        if (respostaCorreta) {
            setMensagem(alert("voce acertou a pegunta"), navigation.navigate("Facil Pegunta 2"));
        } else {
            setMensagem(alert("voce errou a pegunta"), navigation.navigate("Facil Pegunta 2"));
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
<Text style={styles.text} >1- Quem interpretou o papel de Tony Stark / Homem de Ferro no Universo Cinematográfico Marvel?</Text>
           <br />
            <View style= {styles.buttons}>
            <Button 
            onPress={() => {mostrarMensagem(false)}}
            title="Chris Evans"
            
            
            /> 
            <Button 
            onPress={() => {
            mostrarMensagem(false)}}
            title="Mark Ruffalo"
            
            />
            <Button 
            onPress={() => {mostrarMensagem(true)}}
            title="Robert Downey Jr."
            
            /> 
            <Button 
            onPress={() =>{mostrarMensagem(false);}}
            title="Chris Hemsworth"
            
            /> 
            
            </View>
            {mensagem && <Text>{mensagem}</Text>}
        </View>
    )
}

export default FFP1

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
