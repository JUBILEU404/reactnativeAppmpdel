import React ,{ useState }from 'react'
import { StyleSheet, Text, View, Image, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const DFP5 = () => {
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
<Text style={styles.text} >5--Qual filme dos Vingadores apresenta a batalha de Nova York?</Text>
           <br />
            <View style= {styles.buttons}>
            <Button 
            onPress={() => {mostrarMensagem(false)}}
            title="Vingadores: Era de Ultron (2015)"
            color="#ff0000"
            
            /> 
            <Button 
            onPress={() => {
            mostrarMensagem(true)}}
            title="Os Vingadores (2012)"
            color="#ff0000"
            />
            <Button 
            onPress={() => {mostrarMensagem(false)}}
            title="Vingadores: Guerra Infinita (2018)."
            color="#ff0000"
            /> 
            <Button 
            onPress={() =>{mostrarMensagem(false);}}
            title=" Vingadores: Ultimato (2019"
            color="#ff0000"
            /> 
            
            </View>
            {mensagem && <Text>{mensagem}</Text>}
        </View>
    )
}

export default DFP5

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
