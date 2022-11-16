import request from "../utils/request";

export default {
    loginUser: (params) => request("/api/login", {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params
    }),

    currentUser: () => request('/api/currentUser'),
}