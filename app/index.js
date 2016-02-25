(()=>{
    'use strict';
    const express = require('express'),
           routes = require('./routes'),
              app = express();

    routes(app);

    app.use('/client', express.static(process.cwd() + '/client'));

    module.exports = app;

})();
