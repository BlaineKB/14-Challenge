const router = require('express').Router();
const{User,Post,Comment} = require('../../models/');
router.post('/',(req,res) => {
    User.create(req.body)
    .then(dbUserData => {
        req.session.save(() => {
          req.session.userId = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;

          res.json(dbUserData);
        });
      }).catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})

module.exports = router;