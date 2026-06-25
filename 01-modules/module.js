function add(a, b) {
    return a + b
}


function sub(a, b) {
    return a - b
}
// console.log(add(2, 5));

module.exports = add
module.exports = sub
//sub will overwrite the add 

module.exports = {
    add, sub
}


exports.addition = (a, b) => a + b

exports.subtraction = (a, b) => a - b 