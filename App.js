import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View, Switch, TextInput } from 'react-native';
import styles from './globalStyles';

export default function App() {
  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState(false);
  const [peso, setPeso] = useState('');

  const calcular = () => {
    if (sexo === false) {
      let h = parseInt(altura);
      setPeso(((h - 100) - [(h - 150) / 4]) + 'Kg');
    } else if (sexo === true) {
      let h = parseInt(altura);
      setPeso(((h - 100) - [(h - 150) / 2]) + 'Kg');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.vidro}>
          <Text style={[styles.title, { color: '#333' }]}>Peso ideal</Text>
          <Text style={[styles.textoSimples, { color: '#555' }]}>Altura</Text>
          <View style={styles.viewInput}>
            <TextInput
              value={altura}
              onChangeText={setAltura}
              style={[styles.input, { color: '#555' }]}
              keyboardType='numeric'
            />
          </View>
          <Text style={[styles.textoSimples, { color: '#555' }]}>Sexo</Text>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={[styles.homem, { color: '#666' }]}>Homem</Text>
            <Switch
              trackColor={{ false: '#999', true: '#ccc' }}
              thumbColor={sexo ? '#666' : '#333'}
              ios_backgroundColor="#333"
              onValueChange={setSexo}
              value={sexo}
            />
            <Text style={[styles.mulher, { color: '#666' }]}>Mulher</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 15 }}>
            <Pressable
              style={!sexo ? styles.botao : styles.botao2}
              onPress={() => calcular()}
            >
              <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Calcular</Text>
            </Pressable>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#000', fontWeight: 'bold' }}>{`${peso}`}</Text>
            </View>
          </View>
          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
}
