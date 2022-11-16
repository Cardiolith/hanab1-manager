import React, { Fragment } from "react";
import { Space, Menu } from "antd";
import { Dropdown } from "antd";
import { NavLink } from "dva/router";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";

function DropdownMenu({ children }) {

    const userOptions = (<Menu items={
        [
            {
                label: <NavLink to="/user/settings">User Settings</NavLink>,
                key: "center",
                icon: <UserOutlined />
            },
            {
                type: "divider"
            },
            {
                label: <NavLink to="/login">退出</NavLink>,
                key: 'quit',
                icon: <LogoutOutlined />
            }
        ]
    }
    />);



    return (
        <Dropdown
            overlay={userOptions}
            placement="bottom">
            {children}
        </Dropdown>
    )
}

export default DropdownMenu;