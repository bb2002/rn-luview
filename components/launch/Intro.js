import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

const Intro = ({ title, content }) => {
    return (
        <SafeAreaView style={Styles.container}>
            <Text style={Styles.title}>{title}</Text>
            <Text style={Styles.content}>{content}</Text>
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
    },
    content: {
        color: "#C4C4C4",
        fontSize: 16,
        marginTop: 40,
        textAlign: "center",
        lineHeight: 24
    }
})

export default Intro;