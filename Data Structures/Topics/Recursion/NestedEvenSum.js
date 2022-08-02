let nestedEvenSum = (obj) => {
    let result = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            result += nestedEvenSum(obj[key]);
        }
        else if (typeof (obj[key]) == 'number') {
            result += Number(obj[key]);
        }
    }
    return result;

}

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

nestedEvenSum(obj1) // 6