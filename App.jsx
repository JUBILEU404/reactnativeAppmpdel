import React from 'react';
import { StyleSheet, View } from 'react-native';
import Person from './Person';

export default function App() {
  return (
    <View style={styles.container}>
      <img src="./iphone15.jpg" alt="" width={250} />
      <Person preco="R$9.699,00" marca="Apple" nomeMD="iPhone 15 Pro Max" system="iOS 16" tecno="5G" ficha="Conteúdo da caixa

iPhone com iOS 17, Cabo de carregamento USB-C (1m), Documentação

Altura

159,9 mm

Largura

76,7 mm

Profundidade

8,25 mm

Peso

221 gramas

Anatel

12782-23-01993" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
});
