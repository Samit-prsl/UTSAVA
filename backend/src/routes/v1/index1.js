const express = require('express');
const UserController = require('../../controllers/user-controllers');

const router = express.Router();

router.post('/user', UserController.create );
router.delete('/user/:id', UserController.destroy);
router.get('/user/:id', UserController.get);
router.patch('/user/:id', UserController.update);
module.exports = router;
