import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Card } from '../components/card';
export const ShopScreen = () => {
    useEffect(() => {
        console.log('shop Mount');
        return console.log('shop unmount');
    }, []);
    return (
        <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }} >
            <Image style={styles.imagestyle} source={require('../assets/orangeCarrot.png')} />
            <Text>
                <Icon name="map-marker" size={15} color="#000" /> Cairo , Egypt
            </Text>
            <Input
                placeholder='Search'
                leftIcon={
                    <Icon
                        name='search'
                        size={20}
                        color='black'
                    />
                }
                autoFocus={false}

                inputContainerStyle={{ height: 30, width: '90%', borderRadius: 10, borderWidth: 1, paddingLeft: 5, marginTop: 10, alignSelf: 'center' }}
            />
            <Image source={require('../assets/freshVegetables.png')} style={{ width: '90%', resizeMode: 'contain' }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <Text style={{ fontWeight: '700', color: '#000', marginLeft: 10 }}>Exclusive Offer</Text>
                <TouchableOpacity style={{ width: '30%', marginRight: 5 }}><Text style={{ color: '#53B175' }}>Resend Code</Text></TouchableOpacity>
            </View>
            <ScrollView horizontal nestedScrollEnabled style={{ flex: 1 }}>

                <Card title='Apple' source={require('../assets/apple.png')} />
                <Card title='Carrot' source={require('../assets/orangeCarrot.png')} />
                <Card title='Apple' source={require('../assets/apple.png')} />
                <Card title='Carrot' source={require('../assets/orangeCarrot.png')} />
                <Card title='Apple' source={require('../assets/apple.png')} />
                <Card title='Carrot' source={require('../assets/orangeCarrot.png')} />
                <Card title='Apple' source={require('../assets/apple.png')} />
                <Card title='Carrot' source={require('../assets/orangeCarrot.png')} />
            </ScrollView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    imagestyle: {
        marginTop: 20,
        height: 30,
        width: 30,
        resizeMode: 'contain',

    },
    cardcontainer: {
        width: '40%',
        height: '30%',
        borderRadius: 25,
        borderWidth: 1,
        margin: 5,
    }
})