
import React, { Component } from "react";


import StackNavigator from "./navigation/stackNavigator"
import { NavigationContainer } from  '@react-navigation/native';





export default class App extends Component {
  render() {
    return (
        <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>


    
      
    )
  }
}
