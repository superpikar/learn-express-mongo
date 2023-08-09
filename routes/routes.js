const express = require('express');
const router = express.Router();

router.post('/post', (req, res) => {
  res.send('Post API');
});
router.get('/get', (req, res) => {
  res.send('Get all API');
});
router.get('/get/:id', (req, res) => {
  res.send(`Get by ID API. ID=${req.params.id}`);
});
router.patch('/update/:id', (req, res) => {
  res.send('Update by ID API');
});
router.patch('/delete/:id', (req, res) => {
  res.send(`Delete by ID API. ID=${req.params.id}`);
});

module.exports = router;
