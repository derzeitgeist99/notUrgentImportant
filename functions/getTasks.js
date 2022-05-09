const { configureAirtableTable, getTasksByUserId } = require("./Utils/AirtableUtils")
const { getAccessTokenFromHeaders, validateAccessToken } = require("./Utils/auth")

exports.handler = async (event) => {



    token = getAccessTokenFromHeaders(event.headers)
    const user = await validateAccessToken(token)

    if (!user) {
        return ({ statusCode: 403, body: "Not authorized" })
    }

    // check if request is GET
    if (event.httpMethod != "GET") {
        return ({ statusCode: 405, body: "Bad Requst, must be GET" })
    }
    // // check if request contains data (name and score)
    // console.log(event.body);
    // body = JSON.parse(event.body)
    // if (typeof body.userId === "undefined") {
    //     return ({ statusCode: 405, body: "Bad Requst,missing data" })
    // }

    try {

        const table = await configureAirtableTable(process.env.AIRTABLE_TASKS_TABLE)
        formattedRecords = await getTasksByUserId(user.sub, table)


        return (
            {
                statusCode: 200,
                body: JSON.stringify(formattedRecords)
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