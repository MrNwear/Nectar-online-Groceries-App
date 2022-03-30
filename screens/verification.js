import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { MainButton } from '../components/button.js';
import IntlPhoneInput from 'react-native-intl-phone-input/index';


export class VerificationScreen extends React.Component {
    buttonHandler = () => {
        this.props.navigation.navigate('location')
    }
    state = {
        phoneNumber: ''
    }

    backarrow = '<'
    render() {
        return (
            <ImageBackground source={require('../assets/blurBackgroundImage.png')} style={styles.container}>
                <View >
                    <TouchableOpacity onPress={() => { this.props.navigation.replace('number') }}>
                        <Text style={styles.backarrowstyle}>{this.backarrow}</Text>
                    </TouchableOpacity>
                    <Text style={{ fontWeight: '700', color: '#000', fontSize: 18, textAlign: 'center' }}>Enter your 4-digit code </Text>
                    <Text style={{ margin: 10, marginTop: 30 }}>Code</Text>
                    <TextInput maxLength={4} keyboardType='numeric' placeholderTextColor={'#000'} placeholder='- - - -' style={{ borderBottomWidth: 1, borderRadius: 10, borderColor: '#098756' }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity style={{ width: '30%', marginLeft: 10 }}><Text style={{ color: '#53B175' }}>Resend Code</Text></TouchableOpacity>

                    <MainButton title='>' onpress={this.buttonHandler} txtstyle={styles.txtstyle} style={styles.buttonStyle} />
                </View></ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff'


    },
    backarrowstyle: {

        margin: 20,
        color: '#000',
        fontSize: 30,

    },

    buttonStyle:
    {
        backgroundColor: '#53B175',
        alignContent: 'center',
        width: 60,
        height: 60,
        margin: 40,
        borderRadius: 30,



    },
    txtstyle: {
        color: '#fff',

        fontSize: 35
    }


})