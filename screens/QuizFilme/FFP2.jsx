import React ,{ useState }from 'react'
import { StyleSheet, Text, View, Image, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const FFP2 = () => {
    const [mensagem, setMensagem] = useState(null);

    const mostrarMensagem = (respostaCorreta) => {
        if (respostaCorreta) {
            setMensagem(alert("voce acertou a pegunta"), navigation.navigate("Facil Pegunta 3"));
        } else {
            setMensagem(alert("voce errou a pegunta"), navigation.navigate("Facil Pegunta 3"));
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
<Text style={styles.text} >2- Qual filme de animação da Disney é baseado na história de um jovem leão que enfrenta desafios para se tornar rei?</Text>
           <br />
            <View style= {styles.buttons}>
            <Button 
            onPress={() => {mostrarMensagem(false)}}
            title="Aladdin"
            
            
            /> 
            <Button 
            onPress={() => {
            mostrarMensagem(false)}}
            title=" A Bela e a Fera"
            
            />
            <Button 
            onPress={() => {mostrarMensagem(true)}}
            title="O Rei Leão"
            
            /> 
            <Button 
            onPress={() =>{mostrarMensagem(false);}}
            title="Mulan"
            
            /> 
            
            </View>
            {mensagem && <Text>{mensagem}</Text>}
        </View>
    )
}

export default FFP2

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
