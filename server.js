const express = require('express')
const app = express()
app.use(express.static(__dirname+'/dist/loginauthentication'))
app.get('**',(req,res)=>{
    return res.sendFile(__dirname+'/dist/loginauthentication/index.html')
})
app.listen(process.env.PORT || 8080,()=>{
    console.log('server is running.')
})