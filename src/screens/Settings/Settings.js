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
        <View style={styles.centered}>
            <Text style={styles.centered}> After Tax Income </Text>
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
            <Button
            title="Erase Data"
            color="#F43E3F"
            onPress={() => {Alert.alert('Data has been erased!'), setNeedsSpent(0.00), setWantsSpent(0.00), setSavingsSpent(0.00), setIncome(0.00)}
            }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    centered: {
        justifyContent: "center",
        alignItems: "center",
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
});