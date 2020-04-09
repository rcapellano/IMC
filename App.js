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

const situacao = imc => {
  if (imc <= 16) {
      return 'Subpeso Severo'
  } else if (imc <= 19.9) {
      return 'Subpeso'
  } else if (imc <= 24.9) {
  return 'Normal'
} else if (imc <= 29.9) {
  return 'Sobrepeso'
  } else if (imc <= 39.9) {
  return 'Obeso'
  } else if (imc > 40) {
  } return 'Obeso Mórbido'
};

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
           <Text style={styles.condicaoText}>{situacao(resultado)}</Text>
      </View>
  );
}


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
  
  condicaoText: {
flex: 1,
justifyContent: 'center',
alignSelf: 'center',
color: 'black',
fontSize: 50,
  },

});
