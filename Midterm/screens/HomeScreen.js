import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text } from 'react-native';
import BillSummary from '../components/BillSummary';

// displays a list of past bills
export default function HomeScreenNav() {
    return (
      <SafeAreaView>
        <Text>Home Screen</Text>
        <BillSummary/>
      </SafeAreaView>
    );
  }