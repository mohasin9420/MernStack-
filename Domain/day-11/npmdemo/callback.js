const { error } = require('console');
const fs = require('fs');

function readfilecallback(filepath,callback)
{
    fs.readFile(filepath,'utf8',(err,data) => {
        if(err){
            callback(err,null);
        }
        else{
            callback(null,data);
        }
    })

}
readfilecallback("demo1.txt",(error,result) =>
{
    if (error){
        console.log(error)
    }
    else{
        console.log("file content")
        console.log(result);
    }
});