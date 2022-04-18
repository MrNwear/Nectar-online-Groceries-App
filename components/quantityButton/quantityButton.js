import React, { useState } from 'react';
import { MainButton } from '../button';
import { View, Text } from 'react-native';

export const QuantityButton = (props) => {

    const [quantity, setQuantity] = useState(1);
    const renderInitialButton = () => {
        return <MainButton onPress={increaseQuantity} title='Add to Cart' wrapperStyle={{ backgroundColor: '#294B69', borderColor: '#294B69' }} />
    }
    const renderIcrementDecrementButton = () => {
        return (
            <View style={{ backgroundColor: '#fff', flexDirection: 'row', padding: 5, marginHorizontal: 5, paddingHorizontal: 5, alignItems: 'center' }}>
                <MainButton onPress={decreaseQuantity} title='-' />
                <Text style={{ paddingHorizontal: 15 }}>{quantity}</Text>
                <MainButton onPress={increaseQuantity} title='+' txtStyle={{ color: '#123456' }} />
            </View>
        );
    }
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }
    const decreaseQuantity = () => {
        setQuantity(quantity - 1);
    }
    return (quantity ? renderIcrementDecrementButton() : renderInitialButton());

}