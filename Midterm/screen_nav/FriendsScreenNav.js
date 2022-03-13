import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import ToDoScreen from './ToDoScreen'
// import ToDoDetailScreen from '../screens/ToDoDetailScreen'

const Stack = createStackNavigator();

export default function FriendsScreenNav() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="To Dos" component={ToDoScreen} />
      <Stack.Screen name="ToDoDetailScreen" component={ToDoDetailScreen} /> */}
    </Stack.Navigator>
  );
}