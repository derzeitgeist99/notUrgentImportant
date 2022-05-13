require("dotenv").config()
const Airtable = require("airtable")

const configureAirtableTable = (tableId) => {


    Airtable.configure({
        apiKey: process.env.AIRTABLE_API_KEY
    })

    const base = Airtable.base(process.env.AIRTABLE_BASE)
    const table = base(tableId)
    return table
}

const formatResults = (result) => {
    const formattedResults = {}
    result.map(record => {
        const fields = record.fields
        fields.taskId = record.id
        formattedResults[record.id] = fields
    }
    )
    return formattedResults

}

const getFormattedTasksByUserId = async (userId) => {

    const table = configureAirtableTable(process.env.AIRTABLE_TASKS_TABLE)

    query = {
        filterByFormula: `AND({userId} = "${userId}", {taskDescription} != '') `
    }
    result = await table.select(query).firstPage()
    formattedResults = formatResults(result)
    console.log("Called Airtable: getTasksByUserId");
    return formattedResults
}

const updateTask = async (payload, action) => {
    const table = configureAirtableTable(process.env.AIRTABLE_TASKS_TABLE)
    console.log("action", action);

    if (action === "update") {
        result = await table.update([payload])
    } else if (action === "create") {
        console.log("here");
        result = await table.create([payload])
    }

    formattedResults = formatResults(result)
    console.log(`Called Airtable: ${action} Task`);
    return formattedResults


}



module.exports = {
    configureAirtableTable,
    getFormattedTasksByUserId,
    updateTask
}