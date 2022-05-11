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

const getFormattedTasksByUserId = async (userId) => {

    table = configureAirtableTable(process.env.AIRTABLE_TASKS_TABLE)


    query = {
        filterByFormula: `AND({userId} = "${userId}", {taskDescription} != '') `
    }
    result = await table.select(query).firstPage()

    const formattedResults = {}
    result.map(record => {
        const fields = record.fields
        fields.taskId = record.id
        formattedResults[record.id] = fields
    }
    )
    console.log("Called Airtable: getTasksByUserId");
    return formattedResults
}



module.exports = {
    configureAirtableTable,
    getFormattedTasksByUserId
}