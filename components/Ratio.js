import React, { useContext} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import { QuantityContext } from './QuantityContext';
import QuantityTitle from './ui/QuantityTitle';
import IncrementButton from './ui/IncrementButton';
import DecrementButton from './ui/DecrementButton';
import { useTheme } from '../constants/theme';


const Ratio = () => {
    const { colors } = useTheme();

    const handleRatioChange = (newRatio) => {
        if(isNaN(+newRatio)) {
            console.log('Not a Number');
            return;
        }

        console.log('newQuantity', newRatio);
        quantityCtx.quantityChangeHandler('ratio', newRatio);
    }

    const incrementQuantity = () => {
        var amount = 1;
        quantityCtx.incrementQuantityHandler('ratio', amount);
    }

    const decrementQuantity = () => {
        var amount = 1;
        quantityCtx.decrementQuantityHandler('ratio', amount);
    }

    const quantityCtx = useContext(QuantityContext);


    return (
        <View style={style.ratioContainer}>
            <QuantityTitle>Ratio</QuantityTitle>
            <View style={style.ratio}>
                {/* <Button style={style.button} title="-" onPress={decrementQuantity}/> */}
                <DecrementButton onPress={decrementQuantity}/>
                <View style={style.ratioInput}>
                    <TextInput
                        style={{...style.largeText, color: colors.largeInput}}
                        defaultValue={quantityCtx.ratio.toString()}
                        underlineColorAndroid='transparent'
                        keyboardType={'numeric'}
                        onChangeText={handleRatioChange}
                    />
                    <Text style={{...style.largeText, color: colors.largeInput}}>:1</Text>
                </View>
                {/* <Button style={style.button} title="+" onPress={incrementQuantity}/> */}
                <IncrementButton onPress={incrementQuantity} />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    ratioContainer: {
        justifyContent: 'center',
        paddingVertical: 10,        
    },
    ratio: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },
    ratioInput: {
        marginHorizontal: 30,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    largeText: {
        fontSize: 50,
        textAlign: 'center',
        fontFamily: 'montserrat-light',
    },
    headingText: {
        fontSize: 30,
        textAlign: 'center',
    },
    button: {
        padding: 10,
        marginHorizontal: 30,
    }
});

export default Ratio;