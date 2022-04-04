import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MainButton } from "./button";
export const Card = (props) => {
    const imagesource = props.source
    const cardTitle = props.title
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={{ height: '40%', width: '80%', resizeMode: "contain", margin: 5 }} source={imagesource} />
            <Text style={{ fontWeight: '700', color: '#000', margin: 5 }}>{cardTitle}</Text>
            <View style={{
                justifyContent: "space-between", flexDirection: "row"
            }}>
                <Text style={{ margin: 5 }}>1kg, 15 L.E</Text>
                <MainButton title='+' style={{ width: '25%', backgroundColor: '#53B175', borderRadius: 10, marginRight: 5 }} txtstyle={{ color: '#fff' }} />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 25,
        borderWidth: 1,
        width: 150,
        height: 180, margin: 10
    }
})