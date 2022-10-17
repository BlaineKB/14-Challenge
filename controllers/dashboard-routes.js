const router = require("express").Router();
const { Post } = require("../models/");

router.get("/", (req, res) => {
  Post.findAll({
    where: {
      userId: req.session.userId
    }
  })
    .then(dbPostData => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("all-posts-admin", {
	// Change which layout view by passing in this option, if you’d like to use something besides views/layouts/main.handlebars
        layout: "dashboard",
        posts
      });
    })
      .catch(err => {
        console.log(err);
        res.redirect("login");
      });
});

module.exports = router;