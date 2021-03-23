const model=require("../database/model/eventModels");

function editEventHandler(req,res,next){
const body=req.body;
if(!body.id) {
    res.status(422).send({error:"event id not found"})
}else{
if(!body.title || !body.description || !body.date || !body.location )
{
res.status(422).send({status:"some of the field are not registered"})       
}else{

    model.editEventTitle({id:body.id,title:body.title}).catch(next);
    model.editEventDescription({id:body.id,description:body.description}).catch(next)
    model.editEventLocation({id:body.id,location:body.location}).catch(next)
    model.editEventDate({id:body.id,date:body.date}).then(data=>{
res.status(200).send({status:"event updated successfully"})      

    }).catch(next)
}
}

}



module.exports=editEventHandler;