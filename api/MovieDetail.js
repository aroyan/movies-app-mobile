import ApiManager from "./ApiManager";

export const MovieDetail = async (id) => {
    try {
        const result = await ApiManager(`movie/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            params: {
                language: 'en-US'
            }
        });
        return result;
    } catch (error) {
        return error;
    }
};
