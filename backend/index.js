const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port =  process.env.PORT || 8080;
const userSchema = require('./models/User');
const userRoute = require('./api/userRouter');
const app = express();
app.use(cors());
const bodyParser = require('body-parser')

app.use(express.static(__dirname+'/..'+'/dist/loginuser'))
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/..'+'/dist/loginuser/index.html')
});
app.use('/api/users', userRoute);

 mongoose.connect("mongodb+srv://testdb:test@cluster0.cdc3z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
     }
).then( ()=>{
    // async
    console.log("connected to db");
    // const user = {
    //     username: "user2",
    //     password: 'test'
    // }
    // await new userSchema(user).save();
}).catch(err=>console.log(err))


app.get('**', (req,res)=>{
    res.sendFile(__dirname+'/..'+'/dist/loginuser/index.html')
});

app.listen(port,()=>{
    console.log("app running");
})