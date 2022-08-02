// collect all the strings in a nested object in an array and return array

let collectStrings = (obj) => {
    let result= [];
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
           result.push(obj[key]);
        }
        else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            result = [...result, ...collectStrings(obj[key])]
        }
    }
    return result;
}


input 
// obj1 = 
// {
//     "outer": 2,
//     "obj": {
//         "inner": 2,
//         "otherObj": {
//             "superInner": 2,
//             "notANumber": true,
//             "alsoNotANumber": "yup"
//         }
//     }
// }

collectStrings(obj1)
// output
// ["yup"]