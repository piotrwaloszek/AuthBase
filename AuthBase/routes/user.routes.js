const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
    if(!req.user){
      res.redirect('/no-permission');
    } else {
      next();
    }
  };

router.get('/logged', isLogged, (req, res) => {
  res.render('logged', {user: req.user._json.name, image: req.user._json.picture});
});

router.get('/profile/', isLogged, (req, res) => {
  res.render('profile');
});

router.get('/profile/settings',  isLogged, (req, res) => {
    res.render('profileSettings');
  });

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});


module.exports = router;