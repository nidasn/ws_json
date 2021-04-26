// const fs = require('fs')

//  fs.readFile('./uts.json', 'utf-8', (err, jsonString) => {
//     if (err) {
//         console.log(err);
//     } else {
//        try{
//             const data = JSON.parse(jsonString)
//            console.log(data.address);
//        } catch(err) {
//             console.log('Error parsing JSON', err)
//        }
//    }
//  });

try {
    const jsonString = fs.readFileSync('./uts.json', 'utf-8')
    const uts = JSON.parse(jsonString)
    console.log(uts.address)
} catch (err) {
    console.log(err)
}

