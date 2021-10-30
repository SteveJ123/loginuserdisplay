const router = require('express').Router();
const User = require('../models/User');

router.get('/',(req, res)=>{
    User.find({}).then(users=>{
        console.log(users)
        res.status(200).json(users)
    }).catch(err => {
        console.log(err)
        res.status(500).json({error:err.message});
    });
})

router.post('/register',(req,res)=>{   
    console.log(req.body)
    let user = new User({
        emailId:req.body.emailId,
        username: req.body.username,
        password:req.body.password        
    });
    user.save().then(result=>{
        console.log(result);
        res.status(200).json({
            newstudent:result
        }).catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        })
    }
        )



    res.send('ok');
})

module.exports = router;