const model=require("../database/model/eventModels");

function addEventHandler(req,res,next){
    const body=req.body;
    // const owner=req.user
    if(!body.title || !body.description || !body.date || !body.location || !body.owner)
    {
        res.status(422).send({error:"fill all the field"})

    }else{
        model.addEvent(body).then(eventDetails=>{
            res.status(200).send(eventDetails);
        }).catch(next)
    }
}


module.exports=addEventHandler;