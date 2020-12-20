const fs = require('fs')
fs.readFile('./resource/txt.md',(err,data)=>{
    if(err) { throw err }
    else{ console.log(data.toString()) }
})

const p = new Promise(function(resolve,reject){
    fs.readFile('./resource/txt.md',(err,data)=>{
        if(err) reject(err)
        else resolve(data.toString())
    })
})
p.then(function(data){
  console.log(data)
},function(reason){
  console.log(reason)
})
