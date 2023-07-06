import ApiManager from "./ApiManager";

export const MovieUpcoming = async (data) => {
    try {
        const result = await ApiManager("movie/upcoming?language=en-US", {
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
