import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FriendsScreen from "../screens/FriendsScreen";
// import ToDoDetailScreen from '../screens/ToDoDetailScreen'

const Stack = createStackNavigator();

export default function FriendsScreenNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FriendsList" component={FriendsScreen} />
      {/* <Stack.Screen name="ToDoDetailScreen" component={ToDoDetailScreen} /> */}
    </Stack.Navigator>
  );
}