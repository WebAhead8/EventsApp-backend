const model=require("../database/model/eventModels")
function deleteEventHandler(req, res, next) {
const id=req.params.id;
model.getEventById(id).then(data=>{
    if(data.length>0){
        model.deleteEvent(id).then(data=>{
            res.status(200).send({status:"event deleted successfully"})
        }).catch(next)
    }else{
        res.status(400).send({status:"event not found"})
    }
})

  




}

module.exports=deleteEventHandler;