export const myFetch = async (method, token, functionName, payload = null) => {
    const url = ".netlify/functions/"
    const options = {
        method,
        headers: { Authorization: `Bearer ${token}` }
    }
    if (payload) {
        options.body = JSON.stringify(payload)
    }

    const result = await fetch(`${url}${functionName}`, options)
    console.log(`${url}${functionName}`)
    console.log("Fetch:", `${url}${functionName}`, options);
    const data = await result.json()
    return data


}