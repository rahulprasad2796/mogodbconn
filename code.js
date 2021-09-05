const mongoose = require("mongoose");
const express = require("express");

const app = express();

const dbURI = "mongodb+srv://Rahul:rahul.dbUser@cluster0.vz6wy.mongodb.net/edyoda?retryWrites=true&w=majority";

const options = {
  useUnifiedTopology:true,
  useNewUrlParser:true
}

mongoose.connect(dbURI,options)
.then(()=>console.log(`database established`))
.catch((err) => console.log(err))



const peopleSchema = new mongoose.Schema({},{strict:false});
 var npeople = mongoose.model('npeople',peopleSchema)

 app.post('/npeople',async (req,res)=> {
   var data = await npeople.insertMany([{
       "id":"1",
       "name":"Rahul",
       "email":"rahul@gkl.com"
}])
   res.send(data)
})

app.get("/npeople", async (req,res) => {
  var data = await npeople.find();
  res.send(data)
})

app.listen(8000, () => console.log(`server started`))