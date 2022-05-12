const { getFormattedTasksByUserId } = require("./Utils/AirtableUtils")

const { authorizeRequest } = require("./Utils/eventCheck")

exports.handler = async (event) => {

    const user = await authorizeRequest(event, "GET")
    if (!user.sub) {
        return user
    }

    try {


        formattedRecords = await getFormattedTasksByUserId(user.sub)

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