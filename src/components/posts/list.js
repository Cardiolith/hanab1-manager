import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { List, Space } from "antd";
import { NavLink } from "dva/router";
import { LikeOutlined, MessageOutlined } from "@ant-design/icons";

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
)

function PostList({ posts }) {

    return (
        <Fragment>
            <List
                itemLayout="vertical"
                dataSource={posts}
                renderItem={(item) => (
                    <List.Item
                        actions={[
                            <IconText icon={LikeOutlined} text="123" key="list-vertical-like" />,
                            <IconText icon={MessageOutlined} text="123" key="list-vertical-msg" />
                        ]}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src={item.cover}
                            />
                        }>
                        <List.Item.Meta
                            title={<NavLink to={`/posts/${item.id}/edit`}>{item.title}</NavLink>} />
                        {item.content}
                    </List.Item>
                )}
            />
        </Fragment>
    )
}

PostList.propTypes = {
    posts: PropTypes.array
}

export default PostList;