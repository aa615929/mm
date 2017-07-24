var http = require("http");
			
var fs = require("fs");
			
			http.createServer(function(req,res){
			    
			    res.setHeader("Access-Control-Allow-Origin","*")
			    
			    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"})
			    
			    fs.readFile("../data/carhd.json","utf8",function(err,data){
			        
			        if(err){
			            throw err
			        }
			        
			        res.end(data)
			        
			    })
			}).listen(8887)
			
			console.log("成功")
