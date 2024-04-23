import React ,{ useState }from 'react'
import { StyleSheet, Text, View, Image, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const FFP4 = () => {
    const [mensagem, setMensagem] = useState(null);

    const mostrarMensagem = (respostaCorreta) => {
        if (respostaCorreta) {
            setMensagem(alert("voce acertou a pegunta"), navigation.navigate("Facil Pegunta 5"));
        } else {
            setMensagem(alert("voce errou a pegunta"), navigation.navigate("Facil Pegunta 5"));
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
<Text style={styles.text} >4- Quem interpretou o papel de Jack Dawson em "Titanic" (1997)?</Text>
           <br /> <br />
            <View style= {styles.buttons}>
            <Button 
            onPress={() => {mostrarMensagem(false)}}
            title="Tom Cruise"
            color="#ff0000"
            
            
            /> 
            <Button 
            onPress={() => {
            mostrarMensagem(true)}}
            title=" Leonardo DiCaprio"
            color="#ff0000"

            />
            <Button 
            onPress={() => {mostrarMensagem(false)}}
            title=" Brad Pitt"
            color="#ff0000"

            /> 
            <Button 
            onPress={() =>{mostrarMensagem(false);}}
            title="Johnny Depp"
            color="#ff0000"
            /> 
            
            </View>
            {mensagem && <Text>{mensagem}</Text>}
        </View>
    )
}

export default FFP4

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
