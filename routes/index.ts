import * as express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({ title: 'Express' });
});

module.exports = router;
