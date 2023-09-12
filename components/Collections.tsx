import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getCollections } from "../src/api/collections";

const Collections = () => {
	const [data, setData] = useState([]);

	const init = async () => {
		setData(await getCollections());
	};

	useEffect(() => {
		init();
	}, []);

	return (
		<SafeAreaView>
			<ScrollView>
				<Text>{JSON.stringify(data, null, 2)}</Text>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Collections;
