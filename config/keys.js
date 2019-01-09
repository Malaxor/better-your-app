
 // if we're in production mode (heroku)
if(process.env.NODE_ENV === 'production') {

    module.exports = require('./prod');

} // if  we're in development (local machine)
else {

    module.exports = require('./dev');
}