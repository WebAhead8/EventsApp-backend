const model = require("../database/model/eventModels");
function deleteEventHandler(req, res, next) {
  const id = req.params.id;
 
    model.getEventById(id).then((event) => {
        if (event.length > 0) {
            if (JSON.stringify(event[0].owner[0]._id) === JSON.stringify(req.user)) {
                
                model.deleteEvent(id).then((data) => {
                  res.status(200).send({ status: "event deleted successfully" });
                })
                .catch(next);

            }else{
        res.status(401).send({status:"not Authorized"})

            }


        }else{
            res.status(400).send({ status: "event not found" });
        }

    }).catch(next)
     
      
}


module.exports = deleteEventHandler;
