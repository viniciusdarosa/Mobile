import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./Screens/Home";
import Login from "./Screens/Login";

export default function App(){
  const Drawer = createDrawerNavigator();

  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Login" component={Login}/>
        <Drawer.Screen name="Home" component={Home}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
  }