import React, { Component} from 'react';
import { SafeAreaView, StyleSheet, Text, View , ScrollView} from 'react-native';
import { useRhinoState, useRhinoValue } from "react-rhino"

import {
    PieChart,
    StackedBarChart,
    Dimensions
  } from 'react-native-chart-kit';


export default function Landing() {
    const income = useRhinoValue("income")
    const wants = Number((income * 0.5).toFixed(2))
    const needs = Number((income * 0.3).toFixed(2))
    const savings = Number((income * 0.2).toFixed(2))
    const wantsSpent = Number(useRhinoValue("wants").toFixed(2))
    const needsSpent = Number(useRhinoValue("needs").toFixed(2))
    const savingsSpent = Number(useRhinoValue("savings").toFixed(2))
    
    return(
        <View>
        <PieChart
        data={[
          {
            name: '',
            amount: wantsSpent,
            color: 'rgba(255, 153, 51, 1)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: '',
            amount: wants-wantsSpent,
            color: 'rgba(255, 204, 153, 1)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: '',
            amount: needsSpent,
            color: 'rgba(255, 51, 51, 1)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: '',
            amount: needs-needsSpent,
            color: 'rgba(255, 153, 153, 1)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: '',
            amount: savingsSpent,
            color: 'rgba(51, 153, 255, 1)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: '',
            amount: savings-savingsSpent,
            color: 'rgba(153, 204, 255, 1)',
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
        accessor="amount"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //for the absolute number remove if you want percentage
      />
        <Text style={styles.centered}>Income: ${wantsSpent+needsSpent+savingsSpent}/{income}</Text>
        <Text style={styles.centered}>Wants: ${wantsSpent}/{wants}</Text>
        <Text style={styles.centered}>Needs: ${needsSpent}/{needs}</Text>
        <Text style={styles.centered}>Savings: ${savingsSpent}/{savings}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    centered: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
      },
});