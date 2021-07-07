import React, { useState, useEffect, useContext, createContext } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { getStorageData, saveStorageData, setStorageData, StorageKeys } from './auth_data'
import { Button, message } from 'antd';


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

    const signin = (email, password) => {
        return (
            axios.post(`${BASEURL}/admin/login`, { email, password })
                .then(
                    (res => {
                        setLoading(true)
                        console.log(res.data.data.admin)
                        message.loading({ content: 'Hold on - Logging In...' });
                        setTimeout(() => {
                            message.success({ content: res.data.msg });
                        }, 1000);
                        saveStorageData('user', res.data.data.admin)
                        document.cookie = `${res.data.data.token}; secure`
                        setTimeout(() =>
                            setUser(res.data.data.admin), 3000)
                        setTimeout(() =>
                            history.push('/'), 3000)
                    }))
            // .catch(
            //     (error => {
            //         console.log(error)
            //         // message.loading({ content: 'Loading...' });
            //         // setTimeout(() => {
            //         //     message.error({ content: err.data });
            //         // }, 1000);
            //     }
            //     )
            // )
        )
    };
    const logout = () => {
        return (
            axios.get(`${BASEURL}/auth/logout`)
                .then((response => {
                    setUser(null)
                    localStorage.clear()
                    history.push('/')
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