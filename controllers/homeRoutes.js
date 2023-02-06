const router = require('express').Router();
const { Item, Category } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // Get all food items and JOIN with user data
    const itemData = await Item.findAll({});

    // Serialize data so the template can read it
    const items = itemData.map((item) => item.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      items,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/add', withAuth, async (req, res) => {
  try {
    const allCategoryData = await Category.findAll({});
    console.log(allCategoryData);
    const allCats = allCategoryData.map((cat) => cat.get({ plain: true }));
    console.log(allCats);
    res.render('add', { allCats, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/landing', (req, res) => {
  res.render('landing', {
    landing_page: true,
  });
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
