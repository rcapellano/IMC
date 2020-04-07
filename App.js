import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";


export default function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState(0)

const calcular = () => setResultado(peso/(altura*altura))

  return (
    <View style={styles.container}>
      <View style={styles.entradas}>
        <TextInput 
          placeholder="Peso"
          onChangeText={val => setPeso(val)} e value={peso}
          keyboardType="numeric"
          style={styles.input}
        />
        
       
        <TextInput
          placeholder="Altura"
          onChangeText={val => setAltura(val)} e value={altura}
          keyboardType="numeric"
          style={styles.input}
        />

      </View>
      <TouchableOpacity style={styles.botao} onPress={calcular}>
        <Text style={styles.botaoTexto}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>{resultado.toFixed(2)}</Text>
      <Text style={[styles.resultado, {fontSize:40}]}></Text>
      
   </View>
  );
}
//Menos do que 18,5	Abaixo do peso
//Entre 18,5 e 24,9	Peso normal
//Entre 25 e 29,9	Sobrepeso
//Entre 30 e 34,9	Obesidade grau 1
//Entre 35 e 39,9	Obesidade grau 2
//Mais do que 40	Obesidade grau 3


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  entradas: {
flexDirection: 'row',
  },

  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 24,
  },
  botao: {
   backgroundColor: 'green',
  },

  botaoTexto:{
    alignSelf: 'center',
    padding: 30,
    fontSize: 25 ,
    color: 'white',
    fontWeight: 'bold'
  },

  resultado:{
    alignSelf: 'center',
    color: 'red',
    fontSize: 65,
    padding: 15,
  },
});
