const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const desiredLength = 4

//https://javascript.info/task/shuffle
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let t = array[i]
        array[i] = array[j]
        array[j] = t


    }
    const keepArray = array.slice(0, desiredLength)
    const removeArray = array.slice(desiredLength)
    console.log("KeepArray", keepArray);
    console.log("RemoveArray", removeArray);
    //return newArray
}

shuffle(array)