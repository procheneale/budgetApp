import React, { useState } from 'react';
import { StyleSheet, Button, Text, View , Alert} from 'react-native';

import CurrencyInput from 'react-native-currency-input';
import { useRhinoState } from "react-rhino"

export default function Settings() {
    //const [income, setIncome] = useState(0.00);
    const [income, setIncome] = useRhinoState("income");
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
            />
            <Button
            title="Erase Data"
            onPress={() => Alert.alert('Data has been erased!')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    centered: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
        fontWeight: 'bold'
      },
});