const { formatResults, configureAirtableTable } = require("./AirtableUtils")


const updateTaskByCase = async (payload, action, user) => {
    const table = configureAirtableTable(process.env.AIRTABLE_TASKS_TABLE)
    console.log("action", action);

    switch (action) {
        case "update":
            console.log(payload);
            result = await table.update([payload])
            console.log(result);
            break;
        case "create":
            console.log(payload);
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
    updateTaskByCase
}