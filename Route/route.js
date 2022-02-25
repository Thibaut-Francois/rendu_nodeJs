const express = require('express')
const router = express.Router()
const postController = require('./../controllers/controller')

console.log("test route")
router.post('/',postController.createPost)
router.get('/:id',postController.getPostId)
router.get('/',postController.getAllPost)

router.delete('/:id',postController.deletePostId)
router.delete('/',postController.deletePostAll)

router.put('/:id',postController.updatePostId)
router.put('/',postController.updatePostqejqzusgrfi)

module.exports = router
