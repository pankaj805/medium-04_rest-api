import {Router} from 'express';
let router = Router();

router.post('/hello',(req,res)=>{

    let uname = req.body.username;

    res.status(200).send({
        status:true,
        response:`Hello ${uname}`
    });
});

export default router;