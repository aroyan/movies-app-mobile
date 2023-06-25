import ApiManager from "./ApiManager";

export const Trending = async (data) => {
    try {
        const result = await ApiManager("trending/all/week", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        });
        return result;
    } catch (error) {
        return error;
    }
};
