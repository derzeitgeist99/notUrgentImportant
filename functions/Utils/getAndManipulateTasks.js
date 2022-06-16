const { formatResults, configureAirtableTable } = require("./AirtableUtils")

const trimResults = (filter, results) => {
    // when entering edit Mode, user wants to see all tasks
    if (filter.all) {
        return results
    }
    // converting to array
    const allTaskIds = Object.keys(results)

    // Create list of task Id that I do not need
    const tasksWeDontShow = shuffle(allTaskIds, filter.count)
    // Delete the Ids I don't need
    for (let i = 0; i < tasksWeDontShow.length; i++) {
        delete results[tasksWeDontShow[i]]

    }
    return results

}

//https://javascript.info/task/shuffle
const shuffle = (array, desiredLength) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let t = array[i]
        array[i] = array[j]
        array[j] = t


    }
    const removeArray = array.slice(desiredLength)
    return removeArray
}

const getAndManipulateTasks = async (userId, filter) => {
    const table = configureAirtableTable(process.env.AIRTABLE_TASKS_TABLE)

    //didn't find operator for "any" in Airtable docs. Otherwise would use that.
    const tagFilter = (filter.tag === false) ? "" : `,{tag}=${filter.tag}`


    const query = {
        filterByFormula: `AND({userId} = "${userId}", {taskDescription} != ''${tagFilter}) `
    }

    console.log(query);
    result = await table.select(query).firstPage()
    const formattedResults = formatResults(result)
    const trimmedResults = trimResults(filter, formattedResults)
    console.log("Called Airtable: getTasksByUserId");
    return trimmedResults
}
module.exports = {
    getAndManipulateTasks
}