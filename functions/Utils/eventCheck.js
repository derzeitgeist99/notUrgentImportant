const { getAccessTokenFromHeaders, validateAccessToken } = require("./auth")
const authorizeRequest = async (event, requestType) => {

    token = getAccessTokenFromHeaders(event.headers)
    console.log(token);
    const user = await validateAccessToken(token)
    console.log(user);


    if (!user) {
        console.log("User Failed");
        return ({ statusCode: 403, body: "Not authorized" })
    }

    // check if request is GET
    if (event.httpMethod !== requestType) {
        return ({ statusCode: 405, body: `Bad Requst, must be ${requestType}` })
    }
    return (user)

}

module.exports = {
    authorizeRequest
}

