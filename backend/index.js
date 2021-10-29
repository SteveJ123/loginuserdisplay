const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port =  process.env.PORT || 3000;
const userSchema = require('./models/User');
const userRoute = require('./api/userRouter');
const app = express();
app.use(cors());
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/', (req,res)=>{
    console.log("home page");
    res.send("hello");
});
app.use('/users', userRoute);

 mongoose.connect('mongodb+srv://testdb:test@cluster0.cdc3z.mongodb.net/userDetail?retryWrites=true&w=majority',{
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


app.listen(port,()=>{
    console.log("app running");
})