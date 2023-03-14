import React, { useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View , Alert, } from 'react-native';

import CurrencyInput from 'react-native-currency-input';
import { useRhinoState, useRhinoValue } from "react-rhino"

export default function Landing() {
    const [amount, setAmount] = useState(0.00);
    const [category, setCategory] = useState('')
    const [wantsSpent, setWantsSpent] = useRhinoState("wants");
    const [needsSpent, setNeedsSpent] = useRhinoState("needs");
    const [savingsSpent, setSavingsSpent] = useRhinoState("savings");
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
                color='white'
            />
            <Button
            title="Wants"
            onPress={() => setCategory('wants')}
            color="rgba(255, 153, 51, 1)"
            />
            <Button
            title="Needs"
            onPress={() => setCategory('needs')}
            color="rgba(255, 51, 51, 1)"
            />
            <Button
            title="Savings"
            onPress={() => setCategory('savings')}
            color="rgba(51, 153, 255, 1)"
            />
            
            <Button
            title="Submit"
            color='#443737'
            onPress={() => {
                if (category == ''){
                    Alert.alert('Please tap a category!')
                }else if (amount == 0.00){
                    Alert.alert('Please enter an amount!')
                }else{
                    if (category == 'wants'){
                        setWantsSpent(amount + wantsSpent)
                    }else if (category == 'needs'){
                        setNeedsSpent(amount + needsSpent)
                    }else{
                        setSavingsSpent(amount + savingsSpent)
                    }
                    Alert.alert('Latest Transaction Submitted!'), setCategory(''), setAmount(0.00)
                }   
                }
            }
            />
        </View>
    );
}



const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        bottom:0,
        left:0,
      },
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
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      },
  });