
const express = require('express');

const router = express.Router();

const { loginUser } = require('../../controllers/login.controllers');

const resource = 'login';

const route = `/${resource}`;

router.post( route, loginUser );

module.exports = router;