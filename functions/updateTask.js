const { configureAirtableTable, getTasksByUserId, updateTask } = require("./Utils/AirtableUtils")
const { authorizeRequest } = require("./Utils/eventCheck")

exports.handler = async (event) => {

    const user = await authorizeRequest(event, "POST")
    if (!user.sub) {
        return user
    }

    // check if request contains data
    const body = JSON.parse(event.body)


    if (typeof body.action === "undefined") {
        return ({ statusCode: 405, body: "Bad Requst,missing data" })
    }

    const action = body.action
    const payload = body
    delete payload.action


    try {

        const result = await updateTask(body, action, user)
        console.log(result);
        return (
            {
                statusCode: 200,
                body: JSON.stringify(result)
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
