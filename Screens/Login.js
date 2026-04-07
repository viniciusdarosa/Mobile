import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <TextInput placeholder="Email" style={styles.txtInput} />
            <TextInput placeholder="Password" style={styles.txtInput} />

            <Button title="Login" 
            onPress={() => navigation.navigate('Home')}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
    txtInput: {
        borderColor: '#808080ff',
        width: '60%',
        height: 40,
    }
});
 