const router = require('express').Router();
const { addFavorite, removeFavorite} = require('../../controllers/userController');


router.route('/:userId/favorites')
    .post(addFavorite)
    .delete(removeFavorite);
    

module.exports = router;

