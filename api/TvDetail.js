import ApiManager from "./ApiManager";

export const TvDetail = async (id) => {
    try {
        const result = await ApiManager(`tv/${id}`, {
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
