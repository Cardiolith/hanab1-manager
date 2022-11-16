import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Input, Row, Select, Space, DatePicker } from 'antd';
import { connect } from "dva";
import PostsService from '../../services/posts';
import PostList from '../../components/posts/list';
import './index.less';

function Posts({ history }) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        PostsService.index({}).then(({ data }) => {
            setPosts(data);
        })
    }, []);


    return (
        <Fragment>
            <Row gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
            }}>
                <Col xs={24} sm={12} md={8} xl={4}>
                    <Input.Search placeholder="Search Name" />
                </Col>
                <Col xs={24} sm={12} md={8} xl={4}>
                    <Select
                        style={{ width: "100%" }}
                        defaultValue="Published">
                        <Select.Option key="all">All</Select.Option>
                        <Select.Option key="published">Published</Select.Option>
                        <Select.Option key="drafted">Drafted</Select.Option>
                    </Select>
                </Col>
                <Col xs={24} sm={12} md={8} xl={6}>
                    <DatePicker.RangePicker />
                </Col>
                <Col xs={24} sm={24} md={24} xl={10}>
                    <Row className="ant-row-space-between ant-row-middle">
                        <div>
                            <Button type="primary" style={{ marginRight: "16px" }}>Search</Button>
                            <Button>Reset</Button>
                        </div>

                        <Button style={{ float: "right" }} onClick={e => {
                            history.push({ pathname: "/posts/write" })
                            e.preventDefault();

                        }}>Create</Button>
                    </Row>
                </Col>
            </Row>
            <div className="post-table">
                <PostList posts={posts} />
            </div>
        </Fragment>
    );
}

export default connect()(Posts);