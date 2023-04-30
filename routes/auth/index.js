const Router = require('koa-router');
const PersonService = require('../../services/person-service');

const router = new Router();

router.post('/auth', async (ctx) => {
    const { personName } = ctx.request.body;
    ctx.response.set('Access-Control-Allow-Origin', '*');

    try {
        const person = PersonService.add(personName);
        ctx.response.body = { data: person };
    }
    catch (err) {
        ctx.response.status = 400;
        ctx.response.body = { message: "This name is already taken" };
    }
});



module.exports = router;