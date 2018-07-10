const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
	res.render('hello', {
		name: 'John',
		cat: req.query.cat,
	});
});

router.get('/reverse/:name', (req, res) => {
	res.send([...req.params.name].reverse().join(''));
});

module.exports = router;
