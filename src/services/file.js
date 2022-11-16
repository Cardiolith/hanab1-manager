import request from "../utils/request";

export default {
    uploadImage: (data) => (
        request('/api/file/upload', {
            method: 'post',
            headers: { "Content-Type": "multipart/form-data" },
            data
        })
    )
}