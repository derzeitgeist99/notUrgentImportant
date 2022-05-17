const { getAndManipulateTasks } = require("./Utils/getAndManipulateTasks")

const { authorizeRequest } = require("./Utils/eventCheck")

exports.handler = async (event) => {

    const user = await authorizeRequest(event, "POST")
    if (!user.sub) {
        return user
    }

    const filter = JSON.parse(event.body)


    try {

        formattedRecords = await getAndManipulateTasks(user.sub, filter)

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