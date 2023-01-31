const router = require('express').Router();
const { Item, Category, User, UserItem } = require('../../models');

// The `/api/items` endpoint

// get all items
router.get('/', async (req, res) => {
  console.log("All Items Get Route Start")
  try {
    const itemData = await Item.findAll({
      include: [
        {
          model: Category,
          attributes: ["name"]
      },
        {
          model: User,
          through: UserItem, 
        },
      ],
    });
    console.log(itemData)
    if (!itemData) {
      res.status(404).json({ message: 'No food item with this id!' });
      return;
    }
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  

// get one item
router.get('/:id', async (req, res) => {
  console.log("Single Items Get Route Start")
  try {
    const singleItem = await Item.findByPk(req.params.id, {
      include: [
        {
          model: Category,
          attributes: ["name"]
      },
        {
          model: User,
          through: UserItem, 
        },
      ],
    });
    console.log(singleItem)
    if (!singleItem) {
      res.status(404).json({ message: 'No food item with this id!' });
      return;
    }
    res.status(200).json(singleItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new food item
router.post('/', async (req, res) => {
  console.log("Item Post Route Start")
  try {
    const newItem = await Item.create(req.body, {
      include: [
        {
          model: Category,
          attributes: ["name"]
      },
        {
          model: User,
          through: UserItem, 
        },
      ],
    });
    console.log(newItem)
    if (!newItem) {
      res.status(404).json({ message: 'Please enter a food item' });
      return;
    }
    res.status(200).json(newItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const itemToUpdate = await Item.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!itemToUpdate[0]) {
      res.status(404).json({ message: 'No item with this id!' });
      return;
    }
    res.status(200).json(itemToUpdate);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  const itemToDelete = await Item.findByPk(req.params.id)
  Item.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then(() => {
    res.json(`Item has been removed!`)
  })
  .catch((err) => {
    res.json(err);
  })
});

module.exports = router;
