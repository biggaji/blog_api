const router = require('express').Router();
const { get_all_articles, get_one_article, delete_one_article, create_article, update_one_article} = require('../controllers/articles');
const { verify } = require('../middlewares/verify_auth');

router.get('/', get_all_articles);
router.get('/:articleid', get_one_article);
router.delete('/delete/:articleid',verify, delete_one_article);
router.patch('/update/:articleid',verify, update_one_article);
router.post("/create", verify, create_article);

module.exports = router;