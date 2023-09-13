import { StyleSheet, View } from "react-native";
import Collections from "./src/components/Collections";

export default function App() {
	return (
		<View style={styles.container}>
			<Collections />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
