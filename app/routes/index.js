(()=>{
    'use strict';
    module.exports = (app) => {
        app.route('/')
            .get((req, res)=> {
                res.sendFile(process.cwd() + '/client/html/index.html');
            });
    };

})();

