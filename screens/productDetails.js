import React, { useState } from 'react';
import { Text, Image, ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { MainButton } from '../components/button';
import { PriceComponent } from '../components/price';
export const ProductDetailsScreen = (props) => {
    const imagesrc = props.imagesrc ? props.imagesrc : require('../assets/apple.png');
    const productName = props.name ? props.name : "../";
    const [quantity, setQuantity] = useState(1);
    const [productDetailsState, setProductDetailsState] = useState({ iconname: 'keyboard-arrow-up' });
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }
    const decreaseQuantity = () => {
        if (quantity > 0)
            setQuantity(quantity - 1);
    }
    const showProductDetails = () => {
        if (productDetailsState.iconname == 'keyboard-arrow-down') {
            setProductDetailsState({ iconname: 'keyboard-arrow-up' })
        }
        else {
            setProductDetailsState({ iconname: 'keyboard-arrow-down' });
        }
    }
    return (
        <ScrollView style={{ backgroundColor: '#fff', }} contentContainerStyle={{ marginVertical: 5 }}>
            <View style={styles.imageContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 10 }}>
                    <Icon name='arrow-back-ios' type='MaterialIcons' />
                    <Icon name='upload' type='feather' />
                </View>
                <Image source={imagesrc} style={{ width: 200, height: 200, resizeMode: 'contain', alignSelf: 'center' }} />
            </View>
            <View style={styles.detailsContainer}>

            </View>
            <View style={styles.detailsContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={{ fontWeight: '700', color: '#000', fontSize: 20 }}>Natural Red apple</Text>
                    <Icon name='heart' iconStyle={{ color: '#123456' }} type='feather' />
                </View>
                <Text>1kg,Price</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#fff', flexDirection: 'row', padding: 5, marginHorizontal: 5, paddingHorizontal: 5, alignItems: 'center', width: '50%' }}>
                        < MainButton onpress={decreaseQuantity} title='-' style={{ backgroundColor: '#53B175' }} />
                        <Text style={{ paddingHorizontal: 5 }}>{quantity}</Text>
                        <MainButton onpress={increaseQuantity} title='+' txtStyle={{ color: '#123456' }} style={{ backgroundColor: '#53B175' }} />
                    </View>

                    <PriceComponent price={4.99} />
                </View>

                <View style={{ borderTopWidth: 1, marginTop: 5, borderColor: '#E2E2E2', flexDirection: 'row', justifyContent: 'space-between' }}>

                    <Text style={{ color: '#000' }}>Product Details</Text>
                    <Icon name={productDetailsState.iconname} type='MaterialIcons' onPress={showProductDetails} />
                </View>

                {
                    productDetailsState.iconname == 'keyboard-arrow-down' ?
                        <Text>Apples Are Nutritious. Apples May Be Good For Weight Loss Apples May Be Good For Your Heart. As Part Of A Heartful And Varied Diet.</Text> :
                        <Text></Text>
                }

                <View style={styles.nutritionAndReviewStyle}>
                    <Text style={{ color: '#000' }}>Nutritions</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                        <View style={{ backgroundColor: '#EBEBEB', padding: 2, borderRadius: 5 }}>
                            <Text>100gm</Text>
                        </View>
                        <Icon name='chevron-right' type='feather' />
                    </View>
                </View>
                <View style={styles.nutritionAndReviewStyle}>
                    <Text style={{ color: '#000' }}>Review</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Icon name='star-outlined' type='entypo' iconStyle={{ color: '#F3603F' }} />
                        <Icon name='star-outlined' type='entypo' iconStyle={{ color: '#F3603F' }} />
                        <Icon name='star-outlined' type='entypo' iconStyle={{ color: '#F3603F' }} />
                        <Icon name='star-outlined' type='entypo' iconStyle={{ color: '#F3603F' }} />
                        <Icon name='star-outlined' type='entypo' iconStyle={{ color: '#F3603F' }} />
                        <Icon name='chevron-right' type='feather' />
                    </View>
                </View>

            </View>
            <MainButton title='Add to Basket' style={{ alignSelf: 'center', backgroundColor: '#53B175', width: '90%', marginTop: 10, }} txtStyle={{ color: '#fff' }} />

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        backgroundColor: '#F2F3F2',
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,

    },
    detailsContainer: {
        flex: 2,
        marginHorizontal: 10,
        marginBottom: 15
    },
    nutritionAndReviewStyle: {
        borderTopWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        borderColor: '#E2E2E2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})