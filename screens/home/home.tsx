import {useState, useEffect, useRef} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    TextInput,
    Image
} from "react-native";
import {Button} from "../../components";
import colorPallete from "../../constants/colors";
import {GuessableLocation} from "../../constants/types";
import data from "../../constants/data";

export default function HomeScreen() {
    const [guess, setGuess] = useState('');
    const [guessHistory, setGuessHistory] = useState([]);
    const [location, setLocation] = useState<GuessableLocation>({
        location: '',
        date: '',
        answer: '',
        image: ''
    });
    const inputRef  = useRef();
    useEffect(() => {
        const today: Date = new Date()
        const yyyy: string = today.getFullYear().toString()
        const month: number = today.getMonth() + 1;
        const day: number = today.getDate();
        const mm: string = month < 10 ? '0' + month : '' + month;
        const dd: string = day < 10 ? '0' + day : '' + day;
        const fullDate = `${mm}/${dd}/${yyyy}`;
        const theLocation: GuessableLocation = data.find(location => location.date === fullDate)
        setLocation(theLocation);
        inputRef?.current?.focus();
    },[])

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                inputRef?.current?.focus();
            }}
        >
            <View style={styles.container}>
                <Image style={{width: '100%', height: '50%'}} source={{uri:location.image}}/>
                <TextInput
                    ref={inputRef}
                    style={styles.input}
                    placeholder={"Guess The Location"}
                    placeholderTextColor={'#808e9b'}
                    autoCapitalize={'characters'}
                    autoFocus={true}
                    value={guess}
                    maxLength={6}
                    editable={location.location !== ''}
                    onChangeText={(value: string) => {
                        value = value.toUpperCase();
                        setGuess(value);
                    }}
                />
                <Button
                    disabled={guess.length !== 6}
                    text={'Submit'}
                    onPress={() => {
                        const guessAccuracy = [];
                        const newGuessHistory = [];
                        for (let i = 0; i < 6; i++) {
                            if (guess[i] === location.answer[i]) {
                                guessAccuracy.push({guess: guess[i], accuracy: 'correct'});
                            } else if (location.answer.includes(guess[i])) {
                                guessAccuracy.push({guess: guess[i], accuracy: 'wrongLocation'});
                            } else {
                                guessAccuracy.push({guess: guess[i], accuracy: 'wrong'});
                            }
                        }
                        guessHistory.push(guessAccuracy);
                        setGuess('');
                        inputRef?.current?.focus();
                    }}
                />
                <View>
                    {guessHistory.map((guess: any, index: number) => {
                        return (
                            <Text key={index} style={styles.text}>
                                <Text style={styles[guess[0].accuracy]}>{guess[0].guess}</Text>
                                <Text style={styles[guess[1].accuracy]}>{guess[1].guess}</Text>
                                <Text style={styles[guess[2].accuracy]}>{guess[2].guess}</Text>
                                <Text style={styles[guess[3].accuracy]}>{guess[3].guess}</Text>
                                <Text style={styles[guess[4].accuracy]}>{guess[4].guess}</Text>
                                <Text style={styles[guess[5].accuracy]}>{guess[5].guess}</Text>
                            </Text>
                        );
                    })}
                </View>
            </View>
        </TouchableWithoutFeedback>
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
            fontSize: 30,
            fontWeight:'900',
            alignSelf: 'center',
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