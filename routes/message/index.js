const Router = require('koa-router');
const messagesService = require('../../services/message-service');

const router = new Router();
router.post('/message/add', async (ctx) => {
    const { personId, text } = ctx.request.body;
    ctx.response.set('Access-Control-Allow-Origin', '*');

    try {
        messagesService.add(personId, text);
        // ctx.response.body = { data: newMessage };
    }
    catch (err) {
        ctx.response.status = 400;
        // ctx.response.body = { message: "Error" };
    }
});

module.exports = router;