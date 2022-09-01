// Code your solution here

const findMatching = (driverArr, name) => {
    const names = driverArr.filter((str)=>{
        return str.toLowerCase().indexOf(name.toLowerCase()) >= 0
    })
    return names
}