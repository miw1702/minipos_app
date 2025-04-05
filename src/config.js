const config = {
    apiPath: "https://minipos-api-r39d.onrender.com",
    headers: () => {
        return {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        };
    },
};
export default config;