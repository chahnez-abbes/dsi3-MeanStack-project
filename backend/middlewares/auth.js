const jwt = require('jsonwebtoken');

const verify2= (req, res, next) => {

console.log("a");
var test=false;
  const authHeader=req.headers.authorization;
    if(authHeader){
      console.log("b");
      const token=authHeader.split(" ")[1];
      jwt.verify(token,  'RANDOM_TOKEN_SECRET',(err,user)=>{
        if(err){
          console.log("c");
          return false;
          
        }
        console.log("d");
        test=true;
      })
    }else{
      console.log("e");
     return false;
    }
    return test;


};
module.exports=verify2;