const { configureAirtableTable, getTasksByUserId } = require("./Utils/AirtableUtils")
const { authorizeRequest } = require("./Utils/eventCheck")

exports.handler = async (event) => {

    const user = await authorizeRequest(event, "POST")
    if (!user.sub) {
        return user
    }

    // check if request contains data
    const body = JSON.parse(event.body)

    if (typeof body.taskId === "undefined" || typeof body.taskDescription === "undefined") {
        return ({ statusCode: 405, body: "Bad Requst,missing data" })
    }



    try {
        //const table = await configureAirtableTable(process.env.AIRTABLE_TASKS_TABLE)
        return (
            {
                statusCode: 200,
                body: JSON.stringify("Data Sent")
            }
        )


    } catch (error) {
        return (
            {
                statusCode: 500,
                body: JSON.stringify("Something with Airtable", error)
            }
        )

    }
}
