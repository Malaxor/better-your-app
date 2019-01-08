
 // if we're in production mode (heroku)
if(process.env.NODE_ENV === 'production') {

    module.exports = require('./prod');

} // we are in development (local machine)
else {

    module.exports = require('./dev');
}