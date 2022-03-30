import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { MainButton } from '../components/button.js'
export class GetStartedScreen extends React.Component {
    buttonHandler = () => {
        this.props.navigation.navigate('verification')
    }
    render() {
        return (
            <ImageBackground style={styles.imagebackgroundStyle} resizeMode='cover' source={require('../assets/GetStartedBackgroundImage.png')}>
                <Image style={styles.imageStyle} source={require('../assets/Group.png')} />
                <Text style={styles.welcomeTextStyle}>Welcome</Text>
                <Text style={styles.welcomeTextStyle}>to our store</Text>
                <Text style={{ color: '#fff' }}>Ger your groceries in as fast as one hour</Text>
                <MainButton style={styles.buttonStyle} txtstyle={{ color: '#fff' }} title='Get Started' onpress={this.buttonHandler} />
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    imagebackgroundStyle: {
        flex: 1,
        justifyContent: 'flex-end',

        alignItems: 'center'

    },
    imageStyle: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    welcomeTextStyle: {
        fontWeight: '700',
        color: '#fff',

        fontSize: 35

    },
    buttonStyle:
    {
        backgroundColor: '#53B175',
        marginTop: 15,
        width: '90%',
        borderRadius: 13,
        height: 40,
        marginBottom: 50
    }


})