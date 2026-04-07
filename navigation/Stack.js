

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Pessoas from "./Screens/Pessoas";

export default function App(){
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home Screen" component={Home}/>
        <Stack.Screen name="Contato" component={Pessoas}/> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}