const test = require('express').Router()

test.route('/')
    .get((req, res) => {
        res.json({ message: ['/', 'test'] })
    })

test.route('/hello')
    .get((req, res) => {
    res.json({ express: ['/hello', 'tesst1'] });
});

module.exports = test