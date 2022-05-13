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
        fields.taskKey = record.id
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

const updateTask = async (payload, action, user) => {
    const table = configureAirtableTable(process.env.AIRTABLE_TASKS_TABLE)
    console.log("action", action);

    switch (action) {
        case "update":
            console.log(payload);
            result = await table.update([payload])
            console.log(result);
            break;
        case "create":
            payload.fields.userId = user.sub
            result = await table.create([payload])
            break;
        case "delete":
            result = await table.destroy([payload["id"]])
            break;

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