import React from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { Icon, Input } from 'react-native-elements';

const { width } = Dimensions.get('window');
const cardwidth = width * .4;

export class SearchScreen extends React.Component {
    items = [{
        name: 'FreshVegetables & Fruits',
        imgsource: require("../assets/vegetablesAndFruits.png"),
        backgroundColor: '#53B175'
    }, {
        name: 'Oil & Ghee',
        imgsource: require('../assets/oilAndGhee.png'),
        backgroundColor: '#F8A44C'
    }, {
        name: 'Meat & Fish',
        imgsource: require('../assets/meatAndFish.png'),
        backgroundColor: '#F7A593'
    }, {
        name: 'Bakery & Snacks',
        imgsource: require('../assets/breads.png'),
        backgroundColor: '#D3B0E0'
    }, {
        name: 'Diary & Eggs',
        imgsource: require('../assets/diaryAndEggs.png'),
        backgroundColor: '#FDE598'
    }, {
        name: 'Beaverages',
        imgsource: require('../assets/beaverages.png'),
        backgroundColor: '#B7DFF5'
    }]

    render() {
        return (
            <ScrollView>
                <Text style={{ textAlign: 'center', color: '#123456', margin: 5, fontWeight: 'bold', fontSize: 22, }}>Find Products </Text>
                <Input placeholder='search' inputContainerStyle={{ height: 50, width: '90%', borderRadius: 10, borderWidth: 1, paddingLeft: 5, marginTop: 10, alignSelf: 'center' }} leftIcon={< Icon name='search' size={20} color='#123456' />} />
                <View style={{
                    flex: 1,
                    margin: 15,
                    paddingHorizontal: 5,
                    flexDirection: 'row',

                    flexWrap: 'wrap'
                }}>
                    {this.items.map((item) => (

                        <View style={{ width: cardwidth, margin: 5, height: 200, backgroundColor: item.backgroundColor, alignItems: 'center', borderRadius: 20 }}>
                            <Image style={{ height: 150, width: 150, resizeMode: 'contain' }} source={item.imgsource} />
                            <Text>{item.name}</Text>
                        </View>

                    ))

                    }
                </View>
            </ScrollView>
        );
    }
}
/* {/*
        <ScrollView>
            {items.map(item => {
                <View style={{ width: '35%', height: 200, backgroundColor: item.backgroundColor, justifyContent: 'center' }}>
                    <Image source={require(item.imgsource)} />
                    <Text>{item.name}</Text>
                </View>
            })}
        </ScrollView >
        */