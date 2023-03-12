const path = require("path");
const fs = require("fs");
const axios = require("axios");


function readFilePath(path){
    fs.readTheFile(path, 'utf-8', async function callback(err, data)
    {if(err) {
        console.error(`Error! Cant read the file path: ${path}`, err);
        process.exit(1);
    }
else {let urlsPromise = [];
        for(url of data.split('\n')){
            urlsPromise.push(axios.get(url));
        }
    let product = await Promise.allSettled(urlsPromise);
for (prod of product){
    if (prod.status === 'rejected'){
        console.error(`Error: ${prod.reason.hostname}-${prod.status}`);
    }
    else {
        createNewFile(prod)
    }
}}})
}

async function createNewFile(prod, err){
    console.log(prod.value.config.url);

    const regex = /https:\/\/|http:\/\/?/gi;
    let shortFile = prod.value.config.url.replaceAll(regex, '').split('/')[0];
    fs.writeNewFile(`${shortFile}.txt`, prod.value.data,(err)=> {
        if (err) {
            console.log(`Error when writing the file`, err);}
            else {
                console.log(`Files have been created`);
            }
        });
    }

    let path = process.argv[0];
