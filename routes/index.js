const combineRouters = require('koa-combine-routers');
const auth = require('./auth/index.js');
const addMessage = require('./message/index.js');

const router = combineRouters(
    auth,
    addMessage
);

module.exports = router;