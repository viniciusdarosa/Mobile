import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from '@expo/vector-icons/Entypo';

import Home from "./Screens/Home";
import Login from "./Screens/Login";

export default function App(){
  const Tab = createBottomTabNavigator();

  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveBackgroundColor: 'black',
        tabBarInactiveBackgroundColor: 'gray',
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: '#fff',
        headerStyle:{
          backgroundColor: '#e50505ff',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center' ,
        headerShown: true
      }}>
        <Tab.Screen name="Login" component={Login}
        options={{
          tabBarIcon: () => (<Entypo name="login" size={24} color="black" />)
        }}
        />
        <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: () => (<Entypo name="home" size={24} color="black" />)
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
  }