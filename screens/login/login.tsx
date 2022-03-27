import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput
} from "react-native";
import colorPallete from "../../constants/colors";
import {Button} from '../../components';
import {TouchableOpacity} from "react-native-gesture-handler";

export default function LoginScreen() {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.welcomeText}>WHERE-DLE</Text>
                <Text style={styles.loginText}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder={"Email Address"}
                    placeholderTextColor={'#808e9b'}
                    autoCapitalize={'none'}
                    autoCompleteType={'email'}
                    autoCorrect={true}
                    keyboardType={'email-address'}
                    textContentType={'emailAddress'}
                />
                <TextInput
                    style={styles.input}
                    placeholder={"Password"}
                    placeholderTextColor={'#808e9b'}
                    secureTextEntry={true}
                    textContentType={'password'}
                />
                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
                <Button text={'Login'}/>
                {/*<TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>*/}
                <View style={styles.signUpTextView}>
                    <Text style={styles.signUpText}>Don't have an account?</Text>
                    <TouchableOpacity>
                        <Text style={[styles.signUpText,{color: '#B53471'}]}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.aboutText}>
                    Where-dle is a fun daily guessing game where you have 6 chances to guess the correct location based on an image of a location.
                </Text>
            </KeyboardAvoidingView>
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
    welcomeText: {
        fontSize: 30,
        fontWeight:'900',
        alignSelf: 'center',
        color: colorPallete.textLight
    },
    loginText: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
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
    forgotPasswordText: {
        alignSelf: 'flex-end',
        color: colorPallete.pink,
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10
    },
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
    signUpTextView: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    signUpText: {
        color: colorPallete.textGrey,
        fontSize: 20,
        fontWeight: '500'
    },
    aboutText: {
        color: colorPallete.textGrey,
        fontSize: 15,
        fontWeight: '500',
        marginTop: 30
    }

});