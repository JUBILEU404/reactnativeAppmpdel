import React ,{ useState }from 'react'
import { StyleSheet, Text, View, Image, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const DFP3 = () => {
    const [mensagem, setMensagem] = useState(null);

    const mostrarMensagem = (respostaCorreta) => {
        if (respostaCorreta) {
            setMensagem(alert("voce acertou a pegunta"), navigation.navigate("Dificil Pegunta 4"));
        } else {
            setMensagem(alert("voce errou a pegunta"), navigation.navigate("Dificil Pegunta 4"));
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
<Text style={styles.text} >3-  Qual destes filmes ganhou o Oscar de Melhor Filme em 1994?</Text>
           <br />
            <View style= {styles.buttons}>
            <Button 
            onPress={() => {mostrarMensagem(false)}}
            title="Titanic"
            
            
            /> 
            <Button 
            onPress={() => {
            mostrarMensagem(true)}}
            title=" Forrest Gump"
            
            />
            <Button 
            onPress={() => {mostrarMensagem(false)}}
            title=" O Pianista"
            
            /> 
            <Button 
            onPress={() =>{mostrarMensagem(false);}}
            title="O Silêncio dos Inocentes"
            
            /> 
            
            </View>
            {mensagem && <Text>{mensagem}</Text>}
        </View>
    )
}

export default DFP3

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
