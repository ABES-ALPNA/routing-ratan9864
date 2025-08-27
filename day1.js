/*console.log("This")

const data = require("fs")
data.writeFileSync("abc.txt", "hello ")

const readData= data.readFileSync("abc.txt","utf-8")



function sum(a,b){
    return a+b

}
function mul(a,b){
    return a*b
}
module.exports={
    sum , mul
}
    */

const server = require("http")
server.createServer((req,res)=>{
  
    if(req.url === '/'){
        res.write("Home Page")
    }
    else
        if(req.url==='/about'){
            res.write("This is about page")
        }
        else
            if(req.url==='/contact'){
                res.write("This is contact page")
            }

            else{
                res.write("404 error not found")
            }
}).listen(5000,()=>{
    console.log("Server is started")
})