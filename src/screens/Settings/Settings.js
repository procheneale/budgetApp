import React, { useState } from 'react';
import { StyleSheet, Button, Text, View , Alert} from 'react-native';

import CurrencyInput from 'react-native-currency-input';
import { useRhinoState } from "react-rhino"

export default function Settings() {
    const [income, setIncome] = useRhinoState("income");
    const [wantsSpent, setWantsSpent] = useRhinoState("wants");
    const [needsSpent, setNeedsSpent] = useRhinoState("needs");
    const [savingsSpent, setSavingsSpent] = useRhinoState("savings");
    return(
        <View style={styles.mainConatinerStyle}>
            <View style={styles.amt}>
                <Text style={styles.centered}> After Tax Income </Text>
            </View>
            <View style={styles.in}>
                <CurrencyInput
                    value={income}
                    style={styles.inputBasic}
                    onChangeValue={setIncome}
                    prefix={'$ '}
                    signPosition="beforePrefix"
                    delimiter=","
                    precision={2}
                    separator="."
                    minValue={0}
                    color='white'
                />
            </View>
            <View style={styles.floatingMenuButtonStyle}>
                <Button
                title="Erase Data"
                color="#F43E3F"
                onPress={() => {Alert.alert('Data has been erased!'), setNeedsSpent(0.00), setWantsSpent(0.00), setSavingsSpent(0.00), setIncome(0.00)}
                }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centered: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
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
      amt:{
        alignSelf: 'center',
        position: 'absolute',
        bottom: 475
      },
      in:{
        alignSelf: 'center',
        position: 'absolute',
        bottom: 400
      },
      mainConatinerStyle: {
        flexDirection: 'column',
        flex: 1
      },
      floatingMenuButtonStyle: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 50
    },
});