import { View, ScrollView, ImageBackground, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { MainButton } from '../components/button';

export const SinginScreen = () => {

    return (
        <ImageBackground source={require('../assets/blurBackgroundImage.png')} style={styles.container}  >
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../assets/orangeCarrot.png')} style={{ height: 50, width: 50, resizeMode: 'contain', margin: 30 }} />
                </View>
                <View style={{ marginTop: 20, marginLeft: 5 }}>
                    <Text style={{ fontWeight: '700', color: '#000', fontSize: 25, marginLeft: 10, marginTop: 20 }}>Loging</Text>
                    <Text style={{ margin: 10, marginBottom: 20 }}>Enter your Email and Password</Text>
                    <Text style={{ margin: 10, marginBottom: 0 }}>Email</Text>

                    <TextInput placeholder='eg.yousefnwear@gmail.com' style={{ borderBottomWidth: 1, borderColor: 'grey', width: '95%' }} />

                    <Text style={{ margin: 10, marginBottom: 0, marginTop: 20 }}>Password</Text>

                    <TextInput placeholder='Password' style={{ borderBottomWidth: 1, borderColor: 'grey', width: '95%' }} />
                    <Text style={{ textAlign: 'right', marginRight: 10 }}>forgot Password?</Text>
                    <View style={{ alignItems: 'center' }}>
                        <MainButton title='Sign In' txtstyle={{ color: '#fff' }} style={styles.buttonStyle} />
                        <Text style={{ margin: 10 }}>Don't have an account?<Text style={{ color: '#53B175' }} onPress={() => alert('hello')}>SignUp</Text></Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'


    }, buttonStyle:
    {
        backgroundColor: '#53B175',
        marginTop: 25,
        width: '90%',
        borderRadius: 13,
        alignContent: 'center',
        height: 40,
    }
})