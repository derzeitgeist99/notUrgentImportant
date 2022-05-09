require("dotenv").config()
const jwt = require("jsonwebtoken")
const jwks = require("jwks-rsa")
const jwksClient = jwks({
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
    audience: process.env.AUTH0_AUDIENCE
})



const { promisify } = require("util")

const getAccessTokenFromHeaders = (header) => {
    const rawToken = header.authorization
    //check if token has authorization
    if (typeof rawToken === "undefined") {
        return null
    }
    const splitRawToken = rawToken.split(" ")
    //Check if it is bearer token

    if (splitRawToken[0] != "Bearer") {
        return null
    }
    //check if it is long enough
    if (splitRawToken.length === 2) {
        return splitRawToken[1]
    }

}

const validateAccessToken = async (token) => {
    try {
        const decodedToken = jwt.decode(token, { complete: true })
        const kid = decodedToken.header.kid
        const getSigningKey = promisify(jwksClient.getSigningKey)
        const key = await getSigningKey(kid)
        const signingKey = key.publicKey
        const alg = decodedToken.header.alg

        const options = { algorithms: alg }
        jwt.verify(token, signingKey, options)
        return decodedToken.payload

    } catch (error) {
        console.log(error)
        return null
    }
}

module.exports = { getAccessTokenFromHeaders, validateAccessToken }