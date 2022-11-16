import store from 'react-router-redux';
import { routerRedux } from 'dva/router';
import { DashboardOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import UserService from '../services/auth';
const { currentUser } = UserService;

const goDashboard = () => {
    routerRedux.push('/dashboard');
}

export default {
    namespace: 'app',

    state: {
        user: {},
        menu: [
            {
                name: "Dashboard",
                icon: <DashboardOutlined />,
                key: '/dashboard'
            },
            {
                name: "Posts",
                icon: <ShoppingOutlined />,
                key: '/posts'
            },
            {
                name: "Users",
                icon: <UserOutlined />,
                key: '/users'
            }
        ],
        locationPathname: '',
        authenticated: false,
        token: null
    },

    subscriptions: {
        setup({ dispatch }) {
            dispatch({ type: 'query' })
        },

        setupHistory({ dispatch, history }) {
            history.listen(location => {
                dispatch({
                    type: 'updateState',
                    payload: {
                        locationPathname: location.pathname
                    }
                })
            })
        }
    },

    effects: {
        *query({ payload }, { call, put, select }) {
            const { authenticated } = yield select(_ => _.authenticated);
            if (authenticated) {
                goDashboard();
                return;
            }

            const token = window.localStorage.getItem("token");
            if (token) {
                const currentUser = yield call(currentUser)
            }
        },

        *logout({ payload }, { call, put }) {

        }
    },

    reducers: {
        updateState(state, { payload }) {
            return {
                ...state,
                ...payload
            }
        }
    }
}