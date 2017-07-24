var http = require("http");
			
var fs = require("fs");
			
			http.createServer(function(req,res){
			    
			    res.setHeader("Access-Control-Allow-Origin","*")
			    
			    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"})
			    
			    fs.readFile("../data/car.json","utf8",function(err,data){
			        
			        if(err){
			            throw err
			        }
			        
			        res.end(data)
			        
			    })
			}).listen(8886)
			
			console.log("成功")
