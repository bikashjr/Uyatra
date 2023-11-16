const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.json({ data: "", msg: "API Routes are working .." })
});

module.exports = router;