const http=require("http");
const port=8081;
const toDoList=["learn","apply","suceed"];
http.createServer((req,res)=>{
    const {method,url}=req;
    // console.log(method,url);
    if(url === "/todos"){
        if(method === "GET"){
            res.writeHead(200);
            res.write(toDoList.toString());
        }
        else if(method === "POST"){
           let body="";
           req. on('error',(err)=>{
            console.log(err);
           })
           .on('data',(chunk)=>{
            body += chunk;
            // console.log(chunk);
           })
           .on('end',()=>{
            body=JSON.parse(body);

            let newToDo=toDoList;
            newToDo.push(body.item);
            // console.log("data:",body);
           });
        }else if(method === "DELETE"){
            let body="";
            req. on('error',(err)=>{
             console.log(err);
            })
            .on('data',(chunk)=>{
             body += chunk;
             })
             .on('end',()=>{
                body=JSON.parse(body);
                let deleteThisItem=body.item;
                for(i=0;i<toDoList.length;i++){
                    if(toDoList[i]===deleteThisItem){
                        toDoList.splice(i,1);
                        break;
                    }else{
                        console.log("Error:Match not found");
                        break;
                    }
                }
             });
            }else {
            res.writeHead(501);
        }
    }else{
        res.writeHead(404);
    }
    res.end();
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.write("<h2>Hey server started its me vm 1234567</h2>");
//     res.end();
})
.listen(port,()=>{
    console.log(`NodeJs Server Started Running on Port ${port}`);
});
 