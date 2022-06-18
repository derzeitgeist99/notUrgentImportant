import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { myFetch } from '../helperFunctions/fetch';

export default () => {
    const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();
    console.log(isAuthenticated)
    const downloadTaskListData = async () => {
        const token = await getAccessTokenSilently()
        const data = await myFetch("POST", token, "getTasks", taskListFilter)
        setTaskListData(data)
    }
    const [taskListData, setTaskListData] = useState([])
    const numberOfTasks = (window.localStorage.numberOfTasks >= 1) ? window.localStorage.numberOfTasks : 3
    const [taskListFilter, setTaskListfilter] = useState({ tag: false, count: numberOfTasks, all: false })

    useEffect(() => {
        const init = async () => {
            try {
                const result = await downloadTaskListData()
            } catch (error) {

            }
        }
        init()
    }, [taskListFilter, user, isAuthenticated])

    // Updates with data already in state
    const updateIncrementallyTaskListdata = (newEntry, action) => {
        const taskKey = Object.keys(newEntry)[0]
        const newTaskList = taskListData
        switch (action) {
            case "update":
                newTaskList[taskKey] = newEntry[taskKey]
                break
            case "create":
                newTaskList[taskKey] = newEntry[taskKey]
                break
            case "delete":
                delete newTaskList[taskKey]
                break
        }

        setTaskListData(newTaskList)
        console.log("updateIncrementallyTaskListdata", taskListData);
    }

    const setFilter = (filter) => {
        const filterEntries = Object.entries(filter)[0]
        setTaskListfilter(taskListFilter, taskListFilter[filterEntries[0]] = filterEntries[1])
        console.log(taskListFilter);
        downloadTaskListData()
    }


    return {
        taskListData,
        downloadTaskListData,
        setTaskListData,
        updateIncrementallyTaskListdata,
        setFilter,
        taskListFilter

    }

}