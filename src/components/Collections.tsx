import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

import { getCollections } from "../api/collections";

const Collections = () => {
	const [data, setData] = useState([]);

	const init = async () => {
		try {
			setData(await getCollections());
		} catch (e) {
			console.log(`Failed to fetch collections >> ${e}`);
		}
	};

	useEffect(() => {
		init();
	}, []);

	return (
		<SafeAreaView className="w-full bg-gray-100">
			<ScrollView className="w-full" style={{ width: "100%" }}>
				{data.map((e, index) => (
					<CollectionCard key={index} collection={e} />
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

const CollectionCard = ({ collection }) => {
	return (
		<View className="px-2 py-1">
			<View className="p-2 font-bold grid w-full bg-white border-solid border-[1px] border-gray-200 rounded-md">
				<Text className="font-bold text-lg"> {collection?.name} </Text>
				<Text className="text-gray-400"> Key : {collection?.key} </Text>
				<Text className="text-gray-400"> Author : {collection?.author?.name} </Text>
				<Text className="text-gray-400"> Url : {collection?.author?.url} </Text>
			</View>
		</View>
	);
};

export default Collections;
