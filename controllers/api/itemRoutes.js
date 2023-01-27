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
