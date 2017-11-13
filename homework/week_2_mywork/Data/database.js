const fs = require('fs')

exports.save = (data, filepath) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, JSON.stringify(data), (err, contents) => {
            if (err) return reject(err)
            resolve(contents)
        })
    })
}

//Using async
exports.load = async(filepath) => {
    return new Promise((resolve, reject) => {
        return fs.readFile(filepath, 'utf8', (err, contents) => {
            if (err) return reject(err)
            resolve(JSON.parse(contents))
        })
    })
}