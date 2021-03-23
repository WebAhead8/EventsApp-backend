const model=require("../database/model/eventModels");

function getEventsHandler(req,res,next){
    const id = req.params.id;
    model.getEventById(id).then(data=>{
        if(data.length>0)
        {
            res.status(200).send(data)
        }else{
            res.status(204).send({status:"no event found"})
    
        }
    }).catch(next)
}



module.exports=getEventsHandler;