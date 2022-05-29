import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import lawScreen from "../screens/studentScreens/LawScreen";
import braggsLaw from "../screens/studentScreens/BraggsLaw";
import coulombsLaw from "../screens/studentScreens/CoulombsLaw";
import HubblesLaw from "../screens/studentScreens/HubblesLaw"
import gaussLaw from "../screens/studentScreens/GaussLaw";
import ohmsLaw from "../screens/studentScreens/OhmsLaw";



const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="lawScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="lawScreen" component={lawScreen} />
<Stack.Screen name="braggsLaw" component={braggsLaw}/>
      <Stack.Screen name="hubblesLaw" component={HubblesLaw}/>
      <Stack.Screen name="colulombsLaw" component={coulombsLaw}/>
        <Stack.Screen name="gaussLaw" component={gaussLaw}/> 
          <Stack.Screen name="ohmsLaw" component={ohmsLaw}/>
       

    </Stack.Navigator>
  );
};  

export default StackNavigator;
