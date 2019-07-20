const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    // app.use(proxy(['/api', '/api/', '/api/v1/', '/api/v1/containers', '/api/v1'], //context
    app.use(proxy('/api',
        { target: 'http://localhost:3001/',}
    ));
}
