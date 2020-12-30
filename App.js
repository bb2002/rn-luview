import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

// Components
import LaunchIndex from './pages/Launch.index';

const Stack = createStackNavigator();

const screenOptions = {
	headerShown: false
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={screenOptions}>
				<Stack.Screen name="Launch" component={LaunchIndex} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}