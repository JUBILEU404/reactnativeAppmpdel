import React from 'react';
import { View, Text } from 'react-native';

const Person = (props) => {
  const { preco, marca, nomeMD, system, tecno, ficha, } = props;

  return (
    <View>
      <h2>Apple iPhone 15 Pro Max (512 GB) — Titânio Azul</h2>
      <h4>Valor: {preco} </h4>
      <Text>Marca: {marca}</Text>
      <Text>Nome do modelo: {nomeMD}</Text>
      <Text>Sistema operacional {system}</Text>
      <Text>Tecnologia celular: {tecno}</Text>
      <Text>ficha tecnica: {ficha}</Text>
    </View>
  );
};

export default Person;