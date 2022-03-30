import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { MainButton } from '../components/button.js';
import IntlPhoneInput from 'react-native-intl-phone-input/index';


export class NumberScreen extends React.Component {
    buttonHandler = () => {
        this.props.navigation.navigate('verification')
    }
    state = {
        phoneNumber: ''
    }
    onChangeText = ({ dialCode, unmaskedPhoneNumber, phoneNumber, isVerified }) => {
        this.setState({ phoneNumber: dialCode + unmaskedPhoneNumber });
        console.log(this.state.phoneNumber);
    };
    backarrow = '<'
    render() {
        return (
            <ImageBackground source={require('../assets/blurBackgroundImage.png')} style={styles.container}>
                <View >
                    <TouchableOpacity onPress={() => { this.props.navigation.replace('getstarted') }}>
                        <Text style={styles.backarrowstyle}>{this.backarrow}</Text>
                    </TouchableOpacity>
                    <Text style={{ fontWeight: '700', color: '#000', fontSize: 18, textAlign: 'center' }}>Enter Your Mobile Number </Text>
                    <Text style={{ margin: 10, marginTop: 30 }}>Mobile Number</Text>
                    <IntlPhoneInput onChangeText={this.onChangeText} defaultCountry="EG" />
                </View>
                <View style={{ flexWrap: 'wrap-reverse' }}>
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