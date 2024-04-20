import React ,{ useState }from 'react'
import { StyleSheet, Text, View, Image, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const FFP5 = () => {
    const [mensagem, setMensagem] = useState(null);

    const mostrarMensagem = (respostaCorreta) => {
        if (respostaCorreta) {
            setMensagem(alert("voce acertou a pegunta"), navigation.navigate("Home"));
        } else {
            setMensagem(alert("voce errou a pegunta"), navigation.navigate("Home"));
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
<Text style={styles.text} >5-Qual é o nome do robô carismático em "Wall-E" (2008)?</Text>
           <br />
            <View style= {styles.buttons}>
            <Button 
            onPress={() => {mostrarMensagem(false)}}
            title="BB-8"
            
            
            /> 
            <Button 
            onPress={() => {
            mostrarMensagem(true)}}
            title="WALL-E"
            
            
            />
            <Button 
            onPress={() => {mostrarMensagem(false)}}
            title="R2-D2"
            
            /> 
            <Button 
            onPress={() =>{mostrarMensagem(false);}}
            title="EVE"
            
            /> 
            
            </View>
            {mensagem && <Text>{mensagem}</Text>}
        </View>
    )
}

export default FFP5

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
