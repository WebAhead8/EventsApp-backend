const model=require("../database/model/eventModels");

function editEventHandler(req,res,next){
const body=req.body;
if(!body.id) {
    res.status(422).send({error:"event id not found"})
}else{

model.getEventById(body.id).then(event=>{
    if(event.length>0)
    {
 
        if(JSON.stringify(event[0].owner[0]._id)===JSON.stringify(req.user))
        {
            
            if(!body.title || !body.description || !body.date || !body.location )
            {
            res.status(422).send({status:"some of the field are not registered"})       
            }else{
                
                model.editEventTitle({id:body.id,title:body.title}).catch(next);
                model.editEventDescription({id:body.id,description:body.description}).catch(next)
                model.editEventLocation({id:body.id,location:body.location}).catch(next)
                if (body.image){
                    model.editEventImage({id:body.id,image:body.image})}
                model.editEventDate({id:body.id,date:body.date}).then(data=>{
            res.status(200).send({status:"event updated successfully"})      
            
                }).catch(next)
            }


        }//if the user that edit is the owner of the event
        else{
        res.status(401).send({status:"not Uthorized"})
        }
    }else{
        res.status(400).send({status:"invalid Event Id"})

    }
})


}

}



module.exports=editEventHandler;