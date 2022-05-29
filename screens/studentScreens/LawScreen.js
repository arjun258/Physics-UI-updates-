import React, { Component } from "react";
import { Text, StyleSheet, View, ImageBackground,TouchableOpacity, SafeAreaView, Platform, StatusBar, Image } from "react-native";


import { RFValue } from "react-native-responsive-fontsize";
import StackNavigator from "../../navigation/stackNavigator";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

let customFonts = {
    "Bubblegum-Sans": require("../fonts/BubblegumSans-Regular.ttf")
  };




export default class LawScreens extends Component {
   constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
     
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    
  }
  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
    return (
      <View style={styles.container}>
 <SafeAreaView style={styles.droidSafeArea} />
{/*background*/}
<ImageBackground source={require('./images/katie-azi-4BYkFI5rgdM-unsplash.jpg')}  style={styles.image}>   
{/* header*/} 
 <Image style={{width:277,height:159,marginLeft:41,marginRight:42}}source={require("./images/pngtree-hanging-indicator-board-png-image_3553747-removebg-preview.png")}/>
    <View>
    <Text style={styles.headingText}>Laws</Text>
    </View>
    {/*ohms law*/}
<View>
        <TouchableOpacity style={[styles.rectangle1, {marginTop:RFValue(40)}]}
           onPress={() => (this.props.navigation.navigate('ohmsLaw'))}>
        </TouchableOpacity>
</View>
{/*hubbles law*/}
<View>
        <TouchableOpacity style={styles.rectangle2}
           onPress={() => (this.props.navigation.navigate('hubblesLaw'))}>
        
        </TouchableOpacity>
</View>
{/*gauss law*/}
<View>
        <TouchableOpacity style={styles.rectangle3}
           onPress={() => (this.props.navigation.navigate('gaussLaw'))}>
         
        </TouchableOpacity>
        </View>

{/*coulombs Law*/}
        <TouchableOpacity style={styles.rectangle4}
           onPress={() => (this.props.navigation.navigate('colulombsLaw'))}>
      
        </TouchableOpacity>

        {/*Braggs Law*/}
        <TouchableOpacity style={styles.rectangle5}
           onPress={() => (this.props.navigation.navigate('braggsLaw'))}>
      
        </TouchableOpacity>
       
        {/*ohms text*/}
        <View>
        <TouchableOpacity
         onPress={() => (this.props.navigation.navigate('ohmsLaw'))}>
        
 <Text  style={styles.customText}>Ohms Law</Text>
</TouchableOpacity>
</View>
{/*hubbles text*/}
 <View>
        <TouchableOpacity
           onPress={() => (this.props.navigation.navigate('hubblesLaw'))}>
        
 <Text  style={styles.customText2}>Hubbles Law </Text>
</TouchableOpacity>
</View>

{/*gauss text*/}
        <View>
        <TouchableOpacity
         onPress={() => (this.props.navigation.navigate('gaussLaw'))}>
        
 <Text  style={styles.customText3}>Gauss Law</Text>
</TouchableOpacity>
</View>

      <View>
        <TouchableOpacity
         onPress={() => (this.props.navigation.navigate('colulombsLaw'))}>
        
 <Text  style={styles.customText4}>Coulombs Law</Text>
</TouchableOpacity>
</View>

{/*gauss text*/}
        <View>
        <TouchableOpacity
         onPress={() => (this.props.navigation.navigate('braggsLaw'))}>
        
 <Text  style={styles.customText5}>Braggs Law</Text>
</TouchableOpacity>
</View>


     
      </ImageBackground>

                  
        
        
      </View>

    
    );
  }
}
}

const styles = StyleSheet.create({
  studentButton: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "left",
    borderRadius: RFValue(30),
    backgroundColor: "",
    marginTop:100,
    

    
  },
  googleText: {
    color: "white",
    fontSize: RFValue(30),
    alignItems: "center",
    fontFamily: "Bubblegum-Sans",
  },
  customText:{
    			position: "absolute",
		width: "160",
		height: "47",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Bubblegum-Sans",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 40,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		marginTop:-295,
		letterSpacing: 0.1,
    marginLeft:15
  },
  customText2:{
        			position: "absolute",
		width: "160",
		height: "47",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Bubblegum-Sans",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 40,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "right",
	
		letterSpacing: 0.1,
    marginLeft:125,
    marginTop:-230
  },
   customText3:{
    			position: "absolute",
		width: "160",
		height: "47",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Bubblegum-Sans",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 40,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		marginTop:-170,
		letterSpacing: 0.1,
    marginLeft:13
  },
    customText4:{
    			position: "absolute",
		width: "160",
		height: "47",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Bubblegum-Sans",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 40,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		marginTop:-100,
		letterSpacing: 0.1,
    marginLeft:100
  },
    customText5:{
    			position: "absolute",
		width: "160",
		height: "47",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Bubblegum-Sans",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 40,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		marginTop:-45,
		letterSpacing: 0.1,
    marginLeft:13
  },

  rectangle1: {
    backgroundColor: "rgba(217,217,217,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    
    width: 180,
    height: 47,
   
    opacity: 0.2,
    marginLeft:8,
    marginRight:186,
    marginBottom:14
  },
  
rectangle2: {
    backgroundColor: "rgba(217,217,217,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    backdropFilter: "blur(4px)",
    width: 204,
    height: 58,
    mixBlendMode: "difference",
    opacity: 0.2,
    marginLeft:120,
  },
    rectangle3: {
    backgroundColor: "rgba(217,217,217,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    backdropFilter: "blur(4px)",
    width: 172,
    height: 47,
    mixBlendMode: "difference",
    opacity: 0.2,
    marginTop:10,
    marginLeft:10
  },
  rectangle4: {
    backgroundColor: "rgba(217,217,217,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    backdropFilter: "blur(4px)",
    width: 225,
    height: 57,
    mixBlendMode: "difference",
    opacity: 0.2,
    marginLeft:100,
    marginRight:10,
    marginTop:10
  },
      rectangle5: {
    backgroundColor: "rgba(217,217,217,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    backdropFilter: "blur(4px)",
    width: 190,
    height: 47,
    mixBlendMode: "difference",
    opacity: 0.2,
    marginTop:10,
    marginLeft:10
  },
  
  headingText: {
   
    fontSize: RFValue(60),
    alignItems: "center",
    alignSelf: "center",
    fontFamily: "Bubblegum-Sans",
    color:"black",
    marginTop:-85,
    marginLeft:121,
    marginRight:115
  },
    container: {
    flex: 1,
  },
  image: {
    flex: 1,
    
    resizeMode:"cover",            
  },
   droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },


  
});
