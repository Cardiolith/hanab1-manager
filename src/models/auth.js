import api from '../services/auth';
import { routerRedux } from 'dva/router';
import { message } from 'antd';

const { loginUser } = api;

export default {
    namespace: 'auth',

    state: {
        
    },

    reducers: {
        succeed(state, { payload }) {
            window.localStorage.setItem("token", payload.token);
            return { authenticated: true, token: payload.token };
        },

        failure(state, { payload }) {
            window.localStorage.removeItem("token");
            return { authenticated: false };
        }
    },

    effects: {
        *login({ payload }, { put, call, select }) {
            const { data } = yield call(loginUser, payload)
            if (!data.error) {
                yield put({ type: 'app/query' });
                yield put(routerRedux.push('/dashboard'));
                yield put({ type: 'succeed', payload: { token: data.token } });
            } else {
                yield put({ type: 'failure' })
            }
        },
    }
}