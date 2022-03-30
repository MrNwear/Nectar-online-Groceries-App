import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export class SplashScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{ resizeMode: 'contain', width: '80%' }} source={require('../assets/nectarLogo.png')} />
            </View>
        );
    }
    componentDidMount() {
        const Timeout = setTimeout(() => {
            this.props.navigation.replace('getstarted');
        }, 3000);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#53B175",
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
});