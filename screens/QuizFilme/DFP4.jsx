import React ,{ useState }from 'react'
import { StyleSheet, Text, View, Image, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const DFP4 = () => {
    const [mensagem, setMensagem] = useState(null);

    const mostrarMensagem = (respostaCorreta) => {
        if (respostaCorreta) {
            setMensagem(alert("voce acertou a pegunta"), navigation.navigate("Dificil Pegunta 5"));
        } else {
            setMensagem(alert("voce errou a pegunta"), navigation.navigate("Dificil Pegunta 5"));
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
<Text style={styles.text} >4- Qual é o nome do ator que interpretou Batman no filme "Batman Begins" (2005)?</Text>
           <br />
            <View style= {styles.buttons}>
            <Button 
            onPress={() => {mostrarMensagem(true)}}
            title="Christian Bale"
            color="#ff0000"
            
            /> 
            <Button 
            onPress={() => {
            mostrarMensagem(false)}}
            title="Ben Affleck"
            color="#ff0000"
            />
            <Button 
            onPress={() => {mostrarMensagem(false)}}
            title="Michael Keaton"
            color="#ff0000"
            /> 
            <Button 
            onPress={() =>{mostrarMensagem(false);}}
            title=" George Clooney"
            color="#ff0000"
            /> 
            
            </View>
            {mensagem && <Text>{mensagem}</Text>}
        </View>
    )
}

export default DFP4

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
