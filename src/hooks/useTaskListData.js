import React, { useState, useEffect, useLayoutEffect } from 'react';
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
            console.log(taskListData);
        }
        init()
    }, [])

    const updateIncrementallyTaskListdata = (newEntry) => {
        const taskKey = Object.keys(newEntry)[0]
        console.log(taskKey);
        const newTaskList = taskListData
        newTaskList[taskKey] = newEntry[taskKey]
        setTaskListData(newTaskList)
        console.log("updateIncrementallyTaskListdata", taskListData);
    }

    return [taskListData, downloadTaskListData, setTaskListData, updateIncrementallyTaskListdata]



}