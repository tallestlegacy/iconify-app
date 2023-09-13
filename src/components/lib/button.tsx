import { Pressable, Text } from "react-native";
import React from "react";

interface MButtonProps {
	title?: string;
	onPress?: Function;
}

export default function MButton(props: MButtonProps) {
	const handleClick = () => {
		props?.onPress();
	};

	return (
		<Pressable onPress={handleClick}>
			<Text> {props.title ?? ""} </Text>
		</Pressable>
	);
}
