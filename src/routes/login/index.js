import React, { useEffect } from "react";
import { GithubOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import LoginForm from '../../components/login/LoginForm';
import './index.less';
import { connect } from "dva";
import request from '../../utils/request';

function Login({ history, dispatch }) {

    document.title = "登录";

    const handleLogin = (username, password) => {
        const form = new URLSearchParams();
        form.append("username", username);
        form.append("password", password);
        dispatch({
            type: 'auth/login',
            payload: form
        })
    }

    const hello = () => {
        const token = window.localStorage.getItem("token");
        request('/api/hello').then(res => {
            console.log(res);
        })
    }

    return (
        <div className="login-container">
            <div className="login-header">
            </div>
            <div className="login-content">
                <LoginForm handleSubmit={handleLogin} />
            </div>
            <div className="login-footer">
                <GithubOutlined onClick={hello} />
                <WeiboCircleOutlined />
            </div>
        </div>
    )
}

export default connect()(Login);