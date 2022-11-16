import React, { useState } from "react";
import { Upload, message } from 'antd';
import PropTypes from 'prop-types';
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import FileService from '../../services/file';

function ImageUpload({ img, setImg }) {

    const [loading, setLoading] = useState(false);

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{
                marginTop: "8px"
            }}>
                Upload
            </div>
        </div>
    );

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    const customUpload = (options) => {
        FileService.uploadImage({ file: options.file })
            .then(({ data }) => {
                setImg(data.url);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            setLoading(false);
        }
    };

    return (
        <Upload
            name="file"
            listType="picture-card"
            multiple={false}
            showUploadList={false}
            customRequest={customUpload}
            beforeUpload={beforeUpload}
            onChange={handleChange}>
            {
                img ? (<img src={img}
                    alt="cover"
                    style={{ width: "100%", height: "100%" }} />)
                    : (uploadButton)
            }
        </Upload>
    );
}

ImageUpload.propTypes = {
    img: PropTypes.string,
    setImg: PropTypes.func
};

export default ImageUpload;