import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Switch, Alert } from 'react-native';
import { useState } from 'react';



export default function App() {
	const [counter, changeNumber] = useState(0);
	const [background_color, bg_change] = useState("rgb(230, 250, 250)");

	const [background_colorButton, bg_change_button] = useState("white");

	const [border_color, border_change_color] = useState("rgba(0, 0, 0, 0.4)");

	const [font_color, font_change_color] = useState("black");

	let message = "This is my first react native android app, created by Omar Mohamed aka Rodan0x1";

  return (
    <View style={
	{
		backgroundColor: background_color,
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	}
    }>

	<View style={[styles.switchView, {backgroundColor: background_color, borderColor: border_color}]}>

	  {/* for the text */}
	  <Text style={[styles.switchViewText, {color: font_color}]}> Dark Theme </Text>

	  {/* for the light theme */}
	  <TouchableOpacity style={[styles.lightButton, {borderColor: border_color}]} onPress={() => {
		  bg_change("rgb(230, 250, 250)"); 
		  bg_change_button("white"); 
		  border_change_color("rgba(0, 0, 0, 0.4)");
		  font_change_color("black");
	  }}>
		<Text style={{color: font_color}}> Light </Text>
	  </TouchableOpacity>

	  {/* for the dark theme */}
	  <TouchableOpacity style={[styles.darkButton, {borderColor: border_color}]} onPress={() => {
		  bg_change("#041014"); 
		  bg_change_button("#041014"); 
		  border_change_color("rgba(255, 255, 255, 0.5)");
		  font_change_color("white");
	  }}>
	  	<Text style={{color: font_color}}> Dark </Text>
	  </TouchableOpacity>

	</View>

      <View style={styles.numberView}>
        <Text style={styles.numberText}> {counter} </Text>
      </View>

      <TouchableOpacity style={styles.generateButton}
      onPress={() => changeNumber(Math.floor(Math.random() * 100 - 0 + 0))}>
        <Text style={styles.generateButtonText}>Generate</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetButton}
      onPress={() => changeNumber(0)}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.infoButton}
      onPress={() => Alert.alert("Info", message, [
        {
          name: "ok"
        },
      ])}>
        <Text style={styles.infoText}>?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
	  backgroundColor: "rgb(230, 250, 250)",
  },

  numberView: {
    backgroundColor: "white",
    width: "30%",
    alignItems: "center",
    borderColor: "rgba(0, 0, 240, 0.8)",
    borderWidth: 2,
    borderStyle: "solid",
	  borderRadius: 20,
  },

  numberText: {
    color: "black",
    fontSize: 50,
    fontFamily: "sans-serif",
    fontWeight: "thin",
  },

  infoText: {
    color: "black",
    fontSize: 25,
  },

  infoButton: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: "center",
    elevation: 5,
    backgroundColor: "rgba(240, 240, 240, 1)",
    position: "absolute",
    bottom: 10,
    left: 10,
  },

  generateButton: {
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 15,
    backgroundColor: "rgba(240, 240, 240, 1)",
    alignItems: "center",
    position: "absolute",
    bottom: 300,
    right: 55,
  },

  generateButtonText: {
    color: "black",
    fontSize: 20,
    padding: 3,
    paddingLeft: 6,
    paddingRight: 6,
  },

  resetButton: {
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 15,
    backgroundColor: "rgba(240, 240, 240, 1)",
    alignItems: "center",
    position: "absolute",
    bottom: 300,
    left: 55,
  },

  resetButtonText: {
    color: "black",
    fontSize: 20,
    padding: 3,
    paddingLeft: 6,
    paddingRight: 6,
  },

  switchView: {
	backgroundColor: "white",
	borderColor: "rgba(0, 0, 0, 0.4)",
	borderWidth: 1,
	borderStyle: "solid",
	borderRadius: 15,
	width: 160,
	alignItems: "center",
	position: "absolute",
	top: 30,
	right: 10,
  },

  switchViewText: {
	marginTop: 5,
	color: "black",
	fontSize: 18,
	fontWeight: "bold",
	fontFamily: "sans-serif",
	height: 40,
	marginBottom: 15,
  },

  lightButton: {
	  borderColor: "rgba(0, 0, 0, 0.4)",
	  borderWidth: 1,
	  borderStyle: "solid",
	  borderRadius: 15,
	  position: "absolute",
	  left: 7,
	  bottom: 6,
	  width: 40,
	  alignItems: "center",
  },

  darkButton: {
	borderColor: "rgba(0, 0, 0, 0.4)",
	borderWidth: 1,
	borderStyle: "solid",
	borderRadius: 15,
	position: "absolute",
	right: 7,
	bottom: 6,
	width: 40,
	alignItems: "center",
  },

});
