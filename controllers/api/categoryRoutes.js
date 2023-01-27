const router = require('express').Router();
const { Category, Item } = require('../../models');

// Find all categories
router.get('/', (req, res) => {
  Category.findAll({
    attributes: ['id', 'name'],
    include: Item,
  })
    .then((allCategoryData) => res.status(200).json(allCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Find one category by its 'id' value
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'name'],
    include: Item,
  })
    .then((singleCategoryData) => {
      if (!singleCategoryData) {
        res.status(400).json({
          message:
            'No matching category with this id. Please enter a valid category id.',
        });
        return;
      }
      res.status(200).json(singleCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a new category
router.post('/', (req, res) => {
  Category.create(req.body)
    .then((newCategoryData) => res.status(200).json(newCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Update a category by its 'id' value
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedCategoryData) => {
      if (!updatedCategoryData) {
        res.status(400).json({
          message:
            'No matching categories with that id. Please enter a valid category id.',
        });
        return;
      }
      res.status(200).json(updatedCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// Delete a category by its 'id' value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCatagoryData) => {
      if (!deletedCatagoryData) {
        res.status(400).json({
          message:
            'No matching categories with that id. Please enter a valid category id.',
        });
        return;
      }
      res.status(200).json(deletedCatagoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
