const  express = require('express');
const  router = express.Router();

router.get('/', async function (req, res, next) {
    res.render('doggo.njk', {
        message: 'Doggo',
        title: 'Doggo',
    });
});

module.exports = router