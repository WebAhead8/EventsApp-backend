const model=require("../database/model/eventModels");

function getEventById(req,res,next){
    model.getAllEvents().then(data=>{
        if(data.length>0)
        {
            res.status(200).send(data)
        }else{
            res.status(401).send({status:"no event found"})
        }
    }).catch(next)
}



module.exports=getEventById;