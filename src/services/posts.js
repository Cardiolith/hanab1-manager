import request from "../utils/request";

export default {
    index: (params) => request('/api/posts', {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(params)
    }),

    publish: (data) => request('/api/posts/publish', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(data)
    }),

    getById: (id) => request(`/api/posts/${id}`),

    category: () => request('/api/category'),
}