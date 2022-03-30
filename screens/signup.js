import { View, ScrollView, ImageBackground, Text, Image, StyleSheet, TextInput, TouchableOpacity, Input } from 'react-native';
import React from 'react';
import { MainButton } from '../components/button';

export const SingUpScreen = () => {

    const termsandconditionText = `By continuing you agree to our Terms of Service
     and Privacy Policy.`

    return (
        <ImageBackground source={require('../assets/blurBackgroundImage.png')} style={styles.container}  >
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../assets/orangeCarrot.png')} style={{ height: 50, width: 50, resizeMode: 'contain', margin: 30 }} />
                </View>
                <View style={{ marginTop: 10, marginLeft: 5 }}>
                    <Text style={{ fontWeight: '700', color: '#000', fontSize: 25, marginLeft: 10, marginTop: 5 }}>Sign Up</Text>
                    <Text style={{ margin: 10, marginBottom: 20 }}>Enter your credentials to continue</Text>
                    <Text style={{ margin: 10, marginBottom: 0 }}>UserName</Text>

                    <TextInput placeholder='(eg.)Nwear' style={{ borderBottomWidth: 1, height: 40, borderColor: 'grey', width: '95%' }} />
                    <Text style={{ margin: 10, marginBottom: 0 }}>Email</Text>

                    <TextInput placeholder='(eg.)yousefnwear@gmail.com' style={{ borderBottomWidth: 1, height: 40, borderColor: 'grey', width: '95%' }} />

                    <Text style={{ margin: 10, marginBottom: 0, marginTop: 20 }}>Password</Text>

                    <TextInput placeholder='Password' secureTextEntry={true} style={{ borderBottomWidth: 1, borderColor: 'grey', height: 40, width: '95%' }} />
                    <Text style={{ margin: 10 }}>{termsandconditionText}</Text>
                    <View style={{ alignItems: 'center' }}>
                        <MainButton title='Sign Up' txtstyle={{ color: '#fff' }} style={styles.buttonStyle} />
                        <Text style={{ margin: 10 }}>already have an account?<Text style={{ color: '#53B175' }} onPress={() => alert('hello')}>SignIn</Text></Text>
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