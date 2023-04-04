var express = require('express');
var router = express.Router();

const PostsControllers = require('../controllers/posts')

/* GET users listing. */
router.get('/', PostsControllers.getPosts);

router.post('/', PostsControllers.createPosts);

router.delete('/', PostsControllers.deleteAll);

router.delete('/:id', PostsControllers.deleteOne);

router.patch('/:id', PostsControllers.updataOne);


module.exports = router;
