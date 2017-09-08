/*
koa2+ES6封装api
*/
const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const rp = require('request-promise');
const convert = require('koa-convert');
const path = require('path');
const render = require('koa-swig');
const co = require('co');
const server = require('koa-static');
const router2 = require('koa-simple-router');

const Count={
    postCount: async(app, ctx)=>{
        let result = await rp('http://127.0.0.1:8080/praise-by-koa/server/post_count.php');
        return result;
        console.log(result);
    },
    getCount: async(app, ctx)=>{
        let result = await rp('http://127.0.0.1:8080/praise-by-koa/server/get_count.php');
        return result;
    }
}

router.all('/api/post_count',async (ctx, next)=>{
    let result = await Count.postCount();
    ctx.body = result;
  });

router.get('/api/get_count',async (ctx, next)=>{
    let result = await Count.getCount();
    ctx.body = result;
});

app.use(router.routes()).use(router.allowedMethods());

// app.use(ctx =>{
//     if (ctx.request.path === '/') {
//         ctx.response.type = 'html';
//         ctx.response.body = '<p>Hello world</p>';
//       }else if(ctx.request.path === '/index/index'){

//       }
// });

app.context.render = co.wrap(render({
    root: path.join(__dirname,'./views'),
    autoescape:true,
    cache:'memory',
    ext:'html',
    writeBody: false
}));

app.use(router2(_=>{
    _.get('/',(ctx,next)=>{
        ctx.body = 'Hello world';
    })
    _.get('/index/index',async (ctx,next)=>{
        ctx.body = await ctx.render('index.html');
    })
}))

app.use(convert(server(path.join(__dirname,'./public'))))

app.listen(8081, function() {
    console.log('server is running!');
});