import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const Login = ({title}) => {
    return (
        <SafeAreaView style={Styles.container}>
            <Text style={Styles.title}>{title}</Text>
        </SafeAreaView>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        color: "#C4C4C4",
        fontSize: 28,
        textAlign: "center",
        marginTop: 120,
        fontWeight: "bold",
        lineHeight: 42
    }
})

export default Login;