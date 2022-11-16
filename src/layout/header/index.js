import React, { Fragment } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import { Layout, Space } from 'antd';
import { QuestionCircleOutlined, MessageOutlined, UserOutlined } from '@ant-design/icons';
import './index.less';
import DropdownMenu from '../../components/user/DropdownMenu';

function Header({ fake }) {

    if (fake) {
        return (
            <Layout.Header className='header' />
        )
    }

    return (
        <Layout.Header
            className='header fixed'>
            <div className='logo'>
                <span>Hanab1</span>
            </div>
            <div className='empty'>

            </div>
            <div className='rightContainer'>
                <QuestionCircleOutlined />
                <MessageOutlined />
                <DropdownMenu>
                    <span>Hi {<UserOutlined />}</span>
                </DropdownMenu>
            </div>
        </Layout.Header>
    )
}

Header.propTypes = {
}

export default connect()(Header);