import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TelaA from './src/screens/TelaA'
import TelaB from './src/screens/TelaB'
import TelaC from './src/screens/TelaC'

const App: React.FC = () => {
	return (
		<SafeAreaView style={styles.container}>
			<TelaA></TelaA>
			<TelaB></TelaB>
			<TelaC></TelaC>
			<StatusBar style='auto' />
		</SafeAreaView>
	)
}

export default App

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
