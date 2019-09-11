/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class App extends Component {
constructor() {
	super()
		this.state = {}
}

render() {
	return (
		<View style={styles.container}>
		
		<View style={styles.half1}>
		<Text style={styles.text}> 
		This is Green by 1/1
		</Text>
		</View>

		<View style={styles.half2}>

		<View style={[styles.half21, styles.half2x]}>
		<Text style={styles.text}> 
		This is Orange by 2/1
		</Text>
		</View>

		<View style={[styles.half22, styles.half2x]}>
		<Text style={styles.text}> 
		This is Yellow by 2/2
		</Text>
		</View>

		</View>

		

		</View>
		);
}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// flexDirection: 'row'
		//always colomn by default
	},

	half1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'green'
	},

	half2: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'blue'
	},

	half2x: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	half21: {
		backgroundColor: 'orange'
	},

	half22: {
		backgroundColor: 'yellow'
	},

	text: {
		fontSize: 25,
		color: 'black'
	}

	
})





