const http=require("http");
const port=8081;
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h2>Hey server started its me vm 1234567</h2>");
    res.end();
})
.listen(port,()=>{
    console.log(`NodeJs Server Started Running on Port ${port}`);
});

