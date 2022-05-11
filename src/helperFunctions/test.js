const myjson = {
    234: { name: "Hans", face: "Landa" },
    345: { name: "Mia", face: "Wallace" },
    456: { name: "Black", face: "Mamba" },

}

export const iterate = () => {
    const myid = "234"
    const result = Object.keys(myjson)
    myjson[myid].face = "Landa2"
    console.log(myjson);
}

