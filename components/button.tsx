import {Text, TouchableOpacity, StyleSheet} from "react-native";
import React from "react";
import colorPallete from "../constants/colors";

export default function Button(props: {
    text: string,
    type?: 'normal' | 'text',
    style?: StyleSheet,
    disabled?: boolean,
    onPress?: () => void
}) {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.loginButton, props.disabled ? styles.disabledButton : null]} disabled={props.disabled}>
            <Text style={styles.loginButtonText}>{props.text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: colorPallete.purple,
        paddingVertical: 12,
        borderRadius: 6,
        marginTop: 20
    },
    loginButtonText: {
        fontSize: 20,
        fontWeight: '500',
        color: colorPallete.textLight,
        alignSelf: 'center'
    },
    disabledButton: {
        backgroundColor: 'lightgrey',
    }
});