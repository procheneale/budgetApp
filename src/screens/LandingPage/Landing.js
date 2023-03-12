import React, { Component} from 'react';
import { SafeAreaView, StyleSheet, Text, View , ScrollView} from 'react-native';

import {
    PieChart,
    Dimensions
  } from 'react-native-chart-kit';


export default function Landing() {
    return(
        <View>
            <PieChart
            data={[
            {
                name: 'Seoul',
                population: 100,
                color: 'rgba(131, 167, 234, 1)',
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
            },
            {
                name: 'Toronto',
                population: 100,
                color: '#F00',
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
            },
            {
                name: 'New York',
                population: 100,
                color: '#ffffff',
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
            },
            {
                name: 'Moscow',
                population: 100,
                color: 'rgb(0, 0, 255)',
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
            },
            ]}
            width={300}
            height={220}
            chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
                borderRadius: 16,
            },
            }}
            style={{
            marginVertical: 8,
            borderRadius: 16,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute //for the absolute number remove if you want percentage
        />
        <Text style={styles.centered}>Wants:</Text>
        <Text style={styles.centered}>Needs:</Text>
        <Text style={styles.centered}>Savings:</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    centered: {
        textAlign: 'center',
        fontWeight: 'bold'
      },
});