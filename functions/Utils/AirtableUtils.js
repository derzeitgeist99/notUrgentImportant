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





module.exports = {
    configureAirtableTable,
    formatResults
}