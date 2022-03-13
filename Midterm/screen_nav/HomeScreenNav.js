import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import BillDetailScreen from "../screens/BillDetailScreen";

const Stack = createStackNavigator();

export default function HomeScreenNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Bill Detail" component={BillDetailScreen} />
    </Stack.Navigator>
  );
}