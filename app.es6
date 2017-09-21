import Koa from'koa';
const app = new Koa();
import router from 'koa-simple-router';
import render from 'koa-swig';
import server from 'koa-static';
import 'babel-polyfill';
import 'babel-register';
import co from 'co';

import CONFIG from './config/config';
import initController from './controller/initController';

initController.init(app, router);

app.context.render = co.wrap(render({
    root: CONFIG.get('viewsDir'),
    autoescape:true,
    cache:'memory',
    ext:'html',
    writeBody: false
}));

app.use(server(CONFIG.get('staticDir')));

app.listen(CONFIG.get('port'), function() {
    console.log('server is running!');
});

export default app