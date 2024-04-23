import React ,{ useState }from 'react'
import { StyleSheet, Text, View, Image, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const DFP2 = () => {
    const [mensagem, setMensagem] = useState(null);

    const mostrarMensagem = (respostaCorreta) => {
        if (respostaCorreta) {
            setMensagem(alert("voce acertou a pegunta"), navigation.navigate("Dificil Pegunta 3"));
        } else {
            setMensagem(alert("voce errou a pegunta"), navigation.navigate("Dificil Pegunta 3"));
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
<Text style={styles.text} >2- Qual é o nome do vilão principal em "O Senhor dos Anéis: A Sociedade do Anel" (2001)?</Text>
           <br />
            <View style= {styles.buttons}>
            <Button 
            onPress={() => {mostrarMensagem(false)}}
            title=" Saruman"
            color="#ff0000"
            
            /> 
            <Button 
            onPress={() => {
            mostrarMensagem(false)}}
            title=" Gollum"
            color="#ff0000"
            />
            <Button 
            onPress={() => {mostrarMensagem(true)}}
            title=" Sauron  "
            color="#ff0000" 
            /> 
            <Button 
            onPress={() =>{mostrarMensagem(false);}}
            title="Morgoth"
            color="#ff0000"
            /> 
            
            </View>
            {mensagem && <Text>{mensagem}</Text>}
        </View>
    )
}

export default DFP2

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
