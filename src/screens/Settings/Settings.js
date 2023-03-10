import React from 'react';
import { StyleSheet, Button, Text, View , Alert} from 'react-native';

export default function Settings() {
    return(
        <View style={styles.centered}>
            <Button
            title="Erase Data"
            onPress={() => Alert.alert('Data has been erased!')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
});