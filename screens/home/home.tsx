import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "../../components";
import colorPallete from "../../constants/colors";
import { GuessableLocation } from "../../constants/types";
import data from "../../constants/data";

const status = {
  WON: "won",
  LOST: "lost",
  PENDING: "pending",
};
export default function HomeScreen({ navigation }: { navigation: any }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [guess, setGuess] = useState("");
  const [guessHistory, setGuessHistory] = useState<any[]>([]);
  const [gameStatus, setGameStatus] = useState(status.PENDING);
  const [canGuess, setCanGuess] = useState(false);
  const [timeTillNewGame, setTimeTillNewGame] = useState("");
  const totalGuesses = useRef<any>(0);
  const guessLength = useRef<number>(0);
  const spaceCount = useRef<number>(0);
  const [location, setLocation] = useState<GuessableLocation>({
    location: "",
    date: "",
    answer: "",
    image: "../../assets/loading.gif",
  });
  const inputRef = useRef<any>();
  const intervalRef = useRef<any>();

  const getData = async () => {
    try {
      const valueGuesses = await AsyncStorage.getItem("totalGuesses");
      const valueGameStatus = await AsyncStorage.getItem("gameStatus");
      const valueStatus = await AsyncStorage.getItem("lastPlayed");
      if (valueGuesses !== null && valueGameStatus !== null) {
        totalGuesses.current = valueGuesses;
        setGameStatus(valueGameStatus);
      }
      return valueStatus;
    } catch (e) {
      return null;
    }
  };

  const getTodaysDate = () => {
    const today: Date = new Date();
    const yyyy: string = today.getFullYear().toString();
    const month: number = today.getMonth() + 1;
    const day: number = today.getDate();
    const mm: string = month < 10 ? "0" + month : "" + month;
    const dd: string = day < 10 ? "0" + day : "" + day;
    const fullDate = `${mm}/${dd}/${yyyy}`;
    return fullDate;
  };

  useEffect(() => {
    const fullDate = getTodaysDate();
    const theLocation: GuessableLocation = data.find((location) =>
      location ? location.date === fullDate : undefined
    );
    getData().then((result) => {
      if (result !== null && fullDate === result) {
        //navigation.navigate('Win');
        return;
      } else {
        AsyncStorage.clear();
      }
    });
    setLocation(theLocation);
    inputRef?.current?.focus();
    intervalRef.current = setInterval(() => {
      const now = new Date();
      const hoursleft = 23 - now.getHours();
      const minutesleft = 59 - now.getMinutes();
      const secondsleft = 59 - now.getSeconds();
      let minutesleftString = "";
      let secondsleftString = "";
      minutesleft < 10
        ? (minutesleftString = "0" + minutesleft)
        : (minutesleftString = "" + minutesleft);
      secondsleft < 10
        ? (secondsleftString = "0" + secondsleft)
        : (secondsleftString = "" + secondsleft);
      setTimeTillNewGame(
        `${hoursleft}:${minutesleftString}:${secondsleftString}`
      );
    }, 1000);
  }, []);

  useEffect(() => {
    spaceCount.current = guess.split(" ").length - 1;
    guessLength.current = guess.length - spaceCount.current;
    if (guessLength.current === 6 && gameStatus === status.PENDING) {
      setCanGuess(true);
    } else {
      setCanGuess(false);
    }
  }, [guess]);

  const onSubmit = () => {
    Keyboard.dismiss();
    const guessAccuracy = [];
    const newGuessHistory = [];
    let totalCorrect = 0;
    const currentGuess = guess.toUpperCase().replace(/[^A-Z]/g, "");
    for (let i = 0; i < 6; i++) {
      if (currentGuess[i] === location?.answer[i]) {
        guessAccuracy.push({ guess: currentGuess[i], accuracy: "correct" });
        totalCorrect += 1;
      } else if (location?.answer.includes(guess[i])) {
        guessAccuracy.push({
          guess: currentGuess[i],
          accuracy: "wrongLocation",
        });
      } else {
        guessAccuracy.push({ guess: currentGuess[i], accuracy: "wrong" });
      }
    }
    guessHistory.push(guessAccuracy);
    setGuess("");
    spaceCount.current = 0;
    guessLength.current = 0;
    totalGuesses.current += 1;
    if (totalCorrect === 6) {
      setGameStatus(status.WON);
      AsyncStorage.setItem("gameStatus", status.WON);
      AsyncStorage.setItem("totalGuesses", totalGuesses.current + "");
      AsyncStorage.setItem("correctAnswer", location?.answer || "");
      AsyncStorage.setItem("lastPlayed", getTodaysDate());
      Alert.alert(
        "Congrats!!",
        `You Won After ${totalGuesses.current} Guesses.`,
        [{ text: "Close" }, { text: "Share", onPress: onShare }]
      );
      //navigation.navigate('Win');
      return;
    }
    if (totalCorrect !== 6 && totalGuesses.current === 6) {
      setGameStatus(status.LOST);
      AsyncStorage.setItem("gameStatus", status.LOST);
      AsyncStorage.setItem("totalGuesses", totalGuesses.current + "");
      AsyncStorage.setItem("correctAnswer", location?.answer || "");
      AsyncStorage.setItem("lastPlayed", getTodaysDate());
      Alert.alert(
        "Better Luck Next Time",
        `You Lost After ${totalGuesses.current} Guesses.`,
        [{ text: "Close" }, { text: "Share", onPress: onShare }]
      );
      //navigation.navigate('Win');
      return;
    }
    setTimeout(() => {
      if (gameStatus === status.PENDING) {
        inputRef?.current?.focus();
      }
    }, 100);
  };

  const onShare = async () => {
    const toShare = guessHistory
      .map((attempt, i) => {
        return attempt
          .map(
            (
              letter: {
                accuracy: "wrong" | "wrongLocation" | "correct";
                guess: string;
              },
              j: number
            ) => {
              return emojis[letter.accuracy];
            }
          )
          .join("");
      })
      .join("\n");
    try {
      const result = await Share.share({
        message: toShare,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const gameInputArea = (
    <View>
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder={"Guess The Location"}
        placeholderTextColor={"#808e9b"}
        autoCapitalize={"characters"}
        autoFocus={true}
        value={guess}
        maxLength={6 + spaceCount.current}
        editable={location?.location !== "" && gameStatus === status.PENDING}
        onChangeText={(value: string) => {
          value = value
            .toUpperCase()
            .slice(0, 6 + spaceCount.current)
            .replace(/[^A-Z ]/g, "");
          setGuess(value);
        }}
        onKeyPress={(e: any) => {
          if (e.keyCode === 13 && canGuess) {
            if (guess.length == 6) {
              onSubmit();
            } else {
              setTimeout(() => {
                inputRef?.current?.focus();
              }, 100);
            }
          }
        }}
      />
      <Button
        disabled={!canGuess}
        text={"Submit"}
        onPress={() => {
          if (guessLength.current === 6 && canGuess) {
            onSubmit();
          }
        }}
      />
      <View>
        {guessHistory.map(
          (
            guess: {
              accuracy: "correct" | "wrongLocation" | "wrong";
              guess: string;
            }[],
            index: number
          ) => {
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
          }
        )}
      </View>
    </View>
  );

  const emojis = {
    wrong: ["\u{1F7E5}"],
    wrongLocation: ["\u{1F7E7}"],
    correct: ["\u{1F7E9}"],
    blackSquare: ["\u{2B1B}"],
  };

  const gameCompleteArea = (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.textGameOver}>
        {gameStatus === "won"
          ? "CONGRATULATIONS. YOU WON!!!!"
          : "SORRY, YOU LOST"}
      </Text>
      <Text style={styles.textGameOver}>
        Correct Answer:
        <Text style={styles.correctGameOver}>{` ${location?.answer}`}</Text>
      </Text>
      <Text style={styles.textGameOver}>
        Total Guesses:
        <Text style={styles.wrongLocationGameOver}>
          {` ${totalGuesses.current}`}
        </Text>
      </Text>
      <Text>
        {emojis.redSquare}
        {emojis.orangeSquare}
        {emojis.greenSquare}
        {emojis.blackSquare}
      </Text>
      <Text style={styles.textGameOver}>
        Time To New Game:
        <Text style={styles.textTimeLeftGameOver}>{` ${timeTillNewGame}`}</Text>
      </Text>
      <View style={{ marginTop: 50 }}>
        <Button text={"Share Results"} onPress={onShare} />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button
          text={"Clear Data"}
          onPress={() => {
            AsyncStorage.clear();
          }}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{ height: "100%" }}>
        <ScrollView style={{ paddingHorizontal: 20 }}>
          <TouchableWithoutFeedback
            onPress={() => {
              if (Platform.OS === "web") {
                inputRef?.current?.focus();
              } else {
                inputRef?.current?.blur();
              }
            }}
          >
            <View style={[styles.container]}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <Text style={styles.helpText}>How To Play?</Text>
              </TouchableOpacity>

              <Image
                style={{ width: "100%", minHeight: 300 }}
                source={{ uri: location?.image }}
              />
              {gameStatus === status.PENDING ? gameInputArea : gameCompleteArea}

              <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onDismiss={() => {}}
              >
                <View
                  style={[
                    styles.container,
                    Platform.OS === "ios" ? { paddingTop: 50 } : null,
                  ]}
                >
                  <View>
                    <Text style={{ color: colorPallete.textLight }}>
                      Welcome To Where-dle
                    </Text>
                    <Text style={{ color: colorPallete.textLight }}>
                      HOW TO PLAY:
                    </Text>
                    <Text style={{ color: colorPallete.textLight }}>
                      Each City Is 6 Letters Long
                    </Text>
                    <Text style={{ color: colorPallete.textLight }}>
                      Type In Your Guess
                    </Text>
                    <Text style={{ color: colorPallete.textLight }}>
                      A RED Letter Means That Letter Is NOT In The Word
                    </Text>
                    <Text style={{ color: colorPallete.textLight }}>
                      An ORANGE Letter Means That Letter Is In The Word But
                      Wrong Spot
                    </Text>
                    <Text style={{ color: colorPallete.textLight }}>
                      A GREEN Letter Means That Letter Is Correct
                    </Text>
                    <Text style={{ color: colorPallete.textLight }}>
                      You Can Play Once Daily And Have 6 Tries To Win
                    </Text>
                    <Button
                      text={"Close Help"}
                      onPress={() => {
                        setModalVisible(false);
                      }}
                    />
                  </View>
                </View>
              </Modal>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: colorPallete.darkGrey,
  },
  text: {
    fontSize: 30,
    fontWeight: "900",
    alignSelf: "center",
    color: colorPallete.textLight,
  },
  textGameOver: {
    fontSize: 20,
    fontWeight: "900",
    alignSelf: "flex-start",
    color: colorPallete.textLight,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: colorPallete.grey,
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: colorPallete.black,
  },
  correct: {
    color: "green",
  },
  wrongLocation: {
    color: "orange",
  },
  wrong: {
    color: "red",
  },
  helpText: {
    alignSelf: "center",
    color: colorPallete.pink,
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  correctGameOver: {
    color: "green",
  },
  wrongLocationGameOver: {
    color: "orange",
  },
  wrongGameOver: {
    color: "red",
  },
  textTimeLeftGameOver: {
    color: "lightblue",
  },
});
