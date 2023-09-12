import { iconifyAPI } from "../utils/network";

export async function getCollections() {
	const arr = [];
	try {
		const { data } = await iconifyAPI.get("/collections");
		Object.keys(data).forEach((key) => {
			arr.push({ key, ...data[key] });
		});
	} catch (err) {
		console.error(err);
	}
	return arr;
}
