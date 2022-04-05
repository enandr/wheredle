import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import colorPallete from "../constants/colors";

export default function Keyboard(props: {
  onKeyPressed: (key: string) => void;
  greenCaps: string[];
  orangeCaps: string[];
  greyCaps: string[];
}) {
  const getKeyBGColor = (key) => {
    key = key.toUpperCase();
    if (props.greenCaps.includes(key)) {
      return "green";
    }
    if (props.orangeCaps.includes(key)) {
      return "orange";
    }
    if (props.greyCaps.includes(key)) {
      return "#282828";
    }
    return "grey";
  };
  return (
    <View style={styles.keyboard}>
      {keys.map((keyRow, i) => (
        <View style={styles.row} key={`row-${i}`}>
          {keyRow.map((key) => (
            <TouchableOpacity
              onPress={() => props.onKeyPressed(key)}
              //disabled={greyCaps.includes(key)}
              key={key}
              style={[
                styles.key,
                key === ENTER || key === CLEAR ? { width: keyWidth * 1.4 } : {},
                { backgroundColor: getKeyBGColor(key) },
              ]}
            >
              <Text style={styles.keyText}>{key.toUpperCase()}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}
const ENTER = "ENTER";
const CLEAR = "CLEAR";

const keys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  [ENTER, "Z", "X", "C", "V", "B", "N", "M", CLEAR],
];
const screenWidth = Dimensions.get("window").width;
export const keyWidth = (screenWidth - 10) / keys[0].length;
const keyHeight = keyWidth * 1.3;
const styles = StyleSheet.create({
  keyboard: {
    alignSelf: "stretch",
    marginTop: "auto",
  },
  row: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
  },
  key: {
    width: keyWidth - 4,
    height: keyHeight - 4,
    margin: 2,
    borderRadius: 5,
    backgroundColor: colorPallete.grey,
    justifyContent: "center",
    alignItems: "center",
  },
  keyText: {
    color: colorPallete.textLight,
    fontWeight: "bold",
  },
});
