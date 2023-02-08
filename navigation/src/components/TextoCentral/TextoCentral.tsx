import React, { FC } from 'react'
import { View, Text } from 'react-native'

// import { Container } from './styles';

//interface Props {}

interface TextoCentralProps {
	corFundo?: string
	corTexto?: string
	children: any
}

const TextoCentral = (props: TextoCentralProps) => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: props.corFundo || '#000',
			}}>
			<Text
				style={{
					fontSize: 50,
					color: props.corTexto || '#FFF',
				}}>
				{props.children}
			</Text>
		</View>
	)
}

export default TextoCentral
