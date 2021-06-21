const express = require('express');
const messageController = require('../controllers/message');

const router = express.Router();

router.get('/', messageController.home);
router.get('/template', messageController.template);
router.get('/custom', messageController.custom);
router.post('/template', messageController.createTemplatedMessage);
router.post('/custom', messageController.createCustomMessage);

module.exports = router;
