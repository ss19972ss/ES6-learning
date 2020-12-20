const fs = require('fs')

function read1(){
    return new Promise((resolve,rejected)=>{
        fs.readFile("../resource/txt.md",(err,data)=>{
            if(err) rejected(err)
            resolve(data)
        })
    })
}
function read2(){
    return new Promise((resolve,rejected)=>{
        fs.readFile("../resource/txt2.md",(err,data)=>{
            if(err) rejected(err)
            resolve(data)
        })
    })
}
function read3(){
    return new Promise((resolve,rejected)=>{
        fs.readFile("../resource/txt3.md",(err,data)=>{
            if(err) rejected(err)
            resolve(data)
        })
    })
}

async function main(){
    const res1 = await read1()
    const res2 = await read2()
    const res3 = await read3()
    console.log(res1.toString())
    console.log(res2.toString())
    console.log(res3.toString())
}
main()