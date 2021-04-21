const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const Article = require('../../model/Article')

const { check, validationResult } = require('express-validator');

// @route   GET api/articles
// @desc    Get all articles
// @access  private
router.get('/', auth, async (req, res) => {
  try {
    const articles = await Article.find({});
    res.json(articles)
    
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/articles
// @desc    Insert article
// @access  private
router.post(
    '/', auth,
    [
      check('name', 'Name is required for article').not().isEmpty()
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
  
      const { name, author } = req.body;
      try {

        let article = new Article({
            name, author
        })  

        const result=await article.save();
        res.json({ result });

      } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
      }
    }
  );

module.exports = router;
