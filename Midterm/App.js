import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreenNav from './screens/HomeScreen';
import FriendsScreenNav from './screen_nav/FriendsScreenNav';
import AddBillScreen from './screens/AddBillScreen';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer style = {styles.container}>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#ffffff"
        inactiveColor="#2189D3"
        barStyle={{ backgroundColor: '#90D1FF' }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            let size;
            if (route.name === 'Home') {
              iconName = 'home';
              size = 50;
            } 
            else if (route.name === 'Add'){
              iconName = 'add-circle';
              size = 90;
            }
            else if (route.name === 'Friends'){
              iconName = 'contacts';
              size = 50;
            }
            return <Ionicons name={iconName} size={size} color={focused? "#ffffff":"#2189D3"} />;
          },
        })}
      >
          <Tab.Screen name="Home" component={HomeScreenNav}  options={{ header: () => null,}}/>
          <Tab.Screen name="Add" component={AddBillScreen}  options={{ header: () => null,}}/>
          <Tab.Screen name="Friends" component={FriendsScreenNav}  options={{ header: () => null,}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
