export const myFetch = async (method, token, functionName, payload = null) => {
    const url = "http://localhost:8888/.netlify/functions/"
    console.log("options");
    const options = {
        method,
        headers: { Authorization: `Bearer ${token}` }
    }
    if (payload) {
        options.body = JSON.stringify(payload)
    }
    console.log(options.body);

    const result = await fetch(`${url}${functionName}`, options)
    const data = await result.json()
    return data


}