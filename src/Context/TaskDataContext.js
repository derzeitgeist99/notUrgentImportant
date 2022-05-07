import React, { useContext, useState } from "react";

const TaskDataContext = React.createContext([])
const useTaskData = () => useContext(TaskDataContext)

const TaskDataProvider = ({ children }) => {
    const [taskData, setTaskData] = useState([])

    return (
        <TaskDataContext.Provider value={[taskData, setTaskData]}>
            {children}
        </TaskDataContext.Provider>
    )
}

export { TaskDataProvider, useTaskData }