import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { Card } from 'react-native-paper';
import { pessoa } from '../data/pessoa';

export default function Pessoas(){
    return(
        <ScrollView>
            <View style={styles.container}>
              {pessoa.map((pessoa =>(
              <Card>
                <Card.Cover source={{ uri: pessoa.image}}/>
                <Card.Content style={styles.cards}>
                  <Text style={styles.txt}>{pessoa.nome}</Text>
                  <Text style={styles.txt}>{pessoa.idade}</Text>
                  <Text style={styles.txt}>{pessoa.cidade}</Text>
                  <Text style={styles.txt}>{pessoa.profissao}</Text>
                </Card.Content>
              </Card>
              )))}
            </View>
            </ScrollView>
    )
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