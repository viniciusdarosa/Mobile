// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
// import Profile from './components/Profile';
// import { Person, Vini } from './components/Profile';
import { useState } from 'react';
import { Card } from 'react-native-paper';
import { drivers } from '../data/drivers';

export default function Home() {

  const [mensagem, setMensagem] = useState('Ohayo')
  const [contador, setContador] = useState(0)

  function TrocaMensagem(){
    if (mensagem == 'Ohayo'){
      setMensagem('OI PORRA, trocamdo')
    } else {
      setMensagem('Ohayo')
    }
  } 

  function Adicionar(){
    setContador(contador + 1)
  }

  function Diminuir(){
    if (contador>0){
    setContador(contador - 1)}
  } 

  // const motoristas = drivers[0]

  return (
    <ScrollView>
    <View style={styles.container}>
      {drivers.map((drivers =>(
      <Card>
        <Card.Cover source={{ uri: drivers.image}}/>
        <Card.Content style={styles.cards}>
          <Text style={styles.txt}>{drivers.name}</Text>
          <Text style={styles.txt}>{drivers.description}</Text>
          <Text style={styles.txt}>{drivers.team}</Text>
          <Text style={styles.txt}>{drivers.country}</Text>
          <Text style={styles.txt}>{'👽'.repeat(drivers.stars)}</Text>
        </Card.Content>
      </Card>
      )))}
    </View>
    </ScrollView>
    // <View style={styles.container}>
    //   <Text style={styles.txt}>{mensagem}</Text>
    //   <Button buttonColor='#ff0303ff' mode='contained' onPress={TrocaMensagem}>Clique aqui</Button>
    //   <Text style={styles.txt}>{contador}</Text>
    //   <View style={styles.butus}>
    //     <Button mode='contained' onPress={Adicionar}>Adicionar</Button>
    //     <Button mode='contained' onPress={Diminuir}>Diminuir</Button>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
 container: {
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#ffff'
   },
   txt: {
    fontSize : 25,
    textAlign: 'center',
   },
   butus: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
   },
   img: {
    width: 250,
    height: 250,
   },
   cards: {
    alignItems: 'center',
    textAlign: 'center',
   }
})
;
