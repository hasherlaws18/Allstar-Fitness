var express = require('express');
var router = require('express').Router();

const credential = {
    email: 'someone@gmail.com',
    password: '12345'
};

router.post('login', (req, res) => {
    if(req.body.email == credential.email && req.body.password == credential.password ) {
        req.session.user = req.body.email;
        res.redirect()
    } else {
        res.end('wrong username')
    }
});

router.get('dashborad', (req, res) => { 
    if(req.session.user) {
        res.render('dashboard', {user: req.body.session})
    } else {
        res.send('Unauthorize User')
    }
})