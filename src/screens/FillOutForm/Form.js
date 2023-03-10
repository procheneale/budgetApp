import React from 'react';
import { StyleSheet, Button, Text, TextInput, View , Alert} from 'react-native';

export default function Landing() {
    return(
        <View>
            <Text style={styles.centered}> After Tax Income </Text>
            <TextInput
            style={styles.input}
            keyboardType="numeric"
            />
            <Text style={styles.centered}> Amount </Text>
            <TextInput
            style={styles.input}
            keyboardType="numeric"
            />
            <Button
            title="Wants"
            />
            <Button
            title="Needs"
            />
            <Button
            title="Savings"
            />
            <Button
            title="Submit"
            onPress={() => Alert.alert('Latest Transaction Submitted!')}
            />
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
      }
  });