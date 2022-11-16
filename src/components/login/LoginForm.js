import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import './LoginForm.less';

function LoginForm({ handleSubmit }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='login-form-container'>
            <div className='login-form-header'>
                <div className='login-form-header-title'>
                    Hanab1
                </div>
                <div className='login-form-header-desc'>
                    Code for Fun ~
                </div>
            </div>
            <Form className='login-form'>
                <Form.Item>
                    <Input
                        prefix={<UserOutlined />}
                        placeholder={"请输入用户名"}
                        value={username} onChange={e => setUsername(e.target.value)} />
                </Form.Item>
                <Form.Item>
                    <Input.Password
                        prefix={<LockOutlined />}
                        placeholder={"请输入密码"}
                        value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Item>

                <Button className='submit-btn' 
                    htmlType='submit'
                    type='primary'
                    onClick={() => handleSubmit(username, password)}>Sign in</Button>

            </Form>
        </div>
    )
}

LoginForm.propTypes = {
    handleSubmit: PropTypes.func
}

export default LoginForm;