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

const getTasksByUserId = async (userId, table) => {
    console.log(table);

    query = {
        filterByFormula: `AND({userId} = "${userId}", {taskDescription} != '') `
    }
    console.log(query);
    result = await table.select(query).firstPage()
    console.log("myResult", result);

    // I return list here, because I want to map over it
    const formattedResults = []
    result.map(record => {
        const fields = record.fields
        fields.taskId = record.id
        formattedResults.push(fields)
    }
    )

    return formattedResults
}

module.exports = {
    configureAirtableTable,
    getTasksByUserId
}