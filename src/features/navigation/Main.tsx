import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from '../movies/screens/Homescreen';
import {MovieScreen} from '../movies/screens/MovieScreen';



const MainStack = createStackNavigator();

export const Main = () => (
	<MainStack.Navigator>
		<MainStack.Screen name="Movies" component={HomeScreen} />
		<MainStack.Screen  name="Movie" component={MovieScreen} />
	</MainStack.Navigator>
);