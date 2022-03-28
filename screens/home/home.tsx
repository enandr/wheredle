import {useState, useEffect, useRef} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    TextInput,
    Image,
    Alert
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Button} from "../../components";
import colorPallete from "../../constants/colors";
import {GuessableLocation} from "../../constants/types";
import data from "../../constants/data";
const status = {
    WON: 'won',
    LOST: 'lost',
    PENDING: 'pending'
}
export default function HomeScreen({ navigation }) {
    const [guess, setGuess] = useState('');
    const [guessHistory, setGuessHistory] = useState([]);
    const [gameStatus, setGameStatus] = useState(status.PENDING);
    const [canGuess, setCanGuess] = useState(false);
    const totalGuesses = useRef(0);
    const [location, setLocation] = useState<GuessableLocation>({
        location: '',
        date: '',
        answer: '',
        image: ''
    });
    const inputRef  = useRef();
    const getData = async () => {
        try {
            const valueStatus = await AsyncStorage.getItem('lastPlayed');
            return valueStatus;
        } catch(e) {
            return null;
        }
    }
    const getTodaysDate = () => {
        const today: Date = new Date()
        const yyyy: string = today.getFullYear().toString()
        const month: number = today.getMonth() + 1;
        const day: number = today.getDate();
        const mm: string = month < 10 ? '0' + month : '' + month;
        const dd: string = day < 10 ? '0' + day : '' + day;
        const fullDate = `${mm}/${dd}/${yyyy}`;
        return fullDate;
    }
    useEffect(() => {
        const fullDate = getTodaysDate();
        const theLocation: GuessableLocation = data.find(location => location.date === fullDate);
        getData().then(result => {
            if (result !== null && fullDate === result) {
                navigation.navigate('Win');
                return;
            } else {
                AsyncStorage.clear();
            }
        });
        setLocation(theLocation);
        inputRef?.current?.focus();
    },[])
    useEffect(() => {
        if (guess.length === 6 && gameStatus === status.PENDING) {
            setCanGuess(true);
        } else {
            setCanGuess(false);
        }
    },[guess])

    const onSubmit = () => {
        const guessAccuracy = [];
        const newGuessHistory = [];
        let totalCorrect = 0;
        for (let i = 0; i < 6; i++) {
            if (guess[i] === location.answer[i]) {
                guessAccuracy.push({guess: guess[i], accuracy: 'correct'});
                totalCorrect += 1;
            } else if (location.answer.includes(guess[i])) {
                guessAccuracy.push({guess: guess[i], accuracy: 'wrongLocation'});
            } else {
                guessAccuracy.push({guess: guess[i], accuracy: 'wrong'});
            }
        }
        guessHistory.push(guessAccuracy);
        setGuess('');
        totalGuesses.current += 1;
        if (totalCorrect === 6) {
            setGameStatus(status.WON);
            AsyncStorage.setItem('gameStatus', status.WON);
            AsyncStorage.setItem('totalGuesses', totalGuesses.current + '');
            AsyncStorage.setItem('correctAnswer', location.answer);
            AsyncStorage.setItem('lastPlayed', getTodaysDate());
            navigation.navigate('Win');
        }
        if (totalCorrect !== 6 && totalGuesses.current === 6) {
            setGameStatus(status.LOST);
            AsyncStorage.setItem('gameStatus', status.LOST);
            AsyncStorage.setItem('totalGuesses', totalGuesses.current + '');
            AsyncStorage.setItem('correctAnswer', location.answer);
            AsyncStorage.setItem('lastPlayed', getTodaysDate());
            navigation.navigate('Win');
        }
        setTimeout(() => {
            if (gameStatus === status.PENDING) {
                inputRef?.current?.focus();
            }
        },100)
    }
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
                    editable={location.location !== '' && gameStatus === status.PENDING}
                    onChangeText={(value: string) => {
                        value = value.toUpperCase();
                        setGuess(value);
                    }}
                    onKeyPress={(e: any) => {
                        if (e.keyCode === 13 && canGuess) {
                            if (guess.length == 6) {
                                onSubmit();
                            } else {
                                setTimeout(() => {
                                    inputRef?.current?.focus();
                                },100)
                            }
                        }
                    }}
                />
                <Button
                    disabled={!canGuess}
                    text={'Submit'}
                    onPress={() => {
                        if (guess.length == 6 && canGuess) {
                            onSubmit();
                        }
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