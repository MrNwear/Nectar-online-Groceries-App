import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity, Button } from 'react-native';
import { MainButton } from '../components/button';
import DropDownPicker from 'react-native-dropdown-picker';


export function LocationScreen(props) {


    const [countryopen, setcountryOpen] = useState(false);
    const [cityopen, setcityOpen] = useState(false);
    const [cityvalue, setCityValue] = useState('');
    const [cityItems, setCityItems] = useState([]);
    const [countryvalue, setCountryValue] = useState('');
    const [countryitems, setcountryItems] = useState([{ label: 'KSA', value: 'KSA' }, { label: 'Egypt', value: 'Egypt' }]);

    const egyptcities = [{ label: 'Cairo', value: 'Cairo' }, { label: 'Giza', value: 'Giza' }, { label: 'Menouf', value: 'Menouf' }]
    const KSACities = [{ label: 'makkah', value: 'makkah' }, { label: 'gedah', value: 'gedah' }, { label: 'Menouf', value: 'Menouf' }]
    const backarrows = '<'
    const click = () => {
        alert(cityvalue)
    }
    return (
        <ImageBackground source={require('../assets/blurBackgroundImage.png')} style={styles.imageBackgroundStyle}>
            <TouchableOpacity onPress={() => { props.navigation.replace('number') }}>
                <Text style={styles.backarrowstyle}>{backarrows}</Text>
            </TouchableOpacity>


            <View style={styles.container}>
                <Image source={require('../assets/location.png')} />
                <Text style={{ margin: 15, fontWeight: '700', color: '#000', fontSize: 18, }}>Select your location</Text>
                <Text>test</Text>
                <DropDownPicker open={countryopen}
                    value={countryvalue}
                    items={countryitems}
                    setOpen={setcountryOpen}
                    setValue={setCountryValue}
                    style={{ marginBottom: 70 }}
                    onChangeValue={(v) => {
                        setCountryValue(v);
                        v == 'Egypt' ? setCityItems(egyptcities) : setCityItems(KSACities);

                    }}

                    setItems={setcountryItems} />
                <DropDownPicker open={cityopen}
                    value={cityvalue}
                    items={cityItems}
                    setOpen={setcityOpen}
                    setValue={setCityValue}
                    onChangeValue={(v) => {
                        setCityValue(v);

                    }}

                    setItems={setCityItems} />


                <MainButton title='Submit' onpress={click} txtstyle={{ color: '#fff' }} style={styles.buttonStyle} />
            </View></ImageBackground>
    )
}


const styles = StyleSheet.create({
    imageBackgroundStyle: {
        flex: 1,

        backgroundColor: '#fff'
    },
    container: {
        justifyContent: 'flex-end',

        alignItems: 'center'
    },
    backarrowstyle: {

        margin: 20,
        color: '#000',
        fontSize: 30,

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