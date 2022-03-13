import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text } from 'react-native';
import BillSummary from '../components/BillSummary';

// displays a list of past bills
export default function HomeScreenNav() {
    return (
      <SafeAreaView>
        <Text>This is the home screen</Text>
        <BillSummary/>
      </SafeAreaView>
    );
  }