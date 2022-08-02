// parse through the object and convert all the numbers to string

let stringifyNumbers = (obj)=>{
    for(let key in obj){
        if(typeof obj[key] === 'number'){
            obj = {...obj, key: obj[key].toString() }
        }
        else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
            obj = {...obj, ...stringifyNumbers(obj[key])}
        }
    }
    return obj;

}

// obj = {
//     "a": "2",
//     "b": {
//         "b": "2",
//         "bb": {
//             "b": "3",
//             "bb": {
//                 "b": "2"
//             }
//         }
//     },
//     "c": {
//         "c": {
//             "c": "2"
//         },
//         "cc": "ball",
//         "ccc": "5"
//     },
//     "d": "1",
//     "e": {
//         "e": {
//             "e": "2"
//         },
//         "ee": "car"
//     }
// }


stringifyNumbers(obj)
// {
//     "a": "2",
//     "b": {
//         "b": "2",
//         "bb": {
//             "b": "3",
//             "bb": {
//                 "b": "2"
//             }
//         }
//     },
//     "c": {
//         "c": {
//             "c": "2"
//         },
//         "cc": "ball",
//         "ccc": "5"
//     },
//     "d": "1",
//     "e": {
//         "e": {
//             "e": "2"
//         },
//         "ee": "car"
//     }
// }