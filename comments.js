// Create starter for web server application on express framework

const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

// GET request for list of all Comment items.
router.get('/', commentsController.comments_list);

// GET request for creating a Comment. NOTE This must come before routes that display Comment (uses id).
router.get('/create', commentsController.comments_create_get);

// POST request for creating Comment.
router.post('/create', commentsController.comments_create_post);

// GET request to delete Comment.
router.get('/:id/delete', commentsController.comments_delete_get);

// POST request to delete Comment.
router.post('/:id/delete', commentsController.comments_delete_post);

// GET request to update Comment.
router.get('/:id/update', commentsController.comments_update_get);

// POST request to update Comment.
router.post('/:id/update', commentsController.comments_update_post);

// GET request for one Comment.
router.get('/:id', commentsController.comments_detail);

module.exports = router;