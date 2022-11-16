import React, { Fragment, useEffect, useState } from "react";
import { Divider, Form, Input, Button, Space, Select } from 'antd';
import { connect } from "dva";
import './index.less';
import ImageUpload from "../../../components/common/ImageUpload";
import EditableTags from "../../../components/common/EditableTags";
import PostsService from '../../../services/posts';
import MarkdownEditor from "../../../components/markdown/MarkdownEditor";

function PostEdit({ match }) {

    const [id, setId] = useState(null);
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState(null);
    const [content, setContent] = useState('');
    const [category, setCategory] = useState(null);
    const [tags, setTags] = useState([]);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (match.params.id) {
            Promise.all([PostsService.getById(match.params.id), PostsService.category()])
                .then(([data1, data2]) => {
                    const post = data1.data;
                    setId(post.id);
                    setTitle(post.title);
                    setCover(post.cover);
                    setContent(post.content);
                    setCategory(post.category);
                    setTags(post.tags);
                    setCategories(data2.data);
                })
        } else {
            PostsService.category().then(({ data }) => {
                setCategories(data);
            })
        }
    }, []);

    const handlePublish = () => {
        PostsService.publish({ title, cover, content, category, tags })
            .then(({ data }) => {
                setTitle(data.title);
                setCover(data.cover);
                setContent(data.content);
                setCategory(data.category);
                setTags(data.tags);
            });
    }

    return (
        <Fragment>
            <div className="post-edit-title">
                <Input
                    placeholder="请输入标题"
                    bordered={false}
                    value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <Divider />
            <div className="post-edit-content">
                <MarkdownEditor content={content} setContent={v => setContent(v)} />
            </div>
            <Divider />
            <Form
                className="post-settings"
                labelAlign="right"
                labelCol={{
                    span: 1
                }}
                wrapperCol={{
                    span: 24
                }}>
                <Form.Item label="封面">
                    <ImageUpload img={cover} setImg={(url) => setCover(url)} />
                </Form.Item>
                <Form.Item label="类别"
                    wrapperCol={{
                        span: 6
                    }}>
                    <Select
                        options={categories}
                        fieldNames={{
                            label: 'name',
                            value: 'name'
                        }}
                        value={category}
                        onChange={v => setCategory(v)}
                    />
                </Form.Item>
                <Form.Item label="标签">
                    <EditableTags tags={tags} setTags={v => setTags(v)} max={8} />
                </Form.Item>
                <div className="post-settings-footer">
                    <Space>
                        <Button type="default">保存至草稿箱</Button>
                        <Button type="primary" onClick={handlePublish}>发布</Button>
                    </Space>
                </div>
            </Form>
        </Fragment>
    )
}


export default connect()(PostEdit);