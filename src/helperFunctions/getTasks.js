const { useAuth0 } = require("@auth0/auth0-react");


const getTasks = async (token) => {


    console.log(token);
    const options = {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` }
    }
    console.log(options);
    const result = await fetch("http://localhost:8888/.netlify/functions/getTasks", options)
    const data = await result.json()
    return data

}

module.exports = { getTasks }