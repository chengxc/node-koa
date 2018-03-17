const Koa = require('koa');
const app = new Koa();

//注册一个中间件
app.use(async (ctx,next)=>{
    console.log("进入中间件",ctx.request.url);

    //每一个中间件执行完毕都必须要执行next()从而让程序可以进入下一个中间件继续处理，否则程序将会发生异常
    next();
})

app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(3000, () => {
    console.log("已经成功运行");
});