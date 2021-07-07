import React, { useState, useEffect, useContext, createContext } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { getStorageData, saveStorageData, setStorageData, StorageKeys } from './auth_data'
import { message } from 'antd';


// Axios credentials
export const BASEURL = "http://api.atata57.com/api"
axios.defaults.headers.common['Authorization'] = 'Bearer ' + document.cookie


const authContext = createContext();
// Provider component that wraps your app and makes auth object available to any child component that calls useAuth().


export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object  and re-render when it changes.



export const useAuth = () => {
    return useContext(authContext);
};

// Provider hook that creates auth object and handles state


function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)

    let history = useHistory()

    const key = 'updatable';

    const signin = (email, password) => {
        return (
            axios.post(`${BASEURL}/admin/login`, { email, password })
                .then(
                    (res => {
                        setLoading(true)
                        message.loading({ content: 'Hold on - Logging In...', key });
                        setTimeout(() => {
                            message.success({ content: res.data.msg, key, duration: 2 });
                        }, 1000);
                        saveStorageData('user', res.data.data.admin)
                        document.cookie = `${res.data.data.token}; secure`
                        setTimeout(() =>
                            setUser(res.data.data.admin), 3000)
                        setTimeout(() =>
                            history.push('/'), 3000)
                    }))
                .catch(
                    (error => {
                        if (error.response) {

                            setLoading(true)
                            message.loading({ content: 'Loading...', key });
                            setTimeout(() => {
                                message.error({ content: error.response.data.errors, key, duration: 2 });
                            }, 1000);
                            setTimeout(() =>
                                setLoading(false), 3500)

                        } else if (error.request) {
                            setLoading(true)
                            message.loading({ content: 'Loading...', key });
                            setTimeout(() => {
                                message.warning({ content: 'Connect to an Internet', key, duration: 2 });
                            }, 1000);
                            setTimeout(() =>
                                setLoading(false), 3500)

                        } else {
                            history.push("/")
                        }
                    })
                )

        )
    };
    const logout = () => {
        return (
            axios.post(`${BASEURL}/admin/logout`)
                .then((response => {
                    setLoading(false)
                    message.loading({ content: 'Logging you Out...', key });
                    setTimeout(() => {
                        message.success({ content: "Logout Successful", key, duration: 2 });
                    }, 1000);
                    setTimeout(() =>
                        setUser(null), 3000)
                    setTimeout(() =>
                        localStorage.clear(), 3000)
                    setTimeout(() =>
                        history.push('/login'), 3000)

                }))
        )
    };

    return {
        user,
        loading,
        signin,
        logout,

    };
}