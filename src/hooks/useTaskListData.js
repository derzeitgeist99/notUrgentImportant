import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { myFetch } from '../helperFunctions/fetch';

export default () => {
    const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();
    const downloadTaskListData = async () => {
        const token = await getAccessTokenSilently()
        const data = await myFetch("GET", token, "getTasks")
        setTaskListData(data)
        console.log("Calling from downloadTaskData");
    }
    const [taskListData, setTaskListData] = useState([])



    useEffect(() => {
        const init = async () => {
            const result = await downloadTaskListData()
            console.log("Calling from useEffect");
        }
        init()
    }, [])
    return [taskListData, downloadTaskListData]



}