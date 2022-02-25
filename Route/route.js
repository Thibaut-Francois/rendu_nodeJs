const express = require('express')
const router = express.Router()
const postController = require('./../controllers/controller')

console.log("test route")
router.post('/',postController.createPost)
router.get('/:id',postController.getPostId)
router.get('/',postController.getAllPost)

router.delete('/:id',postController.deletePostId)
router.delete('/',postController.deletePostId)

router.put('/:id',postController.updatePostId)

module.exports = router
