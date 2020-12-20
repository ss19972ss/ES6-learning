const fs = require("fs")
const { resolve } = require("path")

const p = new Promise((resolve,reject)=>{
    fs.readFile("./resource/txt.md",(err,data)=>{
        resolve(data)
    })
})
p.then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile("./resource/txt2.md",(err,data)=>{
            resolve([value,data])
        })
    })
}).then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile("./resource/txt3.md",(err,data)=>{
            value.push(data)
            resolve(value)
        })
    })
}).then(value=>{
    console.log(value.join('\r\n'))
})