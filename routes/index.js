var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

/* GET questions*/
router.get('/quizes/question', quizController.question);


/*GET answer*/
router.get('quizes/answer', quizController.answer);

// export module
module.exports = router;
