import {useEffect, useState} from "react";
import {
    Text,
    View,
    StyleSheet,
    Platform
} from "react-native";
import {Button} from "../../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colorPallete from "../../constants/colors";
import RNRestart from 'react-native-restart';

export default function WinScreen({ navigation }) {
    const [correctAnswer, setCa] = useState('');
    const [totalGuesses, setTg] = useState('');
    const [gameStatus, setGs] = useState('');

    /*let correctAnswer = '';
    let totalGuesses = '';*/

    const getData = async () => {
        try {
            const valueAnswer = await AsyncStorage.getItem('correctAnswer');
            const valueGuesses = await AsyncStorage.getItem('totalGuesses');
            const valueStatus = await AsyncStorage.getItem('gameStatus');
            if(valueAnswer !== null && valueGuesses !== null && valueStatus !== null) {
                setCa(valueAnswer);
                setTg(valueGuesses);
                setGs(valueStatus);
            }
        } catch(e) {
            // error reading value
        }
    }
    useEffect(() => {
        getData();
    },[])

    return (
       <View style={styles.container}>
           <Text style={styles.text}>
               {gameStatus === 'won' ? 'CONGRATULATIONS. YOU WON!!!!' : 'SORRY, YOU LOST'};
           </Text>
           <Text style={styles.text}>
               Correct Answer:
               <Text style={styles.correct}>
                   {` ${correctAnswer}`}
               </Text>

           </Text>
           <Text style={styles.text}>
               Total Guesses:
               <Text style={styles.wrongLocation}>
                   {` ${totalGuesses}`}
               </Text>
           </Text>
           {Platform.OS === 'web' ? (
               <Button text={'TEMPORARY BUTTON TO RESET APP'} onPress={() => {
                   AsyncStorage.clear();
                   window.location.reload();
               }}/>
           ): null}

       </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: colorPallete.darkGrey
    },
    text: {
        fontSize: 20,
        fontWeight:'900',
        alignSelf: 'flex-start',
        color: colorPallete.textLight
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: colorPallete.grey,
        borderRadius: 6,
        marginTop: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        color: colorPallete.black
    },
    correct: {
        color: 'green'
    },
    wrongLocation: {
        color: 'orange',
    },
    wrong: {
        color: 'red'
    }
});