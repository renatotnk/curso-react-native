import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TelaA, TelaB, TelaC } from '../screens'

type Props = {}

const NavStack = createNativeStackNavigator()

const Stack = (props: Props) => {
	return (
		<NavStack.Navigator
			initialRouteName='TelaA'
			screenOptions={{ headerShown: false }}>
			<NavStack.Screen
				name='TelaA'
				options={{ title: 'Informações inciais' }}
				component={TelaA}
			/>
			<NavStack.Screen name='TelaB' component={TelaB} />
			<NavStack.Screen name='TelaC' component={TelaC} />
		</NavStack.Navigator>
	)
}

export default Stack
