import axios from "axios";

export const iconifyAPI = axios.create({
	baseURL: "https://api.iconify.design",
});
