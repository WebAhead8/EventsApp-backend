const model=require("../database/model/eventModels")
const modeluser=require("../database/model/userModels")
function getUserEventsHandler(req, res, next) {
const id=req.params.id;

        model.getUserEvents(id).then(data=>{
            if(data.length>0)
            {   
                res.status(200).send(data)
            }else{
                res.status(400).send({status:"no event for this user"})

            }
        })




}

module.exports=getUserEventsHandler;