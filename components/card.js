import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

export function Card() {
    return (
        <View style={styles.container}>
            <Image style={{ height: '40%', width: '80%', resizeMode: "contain", margin: 5 }} source={require('../assets/apple.png')} />
            <Text style={{ fontWeight: '700', color: '#000', margin: 5 }}>Apple</Text>
            <Text style={{ margin: 5 }}>1kg, 15 L.E</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '40%',
        height: '30%',
        borderRadius: 25,
        borderWidth: 1,
        margin: 5,
    }
})
