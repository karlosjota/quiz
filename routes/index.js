var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

/* GET questions*/
router.get('/quizes/quiestion', quizController.question);


/*GET answer*/
router.get('quizes/answer', quizController.answer);

// export module
module.exports = router;
