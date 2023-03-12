import React, { useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View , Alert} from 'react-native';

import CurrencyInput from 'react-native-currency-input';
import { useRhinoState, useRhinoValue } from "react-rhino"

export default function Landing() {
    const hi = useRhinoValue("dark_mode")
    const [amount, setAmount] = useState(0.00);
    const [category, setCategory] = useState('')
    return(
        <View>
            <Text style={styles.centered}> Amount </Text>
            <CurrencyInput
                value={amount}
                style={styles.inputBasic}
                onChangeValue={setAmount}
                prefix={'$ '}
                signPosition="beforePrefix"
                delimiter=","
                precision={2}
                separator="."
                minValue={0}
            />
            <Button
            title="Wants"
            onPress={() => setCategory('wants')}
            />
            <Button
            title="Needs"
            onPress={() => setCategory('needs')}
            />
            <Button
            title="Savings"
            onPress={() => setCategory('savings')}
            />
            <Button
            title="Submit"
            onPress={() => {Alert.alert('Latest Transaction Submitted!'), setCategory(''), setAmount(0.00)}}
            />
            <Text>{hi}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    centered: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    inputBasic: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#cdcdcd',
        paddingHorizontal: 12,
        height: 54,
      },
  });