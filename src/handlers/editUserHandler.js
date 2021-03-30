const model = require("../database/model/userModels");

function editUserHandler(req, res, next) {
  const body = req.body;
  if (!req.user) {
    res.status(422).send({ error: "user id not found" })
  } else {

    model.getUserById(req.user).then(user => {
      if (user.length > 0) {

        if (JSON.stringify(user[0]._id) === JSON.stringify(req.user)) {

          if (!body.firstName || !body.lastName || !body.phoneNumber || !body.birthday || !body.profileImage) {
            res.status(422).send({ status: "some of the field are not registered" })
          } else {

            model.editUserFirstName({ id: req.user, firstName: body.firstName }).catch(next);
            model.editUserLastName({ id: req.user, lastName: body.lastName }).catch(next);
            model.editUserEmail({ id: req.user, email: body.email }).catch(next);
            model.editUserPhone({ id: req.user, phoneNumber: body.phoneNumber }).catch(next);
            model.editUserBirthday({ id: req.user, birthday: body.birthday }).catch(next)

            model.editUserImage({ id: req.user, profileImage: body.profileImage }).then(data => {
              res.status(200).send({ status: "user updated successfully" })

            }).catch(next)
          }
        }
        else {
          res.status(401).send({ status: "not Uthorized" })
        }
      } else {
        res.status(400).send({ status: "invalid user Id" })

      }
    })
  }
}

module.exports = editUserHandler;
