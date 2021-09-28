/**
 * Name: Amaya Kejriwal
 * Date: July 2021
 *
 * -- your description of what this file does here --
 */
 'use strict';

 const express = require('express');
 const app = express();

 app.use(express.urlencoded({ extended: true })) // for application/x-www-form-urlencoded
 app.use(express.json()); // for application/json

 app.use(express.static('public'));
 const PORT = process.env.PORT || 8000;
 app.listen(PORT);
